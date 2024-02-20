const mongoose= require('mongoose')

const connect= mongoose.connect("mongodb+srv://logachan08:2w36p9bbH2QHqV6F@login.naogcdl.mongodb.net/?retryWrites=true&w=majority")


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