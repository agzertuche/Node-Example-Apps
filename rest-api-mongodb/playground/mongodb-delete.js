const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // delete many
  // db.collection('Todos')
  // .deleteMany({
  //   text: 'Something to do delete many'
  // })
  // .then(result => {
  //   console.log(result);
  // });

  // // delete one
  // db.collection('Todos')
  // .deleteOne({
  //   text: 'Something to do delete one'
  // })
  // .then(result => {
  //   console.log(result);
  // });

  // find one and delete
  db.collection('Todos')
  .findOneAndDelete({
    completed: true
  })
  .then(result => {
    console.log(result);
  });


  // client.close();
});