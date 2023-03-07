const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
require('./helpers/dbConnect')




const Port = process.env.PORT || 5000

app.use('/person' , require('./Routes/personRoute'))

app.listen(Port, (err) => {
   err ? console.log(err) : console.log(`server running on ${Port}`)
} )