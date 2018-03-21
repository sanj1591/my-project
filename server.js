const express = require('express')
var app = express()

const port = 3000
let postBody = {
    username:"azat",
    email:"azat@gmail.com",
    url:"www.google.com"
} 

app.get('/profile',(req,res)=>{
    res.send(postBody)
})

app.post('/profile',(req,res)=>{
     postBody = req.body
    console.log(postBody)
    res.sendStatus(201)
})

app.put('/profile',(req,res)=>{
    Object.assign(postBody,req,body)
    res.sendStatus(204)
})

app.delete('/profile',(req,res)=>{
    let postBody = {}
    res.sendStatus(204)
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})