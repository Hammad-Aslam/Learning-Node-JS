const fs = require('fs')

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `${Date.now()}, \n ${req.method}, ${req.path} `, (req, data) => { })
        console.log('Hello from middleware')
        next()
    }
}

module.exports = {
    logReqRes
}