const express = require("express");
const router = express.Router();
const todocontroller = require("../controller/todo");

router.get('/', todocontroller.get), // Get all users
router.get('/:id', todocontroller.gettask), // Get all users
router.post('/', todocontroller.createTask);  // Get all users
router.delete('/:id', todocontroller.deleteTask);  // Get all users
router.patch('/:id', todocontroller.updateTask); //update task

module.exports = router;