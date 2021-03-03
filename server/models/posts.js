const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({

    title: {
        type: String,
        
    },
    messagge: {
        type: String,
       
    }
})

module.exports = mongoose.model('posts',postsSchema)