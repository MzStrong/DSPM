const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("dspm", "root", "1234", {
  host: "localhost",
  dialect: "mariadb",
});

// Relationship
const Relationship = sequelize.define(
  "relationships",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Gender
const Gender = sequelize.define(
  "genders",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Parent
const User = sequelize.define(
  "users",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    edc: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    congenital_disease: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Parent
const Parent = sequelize.define(
  "parents",
  {
    line_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

// Admin
const Admin = sequelize.define(
  "admins",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,30],
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Policy
const Policy = sequelize.define(
  "policies",
  {
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {}
);

// Confirmation
const Confirmation = sequelize.define("confirmations", {}, {});

// Topic
const Topic = sequelize.define(
  "topics",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Evaluation
const Evaluation = sequelize.define(
  "evaluations",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evaluation_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    practice_skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

// Assetment
const Assetment = sequelize.define(
  "assetment",
  {
    ans: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {}
);

Relationship.hasMany(Parent);
Parent.belongsTo(Relationship);

Gender.hasMany(Parent);
Parent.belongsTo(Gender);

User.hasMany(Parent);
Parent.belongsTo(User);

Gender.hasMany(User);
User.belongsTo(Gender);

Admin.hasMany(Policy);
Policy.belongsTo(Admin);

Policy.hasMany(Confirmation);
Confirmation.belongsTo(Policy);

User.hasMany(Confirmation);
Confirmation.belongsTo(User);

Topic.hasMany(Evaluation);
Evaluation.belongsTo(Topic);

Evaluation.hasMany(Assetment);
Assetment.belongsTo(Evaluation);

User.hasMany(Assetment);
Assetment.belongsTo(User);

module.exports = {
  sequelize,
  Relationship,
  Gender,
  User,
  Parent,
  Admin,
  Policy,
  Confirmation,
  Topic,
  Evaluation,
  Assetment,
};
