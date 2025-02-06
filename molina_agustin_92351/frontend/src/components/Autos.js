import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AutosListado from './AutosListado';
import { useNavigate } from "react-router-dom";

const Autos = () => {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);
    const { register, handleSubmit } = useForm();

    const obtenerAutos = async (fabricante = '', modelo = '') => {
        try {
            let url = 'http://localhost:3001/autos';
            
            if (fabricante) {
                url += `?fabricante=${fabricante}`;
            }

            if (modelo) {
                url += (fabricante ? `&modelo=${modelo}` : `?modelo=${modelo}`);
            }

            const response = await axios.get(url);
            setLista(response.data);
        } catch (error) {
            console.error('Error al obtener los autos:', error);
        }
    };

    useEffect(() => {
        obtenerAutos();
    }, []);

    const onSubmit = async (data) => {
        const { fabricante, modelo } = data;
        obtenerAutos(fabricante, modelo);
    };

    return (
        <div className="container">
        <h1>Buscar Autos</h1>
        <hr />
            <div className="card mb-3">
                <div className="card-body">             
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Fabricante:</label>
                            <input {...register('fabricante')} type="text" placeholder="Buscar por fabricante" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Modelo:</label>
                            <input {...register('modelo', {pattern: {value: /^[0-9]*$/, message: 'El modelo debe contener solo números'}})}
                                type="text"
                                placeholder="Buscar por modelo (solo números)" className="form-control" />
                        </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                    <div className="text-end">
                    <button className="btn btn-success" onClick={() => navigate("/detalle-auto")}>Alta</button>
                    </div>
                    </form>
                </div>  
            </div>            
            {lista.length > 0 ? (<AutosListado lista={lista} />) : (<p>No se encontraron autos</p>)}
        </div>

    );
};

export default Autos;
