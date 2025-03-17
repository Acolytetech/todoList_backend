const todos = require('../model/todo');  

exports.get = async (req, res) => {
    try {
        const todo = await todos.find(); 
        res.json(todo); 
    } catch (err) {
        console.log('Error fetching todo:', err);
        res.status(500).send(`Error fetching todo`);  
    }
};
exports.createTask = async (req , res) => {
    const newtask = req.body;
    try{
        const task = new todos(newtask);
        await task.save();
        res.status(201).json(task);
        console.log(task);
    }
    catch(err){
        res.status(500).send(err);
    }
};

exports.gettask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await todos.findById(id);  
        if (task) {
            res.status(200).json(task);  
        } else {
            res.status(404).send('task not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


exports.deleteTask = async (req,res) =>{
    const {id} = req.params;
    try{
        const task = await todos.findByIdAndDelete(id);
        if (task){
            res.status(204).json(task);
        }
        else{
            res.status(404).json({ message :"task is not found"} );
        }
    }
    catch(err){
        res.status(500).json({err :err});
    }
};

exports.updateTask =async (req,res) =>{
    const {id} = req.params;
    const {task,status} = req.body;
    // console.log(task)
    // console.log(status)
    try {
        if(task && status === undefined){
            await todos.findByIdAndUpdate({_id:id},{task:task});
        }else if(status !== undefined && task === undefined){
            await todos.findByIdAndUpdate({_id:id},{status:status});
        }

        res.status(200).json({message: 'Task updated'});
    }
    catch (err){
         res.status(500).json({error: err.message}); 
    }
}

