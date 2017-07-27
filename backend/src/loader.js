const server = require('./config/server') // cfg server
require('./config/database') // cfg banco
require('./config/routes')(server) // cfg das rotas do servico