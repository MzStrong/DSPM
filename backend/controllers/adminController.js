const { Admin } = require("../modules/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "mysecret";

// Create (Admin Register)
async function createAdmin(req, res) {
  const adminData = req.body;
  adminData.password = await bcrypt.hash(adminData.password, 10);
  try {
    const admin = await Admin.create(adminData);
    // res.json(admin);c
    res.json(adminData);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Login
async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;
    // const [result] = await conn
    const result = await Admin.findOne({
      where: { email: email },
    });
    const match = await bcrypt.compare(password, result.password);
    if (!match) {
      res.status(400).json({
        message: "wrong email or password",
      });
      return false;
    }

    const token = jwt.sign({ email, role: "admin" }, secret, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login success",
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: "Login fail",
      error,
    });
  }
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

// Read
async function getAdmins(req, res) {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getAdminById(req, res) {
  const adminId = req.params.id;
  try {
    const admin = await Admin.findOne({
      where: { id: adminId },
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateAdmin(req, res) {
  const adminData = req.body;
  const adminId = req.params.id;
  try {
    const admin = await Admin.update(adminData, {
      where: { id: adminId },
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteAdmin(req, res) {
  const adminId = req.params.id;
  try {
    const admin = await Admin.destroy({
      where: { id: adminId },
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = {
  createAdmin,
  loginAdmin,
  authen,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
