const express=require('express');
const colors=require('colors');
const mongoose=require('mongoose');

const app =express();
const PORT= 5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))


const mongoURL='mongodb+srv://Kailash:1234@cluster0.xhy2lu4.mongodb.net/usercurd'
mongoose.connect(mongoURL)
.then(()=>{
    console.log('>>>>>connected to mongodb')

})
.catch((err)=>{
    console.log('>>>>>>error  connecting to mongodb')
})

const userRoutes=require('./routes/user')
app.use('/user',userRoutes)

const studentRoutes=require('./routes/student')
app.use('/student',studentRoutes)



app.listen(PORT,()=>{
    console.log(`APP RUNNING ON PORT${PORT}`);
})
    

