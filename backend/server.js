import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import {connectDb}  from './config/db.js';
import authRoutes from './routes/auth.route.js'
dotenv.config();
connectDb();
const app = express();
app.use(cors());
const port =process.env.PORT || 3000;
app.use(express.json());

app.use('/api/users', authRoutes)

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
