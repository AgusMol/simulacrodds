import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Tabla from './tabla';

const Consultar = () => {
    const [lista, setLista] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const obtenerTemperaturas = async (provincia = '', tempMin = '', tempMax = '') => {
        try {
            let url = 'http://localhost:4000/api/temperaturas';
            const params = [];

            if (provincia) params.push(`provincia=${provincia}`);
            if (tempMin) params.push(`tempMin=${tempMin}`);
            if (tempMax) params.push(`tempMax=${tempMax}`);

            if (params.length > 0) {
                url += `?${params.join("&")}`;
            }

            const response = await axios.get(url);
            console.log("Datos recibidos..................--------------------------------------------:", response.data);
            setLista(response.data);
        } catch (error) {
            console.error('Error al obtener temperaturas:', error);
            setLista([]); // Vacía la lista si hay error
        }
    };

    useEffect(() => {
        obtenerTemperaturas();
    }, []);

    const onSubmit = async (data) => {
        const { provincia, tempMin, tempMax } = data;
        obtenerTemperaturas(provincia, tempMin, tempMax);
    };

    return (
        <div className="container">
            <h1>Buscar Temperaturas</h1>
            <hr />
            <div className="card mb-3">
                <div className="card-body">             
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Provincia:</label>
                            <input {...register('provincia')} type="text" placeholder="Buscar por provincia" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Temperatura Mínima:</label>
                            <input
                                {...register('tempMin', {
                                    valueAsNumber: true,
                                    min: { value: -50, message: 'El mínimo es -50' },
                                    max: { value: 50, message: 'El máximo es 50' }
                                })}
                                type="number"
                                placeholder="Buscar por tempMin (solo números)" className="form-control"
                            />
                            {errors.tempMin && <p className="text-danger">{errors.tempMin.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Temperatura Máxima:</label>
                            <input
                                {...register('tempMax', {
                                    valueAsNumber: true,
                                    min: { value: -50, message: 'El mínimo es -50' },
                                    max: { value: 50, message: 'El máximo es 50' }
                                })}
                                type="number"
                                placeholder="Buscar por tempMax (solo números)" className="form-control"
                            />
                            {errors.tempMax && <p className="text-danger">{errors.tempMax.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>  
            </div>            
            {lista.length > 0 ? <Tabla items={lista} /> : <p>No se encontraron temperaturas</p>}
        </div>
    );
};

export default Consultar;
