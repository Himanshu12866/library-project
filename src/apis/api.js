const express = require('express');
const cors = require('cors');
const mongoclient = require('mongodb').MongoClient;
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
const url = "mongodb://localhost:27017";
const dbName = "libraryProject";


app.get("/", (req, res) => {
    res.send("Error")
    res.end()
});
app.get("/videos", (req, res) => {
    mongoclient.connect(url).then(clientObj => {
        const db = clientObj.db(dbName)
        db.collection("videos").find({}).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})


app.get("/admins", (req, res) => {
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("admin")
        db.collection("admins").find({}).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})



app.post("/addVdo", (req, res) => {
    let video = {
        videoId: parseInt(req.body.videoId),
        videoName: req.body.videoName,
        url: req.body.url,
        title: req.body.title,
        dislikes: req.body.dislikes,
        likes: req.body.likes,
        videoCategory: req.body.videoCategory,
        views: req.body.views

    }
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db(dbName)
        db.collection("videos").insertOne(video).then(document => {
            res.send(document)
            res.redirect("/adminDash")
            res.end()
        })
    })
})
app.get("/editVdo/:videoId", (req, res) => {
    let videoid = parseInt(req.params.videoId)
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db(dbName)
        db.collection("videos").find({ videoId: videoid }).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})

app.put("/editVdo/:videoId", (req, res) => {
    let videoid = parseInt(req.params.videoId);
    let video = {

        videoName: req.body.videoName,
        url: req.body.url,
        title: req.body.title,
        dislikes: req.body.dislikes,
        likes: req.body.likes,
        videoCategory: req.body.videoCategory,
        views: req.body.views

    }
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db(dbName)
        db.collection("videos").updateOne({ videoId: videoid }, { $set: video }).then(document => {

            res.end()
        })
    })
})
app.get("/deleteVdo/:videoId", (req, res) => {

    let videoid = parseInt(req.params.videoId);
   
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db(dbName)
        db.collection("videos").find({ videoId: videoid }).toArray().then(document => {
            res.end()
        })
    })
})

app.post("/newuser", (req, res) => {
    let user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        userpsw: req.body.userpsw
       
    }
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db(dbName)
        db.collection("user").insertOne(user).then(document => {
            res.send("Registered");
            res.end()
        })
    })
})
app.get("/userdetails" , (req,res) => {
    mongoclient.connect(url).then(clientObj => {
        let db= clientObj.db(dbName)
        db.collection("user").find({}).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})

app.listen(1234)
console.log("Server Started at http://127.0.0.1:1234")
