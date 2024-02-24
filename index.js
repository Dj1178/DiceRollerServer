const express = require('express')
app = express()
const http = require('http')
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(cors({ origin: '*' }))

app.get('/generateNum', (request, response) => {
	console.log('Calling "/roll" on the Node.js server.')
    let random = Math.floor((Math.random()*6)+1);
    response.type('text/plain')
	response.send(random.toString());
})

app.get('/about', (request, response) => {
	console.log('Calling "/about" on the Node.js server.')
    response.type('text/plain')
	response.send('This is a node.js server for my web dice roller.');
})

app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
  })
  
app.use((err, request, response, next) => {
    console.error(err.message)
    response.type('text/plain')
    response.status(500)
    response.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
  )