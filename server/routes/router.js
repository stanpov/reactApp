const express = require('express');
const { NativeError } = require('mongoose');
const router = express.Router();
const userSignUpModel = require('../models/signUpModel');
const key = '603e3a1a02babf12489e672e'

router.post('/signup',(req,res)=>{
    const newUser = new userSignUpModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    newUser.save().then(data=>res.json(data)).catch(err=>res.json(err))
    
    
})

router.get('/allusers',(req,res)=>{
    userSignUpModel.find((err,doc)=>{
        if(!err) {
            res.send(doc)
        }else {
            console.log(err)
        } 
        
    })
})

router.get(`/allusers/:id`,(req,res)=>{
    const id = req.params.id
    userSignUpModel.findById(id).then(data=>res.send(data))
})

router.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    userSignUpModel.deleteOne({_id:id}).then(res.send(`successfully deleted`))
})

module.exports = router