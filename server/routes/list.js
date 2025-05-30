const express = require('express');
const router = express.Router();
const User = require('../models/user')
const List = require('../models/list')

router.post('/addTask', async(req,res) =>{

    try {
           const {title,body,email} =req.body;
    const existingUser= await User.findOne({email});
    if(existingUser){
const list = new List({title,email,body, User:existingUser})
    await list.save();
    existingUser.list.push(list);
    await  existingUser.save()
    return res.status(201).json({ message: "Task added successfully", task: list });
    }
    

    } catch (error) {
        console.log(error);
        
    }
 
})

router.put('/updateTask/:id', async(req,res) =>{

    try {
           const { title,body,email} =req.body;
    const existingUser= await User.findOne({email});
   if(existingUser){
   const updatedList = await List.findByIdAndUpdate(
  req.params.id,
  { title, body },
  { new: true }
);

return res.status(200).json({ message: "Task updated successfully", task: updatedList });

   }

    } catch (error) {
        console.log(error);
        
    }
 
})

router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const { email } = req.body;
        const taskId = req.params.id;

        if (!email || !taskId) {
            return res.status(400).json({ message: "Invalid request: Missing email or task ID" });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const deletedTask = await List.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "✅ Task Deleted Successfully" });

    } catch (error) {
        console.error("❌ Error deleting task:", error.message);
        res.status(500).json({ message: "Server error, please try again later" });
    }
});
module.exports= router;