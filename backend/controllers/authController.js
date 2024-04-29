const { Admin } = require("../modules/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_JWT;

// Login
async function loginAdmin(req, res) {
  // res.json({
  //   data: "Login Test"
  // })
  try {
    const { email, password } = req.body;
    const result = await Admin.findOne({
      where: { email: email },
    });
    const match = await bcrypt.compare(password, result.password);
    if (!match) { // รหัสไม่ตรง
      res.status(400).json({
        error: "Wrong password!",
      });
      return false;
    }

    const token = jwt.sign({ email, role: "admin" }, secret, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login success",
      token,
      email,
    });
  } catch (error) { // ไม่เจอ Email
    res.status(400).json({
      error: "Wrong email!",
    });
    return false;
    // res.status(401).json({
    //   message: "Login fail",
    //   error,
    // });
  }
  return "S"
}

async function authen(req, res) {
  try {
    const authHeader = req.headers["authorization"];
    let authToken = "";
    if (authHeader) {
      // เอา Bearer ข้างหน้าออก
      authToken = authHeader.split(" ")[1];
    }
    // log token
    console.log("authToken", authToken);
    const user = jwt.verify(authToken, secret);
    // log email
    console.log("user", user.email);

    const checkResult = await Admin.findOne({
      where: { email: user.email },
    });
    if (!checkResult) {
      throw { message: "user not found" };
    }

    const admins = await Admin.findAll();
    res.json({
      admins,
    });
  } catch (error) {
    res.status(403).json({
      message: "Authentication fail",
    });
  }
}

module.exports = {
  loginAdmin,
  authen,
};
