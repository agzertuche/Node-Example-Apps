const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');
const sql = require("mssql");

const app = express();

app.use(bodyParser.json());



app.get('/', (req, res) => {
  // db();
  // res.send('Working...');

  const config = {
    user: 'test',
    password: 'test',
    server: 'localhost\\SQLEXPRESS',
    database: 'AdventureWorks2017',
  }

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from HumanResources.Department', function (err, recordset) {

        if (err) console.log(err);

        // send records as a response
        res.send(recordset);

    });
  });
});

app.listen(3000, () => {
  console.log('Server up and running... 🎉🔥');
});

module.exports = {
  app
};