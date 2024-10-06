const express = require('express');
const { ConnectToMongoDB } = require('./connection')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const app = express();

ConnectToMongoDB('mongodb://localhost:27017/short-url').then(() => { console.log('connected') })
app.use(express.json())
app.use('/url', urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            },
        },
        { new: true }
    )
    res.redirect(entry.redirectURL)
}


)



app.listen(8000, () => { })