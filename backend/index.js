const express=require("express")
const cors=require("cors");
const connection = require("./db");
const userRouter = require("./routes/user.route");

require("dotenv").config();

const app=express();
app.use(cors());

app.use(express.json());
app.use(userRouter)

app.listen(process.env.port,async()=>{
   try {
       await connection
       console.log("DB is Connected");
       console.log(`Server is running at ${process.env.port}`)
   } catch (error) {
    console.log(error)
   }
})