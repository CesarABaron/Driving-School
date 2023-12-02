require("dotenv").config();
const { Sequelize } = require("sequelize");
const CourseModel =require("./Models/courses")
const commonQuestionsModel =require("./Models/commonQuestions")

const { DB_USER, DB_PASSWORD, DB_HOST, SERVER_URL } = process.env;

/* const sequelize = new Sequelize(SERVER_URL, {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true, // Requiere una conexión SSL/TLS
        rejectUnauthorized: false,
      },
    },
  }); */

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/poblado`,
  { logging: false, native: false }
);

CourseModel(sequelize)
commonQuestionsModel(sequelize)

const {
course,
question
} = sequelize.models;

module.exports = {
  ...sequelize.models,
  course,
  question,
  conn: sequelize,
};
