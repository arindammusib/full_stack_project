const express=require('express');
const app=express();
const PORT=6000;

app.get('/',(req,res)=>{
    res.send("Home page");
})
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})