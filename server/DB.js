const mongoose = require('mongoose');

require('dotenv').config();
const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB connection success");
    } catch (error) {
        console.error("❌ DB connection failed:", error.message);
    }
};

conn();