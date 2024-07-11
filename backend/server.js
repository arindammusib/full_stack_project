const express=require('express');
const app=express();
const PORT=5000;
app.use(express.json());
require('./db/config');
const user=require('./db/User');
app.post("/register",async (req,res)=>{
    const User=new user(req.body);
    const result=await User.save();
    res.send(result);
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})