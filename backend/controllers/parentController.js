const { Parent, Gender } = require("../modules/models");

// Create
async function createParent(req, res) {
  const parentData = req.body;
  try {
    const parent = await Parent.create(parentData);
    res.json(parent);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getParents(req, res) {
  try {
    const parents = await Parent.findAll({
      include: {
        model: Gender,
      },
    });
    res.json(parents);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getParentById(req, res) {
  const parentId = req.params.id;
  try {
    const parent = await Parent.findOne({
      where: { id: parentId },
      include: {
        model: Gender,
      },
    });
    res.json(parent);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateParent(req, res) {
  const parentData = req.body;
  const parentId = req.params.id;
  try {
    const parent = await Parent.update(parentData, {
      where: { id: parentId },
    });
    res.json(parent);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteParent(req, res) {
  const parentId = req.params.id;
  try {
    const parent = await Parent.destroy({
      where: { id: parentId },
    });
    res.json(parent);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = { createParent, getParents, getParentById, updateParent, deleteParent };
