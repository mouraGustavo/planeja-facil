const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Aqui carrega as variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
connectDB();

const app = express();

app.use(express.json());

// Rotas
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Bem-vindo à API!');
});