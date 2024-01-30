import mysql2 from "mysql2";

const pool = mysql2.createPool({
  user: "root",
  host: "localhost",
  database: "hackathon-chieu-m4",
  password: "",
  port: 3306,
});
const database = pool.promise();
export default database;
