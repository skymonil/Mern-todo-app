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

router.delete('/deleteTask/:id',async(req,res)=>{
    try {
    const {email }= await User.findOne({email});
    if(existingUser){
await List.findByIdAndDelete(req.params.id).then(()=>
res.status(200).json({message: "Task Deleted"}))
    }    
    
    } catch (error) {
        console.log(error);
        
    }
    
})
module.exports= router;