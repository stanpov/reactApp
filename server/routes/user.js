const express = require('express');
const router = express.Router();
let userModel = require('../models/signUpModel')


router.route('/').get((req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json(err))
})

router.route('/add').post((req,res)=>{
    const {username,email,password} = req.body;
    userModel.create({username,email,password})
    .then(response=>res.json('User added'))
    .catch(err=>console.log(err))

    
})



module.exports = router