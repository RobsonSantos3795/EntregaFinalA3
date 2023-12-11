const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001; // Porta da sua escolha

// Configuração do banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // Você pode trocar ':memory:' por um arquivo 'usuarios.db'

// Criando tabela para usuários
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, senha TEXT)');
});

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Middleware para fazer parse do corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para criar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const { email, senha } = req.body;

  db.run('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, senha], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: 'Novo usuário criado com sucesso!',
      id: this.lastID
    });
  });
});

// Rota para login
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  db.get('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.json({ message: 'Login bem-sucedido!' });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
