const express = require('express');
const router = express.Router();
const { Autos } = require('../db/setup');
const { Sequelize } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const { fabricante, modelo } = req.query;

        const filters = {};

        if (fabricante?.trim()) {
            filters.fabricante = { [Sequelize.Op.like]: `%${fabricante}%` };
        }

        if (modelo?.trim()) {
            filters.modelo = { [Sequelize.Op.like]: `%${modelo}%` };
        }

        const autos = await Autos.findAll({
            where: filters
        });

        if (autos.length === 0) {
            return res.json([]);
        }

        res.json(autos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los autos' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { fabricante, modelo, anio, categoria } = req.body;

        if (!fabricante || !modelo || !anio || !categoria) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevoAuto = await Autos.create({
            fabricante,
            modelo,
            anio,
            categoria
        });

        res.status(201).json(nuevoAuto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el auto' });
    }
});

module.exports = router;
