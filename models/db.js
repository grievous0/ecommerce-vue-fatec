const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'spigo594_grupo06', 
    'spigo594_grupo06', 
    '34981946aA!', {
        host: 'spigo.net',
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;