const express = require('express');
const { Temperaturas, Sequelize } = require('../base-orm/sequelize-init');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { provincia, tempMin, tempMax } = req.query;

        const filters = {};

        if (provincia?.trim()) {
            filters.Provincia = { [Sequelize.Op.like]: `%${provincia}%` };
        }

        if (tempMin?.trim() || tempMax?.trim()) {
            filters.temperatura = {};
            if (tempMin?.trim()) filters.temperatura[Sequelize.Op.gt] = Number(tempMin);
            if (tempMax?.trim()) filters.temperatura[Sequelize.Op.lt] = Number(tempMax);
        }

        const temps = await Temperaturas.findAll({ where: filters });

        res.json(
            temps.map(p => ({
                id: p.Id,
                provincia: p.Provincia,
                localidad: p.Localidad,
                temperatura: p.Temperatura,
                fecha: p.Fecha
            }))
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
