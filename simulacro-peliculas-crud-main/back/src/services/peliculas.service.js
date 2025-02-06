import { Op } from "sequelize"
import { sequelize } from "../models/db.js"


const getPeliculas = async (filtros) => {
    const where = {};
    
    if (!filtros.incluirEliminados) {
        where.Eliminado = false; // Solo muestra los NO eliminados si no se pide incluirlos
    }
    if (filtros.titulo)
        where.Titulo = { [Op.like]: `%${filtros.titulo}%` }

    const resultado = await sequelize.models.peliculas.findAll({
        attributes: [
            'IdPelicula',
            'Titulo',
            'IdClasificacion'
        ],
        order: [["IdPelicula", "ASC"]],
        where,
        include: [sequelize.models.clasificaciones]
    })
    // console.log('resultado', resultado)
    return resultado.map(p => {
        return {
            id: p.dataValues.IdPelicula,
            titulo: p.dataValues.Titulo,
            director: p.dataValues.Director,
            genero: p.dataValues.Genero,
            duracion: p.dataValues.Duracion,
            idClasificacion: p.dataValues.IdClasificacion,
            clasificacion: {
                id: p.dataValues.clasificacione.IdClasificacion,
                nombre: p.dataValues.clasificacione.NombreClasificacion
            }
        }
    })
}

const getPeliculaPorId = async (idPelicula) => {
    console.log('getPeliculaPorId', idPelicula)
    const resultado = await sequelize.models.peliculas.findOne({
        attributes: [
            'IdPelicula',
            'Titulo',
            'Eliminado',
        ],
        where: {IdPelicula: idPelicula},
        include: [sequelize.models.clasificaciones]
    })
    console.log('getPeliculaPorId', resultado.dataValues)
    return {
        id: resultado.dataValues.IdPelicula,
        titulo: resultado.dataValues.Titulo,
        clasificacion: {
            id: resultado.dataValues.clasificacione.IdClasificacion,
            nombre: resultado.dataValues.clasificacione.NombreClasificacion
        }
    }
}


// =================POST ====================
const insertarPelicula = async (peliculaCmd) => {
    const resultado = await sequelize.models.peliculas.create({
        Titulo: peliculaCmd.titulo,
        Eliminado: false,
        IdClasificacion: peliculaCmd.idClasificacion
    }, { isNewRecord: true })
    // console.log('insertar pelicula', resultado)
    return {
        id: resultado.dataValues.IdPelicula,
        titulo: resultado.dataValues.Titulo,
    };

}

// ====================PUT====================
const editarPelicula = async (peliculaCmd, idPelicula) => {
    console.log('getPeliculaPorId', idPelicula)
    const pelicula = await sequelize.models.peliculas.findOne({
        where: { IdPelicula: idPelicula},
    });
     if (!pelicula) {
        throw new Error("Película no encontrada");
     }

    const updatedPelicula = await sequelize.models.peliculas.update(
        {
            Titulo: peliculaCmd.titulo,
            IdClasificacion: peliculaCmd.idClasificacion
        },
        {
            where: { IdPelicula: idPelicula }
        });
    console.log(updatedPelicula)
    return { id: idPelicula };

}

// ========= DELETE (borrado lógico)==========
const deletePelicula = async (idPelicula) => {
    const pelicula = await sequelize.models.peliculas.findOne({
        where: { IdPelicula: idPelicula },
    });
     if (!pelicula) {
        throw new Error("Película no encontrada");
        }
     //if (pelicula.Eliminado)
     //   throw new Error("Película no encontrada");

    const updatedPelicula = await sequelize.models.peliculas.update(
        {
            Eliminado: true,
        },
        {
            where: { IdPelicula: idPelicula }
        });
    console.log(updatedPelicula)
    return { id: idPelicula };

}

const peliculasService = {
    insertarPelicula,
    getPeliculas,
    getPeliculaPorId,
    editarPelicula,
    deletePelicula
}

export default peliculasService;
