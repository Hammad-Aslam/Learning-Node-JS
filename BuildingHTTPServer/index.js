const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) =>{
const log = `${Date.now()}, ${req.url}\n New Request Recieved! \n`;


fs.appendFile('log.txt', log, (err, data) =>{
switch(req.url){
case '/':
res.end('Home Page');
break
case '/about':
res.end('I amd Hammad Aslam!!')
break
default:
res.end('404 Not found')
}
console.log('New Request Recieved');
})

})

myServer.listen(8000, () =>
console.log('Server Started!')

)


