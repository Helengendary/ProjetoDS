import express from 'express';
import initRoutes from './routes/routes.js'
import connectDB from '../database/database.ts';

const app = express();

connectDB()
initRoutes(app)

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});