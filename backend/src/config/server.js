const port = 3003 // porta usada no server
const bodyParser = require('body-parser') // middleware usando em todas as requisicoes
const express = require('express') // singleton
const server = express() // instancia que representa o server
const allowCors = require('./cors') // middleware do cors
const queryParser = require('express-query-int') // middleware que habilita campos numericos na query da api

server.use(bodyParser.urlencoded({ extended: true })) // quando um form eh submetido (urlencoded -> modo extendido)
server.use(bodyParser.json()) // usar o parser quando o corpo da requisicao for json
server.use(allowCors) // aplica o CORS
server.use(queryParser())

// evento de start do server
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server