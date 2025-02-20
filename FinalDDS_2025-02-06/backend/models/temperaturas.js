const {DataTypes} = require('sequelize');

const TemperaturaModel = (sequelize) => {

    return sequelize.define(
      "temperatura", {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Provincia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Localidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Temperatura: {
            type: DataTypes.REAL,
            allowNull: false
        },
        Fecha: {
            type: DataTypes.STRING,
            allowNull: false
        },},
        {
            timestamps: false, 
            tableName: 'Temperaturas'
        },

    );
  
};

module.exports = TemperaturaModel;