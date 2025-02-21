import mongoose from 'mongoose';

const dbConnect = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
        
    }

}

export default dbConnect;

