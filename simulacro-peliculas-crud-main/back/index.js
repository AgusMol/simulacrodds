import express from "express";
import peliculasRouter from "./src/routes/peliculas.routes.js";
import clasificacionesRouter from "./src/routes/clasificaciones.routes.js";
import { initDB } from "./src/models/db.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())


app.use("/api/clasificaciones", clasificacionesRouter.router);
app.use("/api/peliculas", peliculasRouter.router);

app.listen(3001, async()=>{
    await initDB()
    console.log("Servidor iniciado en el puerto 3001");
});
