const { Assetment, Evaluation, User } = require("../modules/models");

// Create
async function createAssetment(req, res) {
  const assetmentData = req.body;
  try {
    const assetment = await Assetment.create(assetmentData);
    res.json(assetment);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getAssetments(req, res) {
  try {
    const assetments = await Assetment.findAll({
      include: [{ model: Evaluation }, { model: User }],
    });
    res.json(assetments);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getAssetmentById(req, res) {
  const assetmentId = req.params.id;
  try {
    const assetment = await Assetment.findOne({
      where: { id: assetmentId },
      include: [{ model: Evaluation }, { model: User }],
    });
    res.json(assetment);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateAssetment(req, res) {
  const assetmentData = req.body;
  const assetmentId = req.params.id;
  try {
    const assetment = await Assetment.update(assetmentData, {
      where: { id: assetmentId },
    });
    res.json(assetment);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteAssetment(req, res) {
  const assetmentId = req.params.id;
  try {
    const assetment = await Assetment.destroy({
      where: { id: assetmentId },
    });
    res.json(assetment);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = {
  createAssetment,
  getAssetments,
  getAssetmentById,
  updateAssetment,
  deleteAssetment,
};
