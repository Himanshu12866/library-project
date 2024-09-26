const express = require('express');
const cors = require('cors');
const mongoclient = require('mongodb').MongoClient;
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
const url = "mongodb://127.0.0.1:127017";


app.get("/" , (req,res) => {
    res.send("Weolcome To The Project Please Login to Countinue")
    res.end()
})
app.listen(1234)
console.log("Server Started at http://127.0.0.1:1234")
