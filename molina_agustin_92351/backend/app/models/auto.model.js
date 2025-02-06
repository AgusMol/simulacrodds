const {DataTypes} = require('sequelize');

const AutoModel = (sequelize) => {

    return sequelize.define(
      "auto", {
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true },
        anio: {
                type: DataTypes.INTEGER,
            },
        fabricante: {
                type: DataTypes.STRING,
            },
        modelo: {
                type: DataTypes.STRING,
            },
        categoria: {
                type: DataTypes.STRING,
            },
        }, 
        {
            timestamps: false, 
            tableName: 'autos'
        }
    );
  
};

module.exports = AutoModel;