const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const dbMySQLConfig = require("./config/db");

const userRoutes = require("./src/routes/userRoutes");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
dbMySQLConfig();

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
