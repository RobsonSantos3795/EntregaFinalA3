const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(express.json());

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS plataformas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)");
  db.run('CREATE TABLE IF NOT EXISTS jogo (id INTEGER PRIMARY KEY, nome TEXT, plataforma_id INTEGER)');
  app.get('/plataformas', (req, res) => {
    db.all('SELECT * FROM plataformas', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });

  app.post('/plataformas', (req, res) => {
    const { nome } = req.body;
    db.run('INSERT INTO plataformas (nome) VALUES (?)', nome, function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID, nome });
    });
  });

  app.delete('/plataformas/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM plataformas WHERE id = ?', id, function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Plataforma removida', changes: this.changes });
    });
  });

  app.get('/plataformas/:id/jogo', (req, res) => {
    const { id } = req.params;
    db.all('SELECT * FROM jogo WHERE plataforma_id = ?', id, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });

  app.post('/plataformas/:id/jogo', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    db.run('INSERT INTO jogo (nome, plataforma_id) VALUES (?, ?)', [nome, id], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID, nome });
    });
  });

  app.delete('/plataformas/:plataforma_id/jogo/:jogo_id', (req, res) => {
    const { plataforma_id, jogo_id } = req.params;
    db.run('DELETE FROM jogo WHERE plataforma_id = ? AND id = ?', [plataforma_id, jogo_id], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Produto removido', changes: this.changes });
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor da plataforma de jogos Big Gamer rodando na porta ${PORT}`);
});
