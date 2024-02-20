const express=require('express')
const path=require('path')
const bcrypt=require('bcrypt')
const Collection=require('./config')
const app=express()
const PORT=3001

//use EJS as the View engine

app.set('view engine','ejs')

// Static path 

app.use(express.static("public"))

// covert form data into JSON format

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/test',(req,res)=>{
    res.send("test Works Well")
})




app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.get('/home',(req,res)=>{
    res.render('home')
})

//register User

app.post("/signup",async(req,res)=>{
    const data ={
        name:req.body.username,
        password:req.body.password
    }

    // check user already exists
    const alreadyUser=await Collection.findOne({name:data.name})
    if(alreadyUser){
        res.send("user is already registered")
    }else{
    const without_hashed= data.password
    console.log("This is Without hashed Password : " , without_hashed);
    const hashPassword=await bcrypt.hash(data.password,10)
    data.password=hashPassword // replace the password with hased password
    const userdata=await Collection.insertMany(data)
    console.log(userdata);
    res.redirect('login')
    }
})


//Login User

app.post('/login',async(req,res)=>{
    try{
        const check = await Collection.findOne({name:req.body.username})
        console.log(check);
        if(!check){
            res.send(`<script>alert("User is Not found ")</script>`)
        }
        const isPasswordMatch=await bcrypt.compare(req.body.password,check.password)
        if(!isPasswordMatch){
            res.json({
                message:`Password is Not Matched`
            })
        }else{
            res.render("home")
        }
    }catch{
        res.send("Wrong Details")
    }
})


app.listen(PORT,()=>{
    console.log(`Server is Running On Port ${PORT}`);
})