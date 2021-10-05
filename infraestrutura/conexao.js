const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'agenda-petshop',
});

module.exports = conexao;
