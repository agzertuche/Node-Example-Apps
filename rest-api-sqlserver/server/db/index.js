const sql = require("mssql");
const config = require("../config");

const executeSql = async function(sqlQuery) {
  const pool = new sql.ConnectionPool(config);
  pool.on('error', err => {
    console.log('sql pool error db.js', err);
  });


  try {
    await pool.connect();
    return await pool.request().query(sqlQuery);
  } catch (err) {
    return JSON.stringify(err, ["message", "arguments", "type", "name"]);
  } finally {
    pool.close();
  }
}

module.exports = {
  executeSql
}