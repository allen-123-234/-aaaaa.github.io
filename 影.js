const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'message_board'
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/messages', (req, res) => {
  pool.query('SELECT * FROM messages', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/api/messages', (req, res) => {
  const { name, message } = req.body;
  pool.query('INSERT INTO messages SET ?', { name, message }, (error) => {
    if (error) throw error;
    res.send({ success: true });
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
