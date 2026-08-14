import mongoose from 'mongoose';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        
        // 1. Check if the URI is even loading
        if (!uri) {
            console.error("❌ Error: MONGO_URI is undefined! Check your .env file layout.");
            process.exit(1);
        }

        // 2. Print a safe version of the URI to verify its format
        const maskedUri = uri.replace(/:([^@]+)@/, ':******@');
        console.log("Connecting to:", maskedUri);

        await mongoose.connect(uri);

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:");
        console.error(error); // This will print the entire error stack trace
        process.exit(1);
    }
};

export default connectDB;