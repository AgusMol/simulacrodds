const Sequelize= require("sequelize");
const Temp= require('../models/temperaturas.js');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './datos/base.db'
});

// Inicializar el modelo
const Temperaturas = Temp(sequelize);  // Pasamos sequelize para obtener el modelo

// Sincronizar la base de datos (esto crea las tablas si no existen)
sequelize.sync({ force: false })
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((error) => {
        console.error("Error al sincronizar base de datos:", error);
    });

const db = { sequelize, Sequelize, Temperaturas };
module.exports = db;
