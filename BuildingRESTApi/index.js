const express = require('express')
const { logReqRes } = require('./middlewares')
const app = express()

const { connectMongoDb } = require('./connection')

const PORT = 8000
const userRouter = require('./routes/user.js')
//connection
connectMongoDb('mongodb://localhost:27017/youtube-app-1')

// Middleware --> send the data to object body into server.
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes('log.txt'))

// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log('Server is running on 8000 :)');
})