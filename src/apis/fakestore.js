const express = require('express')
const mongoclient = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017"
const cors = require("cors")



const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/products', (req, res) => {
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
        db.collection("products").find({}).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })

})

app.post('/insert', (req, res) => {
    let product = {
        id: parseInt(req.body.id),
        price: req.body.price,
        description: req.body.description,
        title: req.body.title,
        category: req.body.category,
        image: req.body.image,
        rating: {
            rate: parseInt(req.body.rate),
            count: parseInt(req.body.count)
        }

    }
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
        db.collection("products").insertOne(product).then(() => {
            res.send("Product inserted")
            res.end()
        })
    })
})


app.get('/products/:category', (req, res) => {
    let category = req.params.category
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
        db.collection("products").find({ category: category }).toArray().then(document => {
            res.send(document)
            res.end()
        })
    })
})


app.put('/products/edit/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let product = {
        id: parseInt(req.body.id),
        price: req.body.price,
        description: req.body.description,
        title: req.body.title,
        category: req.body.category,
        image: req.body.image,
        rating: {
            rate: parseInt(req.body.rate),
            count: parseInt(req.body.count)
        }
    }

    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
        db.collection("products").updateOne({ id: id }, { $set: product }).then(() => {
            res.send("Product updated")
            res.end()
        })
    })
}

)

app.delete('/products/:id' , (req,res) =>{
    let id = parseInt(req.params.id)
    mongoclient.connect(url).then(clientObj => {
        let db = clientObj.db("libraryProject")
            db.collection("products").deleteOne({id:id}).then(() =>{
                res.send("Deleted Successfully")
                res.end()
            })
        
    })
})
app.listen(5555)
console.log("Server Sarted at localhost://5555")