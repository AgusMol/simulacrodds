const temperaturasRoutes =require('./routes/temperaturas.routes.js');

const express = require("express");
const cors = require("cors");
const app = express();

// para poder leer json en el body
app.use(express.json());

// Configuración de CORS
app.use(cors());

// Configuración de rutas
app.use("/api/temperaturas", temperaturasRoutes)

// Inicio del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;
