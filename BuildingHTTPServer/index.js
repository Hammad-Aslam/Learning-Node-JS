const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end();
  const log = `${Date.now()}, ${req.url} ${req.method} \n New Request Recieved! \n`;
  const myUrl = url.parse(req.url, true)
  console.log(myUrl);


  fs.appendFile('log.txt', log, (err, data) => {
    switch (myUrl.pathname)
    {
      case '/':
        res.end('Home Page');
        break
      case '/about':
        const username = myUrl.query.myname;
        res.end(`hi, ${username}`)
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


