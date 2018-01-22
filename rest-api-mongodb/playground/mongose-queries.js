const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '5a6416bfb28cd823c4d5a349';

Todo.find({
  _id: id
})
.then(todos => {
  console.log(todos);
});

Todo.findById(id)
.then(todo => {
  console.log(todo);
});