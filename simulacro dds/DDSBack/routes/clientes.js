const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");

router.get("/api/clientes", async function (req, res, next) {
    let data = await db.clientes.findAll({
      attributes: ["IdCliente", "ApellidoYNombre", "DNI"],
    });
    res.json(data);
  });
  
router.get("/api/clientes/:ApellidoYNombre", async function (req, res, next) {
    let data = await db.clientes.findAll({
      attributes: ["IdCliente", "ApellidoYNombre","DNI"],
      where: { ApellidoYNombre: req.params.ApellidoYNombre },
    });
    if (data.length > 0 ) res.json(data[0]);
    else res.status(404).json({mensaje:'No encontrado!!'})
  });

  router.delete("/api/clientes/:IdCliente", async function (req, res, next) {
    try {
        const { IdCliente } = req.params; // Id del cliente a eliminar

        const cliente = await db.clientes.findByPk(IdCliente); // Buscar el cliente
        if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });

        await cliente.destroy(); // Eliminar cliente
        res.json({ mensaje: "Cliente eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al eliminar el cliente" });
    }
});

module.exports = router;
