const Sequelize = require('sequelize');
const db = require('../models/db');

const usuario = db.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 20,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 20,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 15,
    }
})

usuario.sync()

module.exports = usuario;