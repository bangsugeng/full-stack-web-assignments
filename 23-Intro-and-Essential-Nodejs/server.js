const http = require('http')
const url = require('url')

const port = 8000

const server = http.createServer((req, res) => {
    let path = url.parse(req.url).pathname

    res.writeHead(200, {'Content-Type': 'text/html'})

    if(path === '/about')
        res.write('<h1>Welcome to about us page</h1>')
    else if(path === '/contact')
        res.write('<h1>Welcome to contact us page</h1>')
    else
        res.write('<h1>Hello world</h1>')

    res.end()
})

server.on('error', (err) => {
    console.log('server is error');
    console.error(err);
})

server.on('listening', () => {
    console.log('listening on port', port);
})

server.listen(port)