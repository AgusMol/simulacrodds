import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import clasificacionesService from '../services/clasificaciones.service';
import peliculasService from "../services/peliculas.service";


export default function EditarPelicula() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [clasificaciones, setClasificaciones] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("ID recibido en frontend:", id);
        const getClasificaciones = async () => {
            const clasificaciones = await clasificacionesService.getAll()
            setClasificaciones(clasificaciones);
        }
        const getPelicula = async () => {
            try {
                const pelicula = await peliculasService.getById(id);
                setValue("titulo", pelicula.titulo);
                setValue("idClasificacion", pelicula.idClasificacion);
            } catch (error) {
                console.error("Error al obtener la película", error);
            }
        };

        getClasificaciones()
        getPelicula()

    }, [id, setValue])

    const onSubmit = async (pelicula) => {
        await peliculasService.put(pelicula, id)
        navigate('/peliculas')
    }

    const onVolver = () => {
        // vuelvo
        navigate('/peliculas')
    }

    return (
        <div className='container mt-5'>
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center">Editar pelicula</h2>
                </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="titulo">Titulo:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="titulo"  
                                {...register("titulo", { required: 'Este campo es requerido' })} />
                                {errors.titulo && <Alert key='danger' variant='danger'>{errors.titulo.message}</Alert>}
                        </div>
                        <div className="mb-3" >
                            <label htmlFor="idClasificacion">Clasificación:</label>
                            <select 
                            className="form-control" 
                            id="idClasificacion" 
                            {...register("idClasificacion", { required: 'Este campo es requerido' })}>
                            {clasificaciones && clasificaciones?.map((x) => (
                            <option value={x.id} key={'clasificacion-' + x.id}>
                                {x.nombre}
                            </option>))}
                            </select>
                            {errors.idClasificacion && <span className='error'>{errors.idClasificacion.message}</span>}
                        </div>
                    <div className="form-group text-center mt-3">
                        <button type="submit" className="btn btn-primary mx-1">Confirmar</button>
                        <button type="reset" className="btn btn-secondary mx-1">Limpiar</button>
                        <button onClick={()=>onVolver()} type="reset" className="btn btn-primary mx-2">Volver</button>
                    </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
