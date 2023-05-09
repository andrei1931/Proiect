const express=require('express')

const router=express.Router()
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Arduino',
  password: 'bazededate',
  port: 5432,
});
client.connect()
const sql = 'SELECT * FROM Proiect';

client.query(sql, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
})

const rows = result.rows;

res.render('proiecte.ejs', { date: rows });


module.exports=router