import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
// app config
const app=express()
const port= 3000
connectDB()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors()) //allow frontend to connect to backend

//api endpoint
app.use('/api/admin',adminRouter) 
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
//localhost:3000/api/admin/add-doctor
app.get('/',(req,res)=>{
    res.send('API WORKING great')
})


app.listen(port,()=>console.log('Server started',port))
