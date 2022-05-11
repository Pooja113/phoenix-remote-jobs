import app from './app.js'
import dotenv from 'dotenv'
import connectDB from "./config/database.js";

dotenv.config({path: "backend/config/config.env"});



//DB
connectDB()

app.listen(process.env.PORT,() =>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})