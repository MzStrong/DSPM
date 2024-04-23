const { Admin } = require("../modules/models");

// Create
async function createAdmin(req, res) {
  const adminData = req.body;
  try {
    const admin = await Admin.create(adminData);
    res.json(admin);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
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
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
