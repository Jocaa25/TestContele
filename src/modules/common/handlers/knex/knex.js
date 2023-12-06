'use strict'

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host: process.env.WRITER_MYSQL_HOST,
//       user: process.env.WRITER_MYSQL_USER,
//       port: "3307",
//       password: process.env.WRITER_MYSQL_PASS,
//       database: 'main'
//   },
//   pool: {
//     min: 1,
//     max: 4,
//   },
// });


var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'admin',
    database : 'main',
    port: '3307'
  }
});



const getTransaction = async () => {

    const transaction = await knex.transaction()

    conso
    
    le.log(knex);
    return {transaction};
}

const commitTransaction = ({ transaction }) => transaction.rollback();

const rollbackTransaction = ({ transaction }) => transaction.rollback();

module.exports = { getTransaction, commitTransaction, rollbackTransaction, client: knex };
