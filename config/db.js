const mysql = require("mysql");

const dbMySQLConfig = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gymdb",
  });

  connection.connect((err) => {
    if (err) {
      console.error("MySQL Connection Error: ", err.stack);
      return;
    }

    console.log("MySQL Database is Connected");
  });

  connection.on("error", (err) => {
    console.error("MySQL Connection Error: ", err.code);
  });

  return connection;
};

module.exports = dbMySQLConfig;
