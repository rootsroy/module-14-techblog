const Sequelize = require("sequelize");

require("dotenv").config();

// let sequelize;

// connect to database
// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

const sequelize = new Sequelize("sql3445703", "sql3445703", "aStdLGMR9W", {
  host: "sql3.freesqldatabase.com",
  dialect: "mysql",
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = sequelize;
