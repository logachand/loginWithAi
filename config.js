const mongoose= require('mongoose')

const connect= mongoose.connect("mongodb://127.0.0.1:27017/LoginWithAI")

//check Mongo connection

connect.then(()=>{
    console.log("DB is Conencted");
})
.catch((err)=>{
    console.log(`DB is Not conencted ${err}`);
})

// create Schema

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Collection=new mongoose.model("usersAI",LoginSchema)

module.exports=Collection