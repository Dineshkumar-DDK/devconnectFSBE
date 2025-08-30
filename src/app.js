const express = require('express');
const connectDb = require('./config/db')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

    app.get("/login", (req, res, next) => {
        try {
            res.send("Login Successfull")
        }
        catch (err) {
            res.status(500).send("Server Error")
        }

    })
})