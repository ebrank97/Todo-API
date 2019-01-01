const {
  ObjectID
} = require('mongodb');
const jwt = require('jsonwebtoken');

const {
  Todo
} = require('./../../models/todo');
const {
  User
} = require('./../../models/user');

let userOneId = new ObjectID();
let userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'ebran@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({
      _id: userOneId,
      access: 'auth'
    }, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'kankana@examle.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({
      _id: userTwoId,
      access: 'auth'
    }, process.env.JWT_SECRET).toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: "First test todo",
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: "Second test todo",
  completed: true,
  completedAt: 145278,
  _creator: userTwoId
}];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos
}