const { Policy, Admin } = require("../modules/models");

// Create
async function createPolicy(req, res) {
  const policyData = req.body;
  try {
    const policy = await Policy.create(policyData);
    res.json(policy);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getPolicys(req, res) {
  try {
    const policys = await Policy.findAll({
      include: {
        model: Admin,
      },
    });
    res.json(policys);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getPolicyById(req, res) {
  const policyId = req.params.id;
  try {
    const policy = await Policy.findOne({
      where: { id: policyId },
      include: {
        model: Admin,
      },
    });
    res.json(policy);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updatePolicy(req, res) {
  const policyData = req.body;
  const policyId = req.params.id;
  try {
    const policy = await Policy.update(policyData, {
      where: { id: policyId },
    });
    res.json(policy);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deletePolicy(req, res) {
  const policyId = req.params.id;
  try {
    const policy = await Policy.destroy({
      where: { id: policyId },
    });
    res.json(policy);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = {
  createPolicy,
  getPolicys,
  getPolicyById,
  updatePolicy,
  deletePolicy,
};
