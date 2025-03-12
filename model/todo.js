const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema ({
    task: { type: String},
  
  
});
const todos = mongoose.model('todo', todoSchema);

module.exports = todos;