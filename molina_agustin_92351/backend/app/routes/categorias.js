const express = require('express');
const router = express.Router();
const { Categorias } = require('../db/setup');

router.get('/', async (req, res) => {
    try {
        const categorias = await Categorias.findAll();

        if (categorias.length === 0) {
            return res.status(404).json({ message: 'No hay categorías disponibles' });
        }

        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
});

module.exports = router;
