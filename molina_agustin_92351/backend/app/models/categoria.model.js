const {DataTypes} = require('sequelize');

const CategoriaModel = (sequelize) => {

    return sequelize.define(
      "categoria", {
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true },
        descripcion: { 
                type: DataTypes.STRING, 
                },
        }, 
        {
            timestamps: false, 
            tableName: 'categorias'
        }
    );
  
};

module.exports = CategoriaModel;