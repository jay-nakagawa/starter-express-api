const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

// mongoose.connect("")


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('hi!')
})
app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})
