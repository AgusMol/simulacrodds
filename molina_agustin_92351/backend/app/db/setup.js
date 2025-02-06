const Sequelize = require('sequelize'); 

const crearDatos = require('./init');
const AutoModel = require('../models/auto.model');
const CategoriaModel = require('../models/categoria.model');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './datos/autos.db'
});

const Autos = AutoModel(sequelize);
const Categorias = CategoriaModel(sequelize);

const iniciar = async(reset = false) => {
    try {
        await sequelize.sync({force: reset});
        console.log(`Base de datos inicializada`);
        if (reset) {
            await crearDatos(Autos, Categorias);
        }
    }
    catch (err){
        console.log(`Error en la base de datos: ${err.message}`);
    }
}


const db = {iniciar, Autos, Categorias}
module.exports = db;