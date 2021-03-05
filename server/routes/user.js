const express = require('express');
const router = express.Router();
let userModel = require('../models/signUpModel')

router.post('/register',async (req,res)=>{
    try {
        let errors = []
        const {email,password,username} = req.body;
        if(email.length == 0 || email.length < 6) {
            errors.push('Email must be more than 5 simbols');
        }
        if(username.length === 0 || username.length < 6) {
            errors.push('Username must be more than 5 simbols');
        }
        if(password.length === 0 || password.length < 6) {
            errors.push('Password must be more than 5 simbols');

        }
        if(errors.length > 0) {
          return res.status(401).json({error: errors.join(',')});
        }

       await userModel.create({username,email,password});
       res.send(`user created successfully`)
    } catch (error) {
        console.log(error)
    }
})



router.get('/users',async(req,res)=>{
    try {
        const {username,email}=req.body;
     let data =   await userModel.find({});
        res.send(data)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router