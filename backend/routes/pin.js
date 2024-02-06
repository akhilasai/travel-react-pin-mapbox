const router = require("express").Router();
const Pin = require("../models/Pin");

//Create a Pin

router.get('/get',(req,res)=>{
    res.send("GET Request Called");
})
router.post('/add', async (req,res)=>{
    // const sampleData = { username:"akhila", title: 'Sample Pin', desc: 'A sample pin',rating:5, lat: 123, long: 456 };
    console.log(req)
    const newPin = new Pin(req.body);
    console.log(newPin);
    try{
        const savedPin = await newPin.save();
        res.status(201).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    }
})

//get the Pins

router.get("/", async (req,res)=>{
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;