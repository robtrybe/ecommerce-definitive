import app from './app';

app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});