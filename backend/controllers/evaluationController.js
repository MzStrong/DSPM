const { Evaluation, Topic } = require("../modules/models");

// Create
async function createEvaluation(req, res) {
  const evaluationData = req.body;
  try {
    const evaluation = await Evaluation.create(evaluationData);
    res.json(evaluation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "insert error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read
async function getEvaluations(req, res) {
  try {
    const evaluations = await Evaluation.findAll({
      include: {
        model: Topic,
      },
    });
    res.json(evaluations);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Read by ID
async function getEvaluationById(req, res) {
  const evaluationId = req.params.id;
  try {
    const evaluation = await Evaluation.findOne({
      where: { id: evaluationId },
      include: {
        model: Topic,
      },
    });
    res.json(evaluation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "read error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Update
async function updateEvaluation(req, res) {
  const evaluationData = req.body;
  const evaluationId = req.params.id;
  try {
    const evaluation = await Evaluation.update(evaluationData, {
      where: { id: evaluationId },
    });
    res.json(evaluation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "update error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

// Delete
async function deleteEvaluation(req, res) {
  const evaluationId = req.params.id;
  try {
    const evaluation = await Evaluation.destroy({
      where: { id: evaluationId },
    });
    res.json(evaluation);
  } catch (error) {
    console.log(error);
    res.json({
      message: "delete error",
      errors: error.errors.map((e) => e.message),
    });
  }
}

module.exports = { createEvaluation, getEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation };
