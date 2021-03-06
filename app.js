require('dotenv').config()

const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection

db.on('error',()=> console.error(error))
db.once('open',()=> console.log('connected to database'))

app.use(express.json())

const subscriberRouter = require('./routes/subscriber')
app.use('/subscribers',subscriberRouter)


app.listen(3000,()=> console.log('server started'))