const server = require('./app');

server.listen(process.env.MYSQLPORT,() => {
    console.log(`Rodando na porta ${process.env.MYSQLPORT}`);
});