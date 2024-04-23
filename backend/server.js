const express = require("express");
const { sequelize } = require("./modules/models");
const {
  createGenders,
  createRelationship,
  createTopic,
} = require("./modules/initData");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controllers/userController");
const {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("./controllers/adminController");
const {
  createParent,
  getParents,
  getParentById,
  updateParent,
  deleteParent,
} = require("./controllers/parentController");
const {
  createPolicy,
  getPolicys,
  getPolicyById,
  updatePolicy,
  deletePolicy,
} = require("./controllers/policyController");
const {
  createConfirmation,
  getConfirmations,
  getConfirmationById,
  updateConfirmation,
  deleteConfirmation,
} = require("./controllers/confirmationController");
const {
  createEvaluation,
  getEvaluations,
  getEvaluationById,
  updateEvaluation,
  deleteEvaluation,
} = require("./controllers/evaluationController");
const {
  createAssetment,
  getAssetments,
  getAssetmentById,
  updateAssetment,
  deleteAssetment,
} = require("./controllers/assetmentController");

const app = express();
const port = 3000;
app.use(express.json());

// API
app.post("/api/createuser", createUser);
app.get("/api/getusers", getUsers);
app.get("/api/getuser/:id", getUserById);
app.put("/api/updateuser/:id", updateUser);
app.delete("/api/deleteuser/:id", deleteUser);

app.post("/api/createadmin", createAdmin);
app.get("/api/getadmins", getAdmins);
app.get("/api/getadmin/:id", getAdminById);
app.put("/api/updateadmin/:id", updateAdmin);
app.delete("/api/deleteadmin/:id", deleteAdmin);

app.post("/api/createparent", createParent);
app.get("/api/getparents", getParents);
app.get("/api/getparent/:id", getParentById);
app.put("/api/updateparent/:id", updateParent);
app.delete("/api/deleteparent/:id", deleteParent);

app.post("/api/createpolicy", createPolicy);
app.get("/api/getpolicys", getPolicys);
app.get("/api/getpolicy/:id", getPolicyById);
app.put("/api/updatepolicy/:id", updatePolicy);
app.delete("/api/deletepolicy/:id", deletePolicy);

app.post("/api/createconfirmation", createConfirmation);
app.get("/api/getconfirmations", getConfirmations);
app.get("/api/getconfirmation/:id", getConfirmationById);
app.put("/api/updateconfirmation/:id", updateConfirmation);
app.delete("/api/deleteconfirmation/:id", deleteConfirmation);

app.post("/api/createevaluation", createEvaluation);
app.get("/api/getevaluations", getEvaluations);
app.get("/api/getevaluation/:id", getEvaluationById);
app.put("/api/updateevaluation/:id", updateEvaluation);
app.delete("/api/deleteevaluation/:id", deleteEvaluation);

app.post("/api/createassetment", createAssetment);
app.get("/api/getassetments", getAssetments);
app.get("/api/getassetment/:id", getAssetmentById);
app.put("/api/updateassetment/:id", updateAssetment);
app.delete("/api/deleteassetment/:id", deleteAssetment);

// สั่งให้ Express app รอการเชื่อมต่อ
app.listen(port, async () => {
  await sequelize.sync();
  createGenders();
  createRelationship();
  createTopic();
  console.log(`Server is running on port ${port}`);
});
