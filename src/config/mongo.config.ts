import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

export async function connectDB(){
    try{
        console.log("DB connection started",process.env.mongodb_url)
    const url = process.env.mongodb_url || ''
    if(!url){
        throw new Error( "DB connection failed, URI missing");
    }
    const connection = await mongoose.connect(url)
    console.log(`✅ MongoDB connected successfully to: ${connection.connection.host}`)
}catch(error){
    console.log(error)
    process.exit(1)
}
}
