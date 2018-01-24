const sql = require("mssql");
const config = require("../config");

sql.connect(config).then(pool => {
    // Query
    console.log(pool);
    return pool.request()
    .query('select * from HumanResources.Department')
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
    console.log("error:", err);
})

sql.on("error", err => {
  // ... error handler
  console.log("error handler:", err);
});

module.exports = {
  sql
};
