const express= require('express');
const connectDb=require('./src/config/db')
require('dotenv').config();
const app = express();
const PORT= process.env.PORT

connectDb().then(()=>{
   app.listen(PORT,()=>{
       console.log(`Server is running on port ${PORT}`);
   })
})