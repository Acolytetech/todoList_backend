const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema ({
    task: { type: String},
    status :{type: Boolean, default:false}
  
  
});
const todos = mongoose.model('todo', todoSchema);

module.exports = todos;
