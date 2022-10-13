const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')



dotenv.config()
const app = express()

mongoose.connect('mongodb://localhost:27017/listing-user-api-test').then((data,err)=>{
    if(err){
        console.log('database not connected',err);
    }else{
        console.log('database connected');
    }

})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

const userRouter = require('./routes/userroutes')

app.get('/',(req,res)=>{
    console.log('server is running');
})

app.use('/api/user',userRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server runnig on port ${process.env.PORT}`);

})