const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Todos')
  .findOneAndUpdate({
    _id: new ObjectID('5a63f01d67dd9342d454ab06')
  }, {
    $set: {
      completed: true
    }
  }, 
  {
    returnOriginal: false
  })
  .then(result => {
    console.log(result);
  });

  db.collection('Users')
  .findOneAndUpdate({
    _id: new ObjectID('5a616e7102543b3ea4382e98')
  }, {
    $set: {
      completed: true
    },
    $inc: {
      age: 1
    }
  }, 
  {
    returnOriginal: false
  })
  .then(result => {
    console.log(result);
  });


  // client.close();
});