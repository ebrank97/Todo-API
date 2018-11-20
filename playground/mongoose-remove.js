const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// // remove()
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove({condition}) - Remove and returns the first matching object from database

// findByIdAndRemove('id') - Remove the given ID object and returns it.

Todo.findByIdAndRemove('5bf43cefa6d71af1a1c75633').then((todo) => {
  console.log(todo);
});