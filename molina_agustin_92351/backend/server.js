const express = require('express');
const cors = require('cors');

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

// Importar rutas
const autoRoutes = require('./app/routes/autos');
const categoriaRoutes = require('./app/routes/categorias');

// Usar las rutas
app.use('/autos', autoRoutes);
app.use('/categorias', categoriaRoutes);

// Conectar base de datos
const db = require('./app/db/setup');
db.iniciar();

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
