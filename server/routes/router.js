const express = require('express');
const { NativeError } = require('mongoose');
const router = express.Router();
const userSignUpModel = require('../models/signUpModel');
const key = '603e3a1a02babf12489e672e'

router.post('/users',(req,res)=>{
    const newUser = new userSignUpModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    newUser.save().then(data=>res.json(data)).catch(err=>res.json(err))
    
    
})

router.get('/users',async (req,res)=>{
    const users = await userSignUpModel.find({})
       try {
          if(users) {
              res.send(users)
          } else {
              res.send(`Not users yet`)
          }
       } catch (error) {
           console.log(error)
       }
})

router.get(`/users/:id`, async (req,res)=>{
    const id = req.params.id
    const user = await userSignUpModel.findById(id)

    try {
        if(!user) {
            res.status(404).send(`Not such a user`)
        } else {
            res.send(user)
        }
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/deleteUser/:id', async(req,res)=>{
    const id = req.params.id
    const deleteUser = await userSignUpModel.deleteOne({_id:id})
    res.redirect('/')
   
})

module.exports = router