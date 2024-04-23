const { User, Gender } = require("../modules/models");

// Create
async function createUser(req, res) {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      include: {
        model: Gender,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await User.findOne({
      where: { id: userId },
      include: {
        model: Gender,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateUser(req, res) {
  const userData = req.body;
  const userId = req.params.id;
  try {
    const user = await User.update(userData, {
      where: { id: userId },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const user = await User.destroy({
      where: { id: userId },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
