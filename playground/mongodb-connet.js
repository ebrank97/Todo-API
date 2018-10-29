// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

//ES6 Object restructuring
// let user = {
//   name: 'Ebran',
//   age: 21
// };
// let {
//   name
// } = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ebran',
  //   age: 21,
  //   location: 'Kolkata'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});