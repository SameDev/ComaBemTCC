const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('comabem', 'root', 'aluno01', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

// Senha no IF -> aluno01
// Senha meu PC -> &du4rdoQuart27