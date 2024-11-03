const express = require('express')
const mongoclient = require('mongodb').MongoClient
const cors = require('cors')
const url = 'mongodb://127.0.0.1:27017'


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/videos', (req, res) => {
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db('libraryProject')
        db.collection("videos").find({}).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})

app.post('/addVideo', (req, res) => {
    let video = {
        videoId: req.body.videoId,
        title: req.body.title,
        videoName: req.body.videoName,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        views: req.body.views,
        url: req.body.url,
        videoCategory: req.body.videoCategory
    }
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
        db.collection("videos").insertOne(video).then(() => {
            res.send("Video Added")
            res.redirect("/videos")
            res.end()
        })
    })
})


app.put("/editVideo/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let editedVideo = {
        videoId: parseInt(req.body.videoId),
        title: req.body.title,
        videoName: req.body.videoName,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        views: req.body.views,
        url: req.body.url,
        videoCategory: req.body.videoCategory
    }

    mongoclient.connect(url).then(clientObj => {
        let bd = clientObj.db("libraryProject")
        bd.collection("videos").updateOne({ videoId: id }, { $set: editedVideo }).then(document => {
            res.send("Video Updated")
            res.redirect("/videos")
            res.end()

        })
    })
})


app.delete('/delete/:id', (req, res) => {
    let id = parseInt(req.params.id)
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db('libraryProject')
        db.collection('videos').deleteOne({ videoId: id }).then(() => {
            res.redirect("/videos")
            res.end()
        })
    })
})
app.listen(9812)
console.log("Server Started at localhost://9812")