const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.json());

app.get('/departments', (req, res) => {
  const query = `select * from HumanResources.Department`;
  db.executeSql(query)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.get('/departments/:id', (req, res) => {
  const id = req.params.id;
  if(!id) return res.status(400).send();

  const query = `select * from HumanResources.Department where DepartmentID = ${id}`;
  db.executeSql(query)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.post('/departments', (req, res) => {
  const newDepartment = req.body;
  if(!newDepartment) return res.status(400).send();

  const query = `insert into HumanResources.Department(Name, GroupName) values('${newDepartment.name}', '${newDepartment.groupName}')`;
  db.executeSql(query)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.delete('/departments/:id', (req, res) => {
  const id = req.params.id;
  if(!id) return res.status(400).send();

  const query = `delete from HumanResources.Department where DepartmentID = ${id}`;
  db.executeSql(query)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.patch('/departments/:id', (req, res) => {
  const id = req.params.id;
  if(!id) return res.status(400).send();
  const updatedDepartment = req.body;
  if(!updatedDepartment) return res.status(400).send();
  const query = `update HumanResources.Department set Name = '${updatedDepartment.name}' where DepartmentID = ${id}`;
  db.executeSql(query)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.get('/', (req, res) => {
  res.send('REST API working... 🎉 🔥');
});

app.listen(3000, () => {
  console.log('Server up and running... 🎉 🔥');
});

module.exports = {
  app
};