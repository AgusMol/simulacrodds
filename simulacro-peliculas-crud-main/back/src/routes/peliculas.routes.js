import express from "express"
import peliculasService from "../services/peliculas.service.js";

const router = express.Router();

router.get("/:id", async (req, res) =>{
    console.log('ID recibido en backend:', req.params.id);
    // codigo
    const peliculas = await peliculasService.getPeliculaPorId(req.params.id);
    // retorno respueta
    res.json(peliculas);
})

router.get("", async (req, res) => {
    try {
        const { titulo, incluirEliminados } = req.query;

        // Convertir a booleano correctamente
        const filtros = {
            titulo,
            incluirEliminados: incluirEliminados === "true"
        };

        const peliculas = await peliculasService.getPeliculas(filtros);
        res.json(peliculas);
    } catch (error) {
        console.error("Error al obtener películas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.post('', async (req, res) =>{
    const pelicula = await peliculasService
    .insertarPelicula(req.body)
    return res.json(pelicula);
});

router.put("/:id", async (req, res)=>{
    console.log('PUT /api/peliculas/:id', req.params.id) // consoleo el valor que me viene en la url antes del ?, distinto a las query
        const pelicula = await peliculasService
        .editarPelicula(req.body, req.params.id)
        return res.json(pelicula);
})

router.delete("/:id", async (req, res)=>{
    //console.log('DELETE /api/peliculas/:id', req.params.id)
        const pelicula = await peliculasService
        .deletePelicula(req.params.id)
        return res.json(pelicula);
})

const peliculasRouter = {
    router
}


export default peliculasRouter;