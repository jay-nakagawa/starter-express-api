const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://jaynakagawa777:mongod123@cluster0.t6yfhjw.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    }



// mongoose.connect("mongodb+srv://jaynakagawa777:mongod123@cluster0.t6yfhjw.mongodb.net/?retryWrites=true&w=majority" , ()=> {

// console.log("Connected to DB")
// })


// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// let db = 'test'

// app.get('/',(request, response)=>{
//     db.collection('rappers').find().sort({likes: -1}).toArray()
//     .then(data => {
//         response.render('index.ejs', { info: data })
//     })
//     .catch(error => console.error(error))
// })


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('hi!')
})
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
