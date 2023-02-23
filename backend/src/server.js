const server = require('./app');

server.listen(process.env.PORT,() => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});