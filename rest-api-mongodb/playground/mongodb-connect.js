const { MongoClient, ObjectID } = require('mongodb');

console.log(new ObjectID());

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) console.log('Unable to insert todo', err);

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Arturo',
  //   age: 32,
  //   location: 'Monterrey',
  // }, (err, result) => {
  //   if (err) console.log('Unable to insert todo', err);

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});