import mongoose from "mongoose";
const connection = {};
const dbConnect = async()=>{
    if(connection.isConnected){
        console.log('Already connected to Database'); 
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to Database');
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log('Error connecting to Database', error);
        process.exit(1);
    }
}
export default dbConnect;