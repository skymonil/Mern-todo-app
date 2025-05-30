const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password correctly using await
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);

        // Create new user with hashed password
        const user = new User({ email, username, password: hashedPass });
        await user.save();

        return res.status(201).json({ message: "User registered successfully", user });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist, please sign up first" });
        }

        // Compare provided password with stored hashed password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", user: existingUser });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;