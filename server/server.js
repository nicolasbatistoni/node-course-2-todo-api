var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save', e);
// });

// User
// email - require it - trim it - set type string - set min length of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

var myUser = new User({
  email: 'nicolasbatistoni@gmail.com'
});

myUser.save().then((user) => {
  console.log('User saved', user);
}, (e) => {
  console.log('Unable to save', e);
});
