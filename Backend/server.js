const express = require('express')
const app=express()
const port=5000;


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,(err)=>{
    console.log(`Server is running at port ${port}`);
})