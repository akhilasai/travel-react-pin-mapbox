const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PinRoutes = require("./routes/pin");
const UserRoutes = require("./routes/user");

dotenv.config();

// app.get('/', (req, res) => {
//     console.log("index.js")
//     res.send("GET Request Called");
// })

app.use(express.json());

mongoose.connect("mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/social?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDB Connected!")
}).catch(err=>console.log(err));

app.use('/',PinRoutes);
app.use('/user',UserRoutes)

app.listen(8800,()=>{
    console.log("Backend Server is running 8800!");
})