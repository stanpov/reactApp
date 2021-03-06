const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');
const postsRouter =require('./routes/posts')
const cors = require('cors')


dotenv.config()
mongoose.connect(process.env.DATABASE_CONNECTION,{ useUnifiedTopology: true,useNewUrlParser: true },()=>console.log('Database connected'))


app.use(express.json({extended:false}))
app.use(cors())
app.use('/users',userRouter)
app.use('/posts',postsRouter)


app.listen(4000,console.log(`Server is listening on port 4000`))