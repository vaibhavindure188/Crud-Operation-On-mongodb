const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/usersData")  //this is for locally when you use compass

app.get('/', (req, res) =>{
    UserModel.find({})
    .then((data)=> res.json(data))
    .catch((err) => console.log(err))
})
app.post('/createUser', (req, res) =>{
    UserModel.create(req.body)
    .then((user) =>res.json(user))
    .catch((err) => res.json(err))
})

app.get('/getUser/:id', (req,res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

app.put('/updateUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, age:req.body.age})
    .then((result) => res.json(result))
    .catch((err) => res.json(err)) 
})
app.delete('/deleting/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id :id})
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
app.listen(3001, ()=>{
    console.log('server is running');
})
