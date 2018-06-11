const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({}).then((todo) => {

});

// var id = '5b1e772f125070419c0fe3dc';
// Todo.findByIdAndRemove(id).then((todo) => {
//   console.log(todo);
// });
