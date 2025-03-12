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
            res.json(task);  
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
            res.status(404).send('task is not found');
        }
    }
    catch(err){
        res.status(500).send(err);
    }
};

exports.updateTask =async (req,res) =>{
    const {id} = req.params;
    const updatedtask = req.body;
    try {
        const task = await todos.findByIdAndUpdate(id , updatedtask ,{new:true});
        if (task){
            await task.save();
            res.json(task);
        }
        else{
            res.status(404).json({message : 'task is not found'})
        }
    }
    catch (err){
         res.status(500).json({error: err.message}); 
    }
}

// exports.updateUser = async (req, res) => {
//     const { id } = req.params;
//     const newuserdata = req.body;

//     try {
//         const user = await users.findOneAndReplace({_id:id} , newuserdata , {new:true});
//         if (user) {
//             await user.save(); 
//             res.json(user); 
//         } else {
//             res.status(404).json({message: 'User not.found'});  
//         }
        
//         res.status(200).json({message: 'data updated'})
//     } catch (err) {``
//         console.log(err)
//         res.status(500).json({error: err.message});  
//     }
// };

// exports.editUser = async (req, res) => {
//     const { id } = req.params;
//     const updatedData = req.body;

//     try {
//         const user = await users.findById(id);  
//         if (user) {
//             user.set(updatedData);  
//             await user.save(); 
//             res.json(user); 
//         } else {
//             res.status(404).send('User not found');  
//         }
//     } catch (err) {
//         res.status(500).send(err);  
//     }
// };
