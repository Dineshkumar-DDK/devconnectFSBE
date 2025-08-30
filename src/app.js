const express = require('express');
const connectDb = require('./config/db');
const User = require('./models/user');
const { validateSignUpData } = require('./utils/validation');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT



connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

app.use(express.json())

app.get("/login", (req, res, next) => {
    try {
        res.send("Login Successfull")
    }
    catch (err) {
        res.status(500).send("Server Error")
    }

})

app.post("/signup", async (req, res) => {
    try {
        
        validateSignUpData(req.body)
        const user = new User(req.body)
        await user.save();
        res.status(200).send("User added successfully");
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

// handle global err
app.use((req,res) => {
    res.status(500).send("Something broke!");
});

