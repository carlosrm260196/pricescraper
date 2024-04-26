import mongoose from 'mongoose';

let isConnected = false;

const MONGODB_URI = String(process.env.MONGODB_URI);
export const connectToDB = async () =>{
    mongoose.set('strictQuery',true);
    if(!MONGODB_URI) return console.log("MONGODB_URI is not defined");

    if(isConnected) return console.log(" => using existing database connection");

    try{
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }
}