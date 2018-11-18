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

let userID = '5be9981c63421c2e04e77adb';

User.findById({
  _id: userID
}).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User:', user.email);
}, (e) => {
  console.log(e);
});

// let id = '5bec704410c43043581577971';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// // Returns a array of matching condition value
// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (!todos.length) {
//     return console.log('ID not found in find()');
//   }
//   console.log('Todos:', todos);
// });
//
// // Returns the first object that matches the condition
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found findOne()');
//   }
//   console.log('Todo:', todo);
// });

// // Only apply when finding by id
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found in findById()');
//   }
//   console.log('Todo:', todo);
// }).catch((e) => console.log(e));