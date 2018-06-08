// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // delete users 'Nicolás'
  db.collection('Users').deleteMany({name: 'Nicolás'});

  // delete user with an specific id
  db.collection('Users').findOneAndDelete({
    _id: ObjectID('5b1a77feabaa5e71db3b0f68')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
