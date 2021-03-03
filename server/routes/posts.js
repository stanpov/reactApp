const express = require('express');
const router = express.Router();
let postModel = require('../models/posts')

router.route('/').get((req,res)=>{
    postModel.find({}).then(data=>res.send(data))
    .catch(err=>res.status(400).json(err))
})

router.route('/add').post((req,res)=>{
    const {title,messagge} = req.body;
    postModel.create({title,messagge})
    .then(response=>res.json('added'))
    .catch(err=>console.log(err))
})

module.exports = router