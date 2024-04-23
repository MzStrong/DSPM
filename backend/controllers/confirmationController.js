const { Confirmation, Policy, User } = require("../modules/models");

// Create
async function createConfirmation(req, res) {
  const confirmationData = req.body;
  try {
    const confirmation = await Confirmation.create(confirmationData);
    res.json(confirmation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getConfirmations(req, res) {
  try {
    const confirmations = await Confirmation.findAll({
      include: [{ model: Policy }, { model: User }],
    });
    res.json(confirmations);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getConfirmationById(req, res) {
  const confirmationId = req.params.id;
  try {
    const confirmation = await Confirmation.findOne({
      where: { id: confirmationId },
      include: [{ model: Policy }, { model: User }],
    });
    res.json(confirmation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateConfirmation(req, res) {
  const confirmationData = req.body;
  const confirmationId = req.params.id;
  try {
    const confirmation = await Confirmation.update(confirmationData, {
      where: { id: confirmationId },
    });
    res.json(confirmation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteConfirmation(req, res) {
  const confirmationId = req.params.id;
  try {
    const confirmation = await Confirmation.destroy({
      where: { id: confirmationId },
    });
    res.json(confirmation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = {
  createConfirmation,
  getConfirmations,
  getConfirmationById,
  updateConfirmation,
  deleteConfirmation,
};
