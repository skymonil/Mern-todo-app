const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://m98513313:Mongo123@e-commerce.qrafroh.mongodb.net/?retryWrites=true&w=majority&appName=E-Commerce");
        console.log("✅ DB connection success");
    } catch (error) {
        console.error("❌ DB connection failed:", error.message);
    }
};

conn();