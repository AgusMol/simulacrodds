import express from "express"
import clasificacionesService from "../services/clasificaciones.service.js";

const router = express.Router();

router.get("", async (req, res) =>{
    // codigo
    const clasificaciones = await clasificacionesService.getAll();
    // retorno respueta
    res.json(clasificaciones);
})

const clasificacionesRouter = {
    router
}


export default clasificacionesRouter;