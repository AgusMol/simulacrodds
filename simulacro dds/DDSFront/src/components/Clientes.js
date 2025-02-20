import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ListadoClientes from './ListadoClientes'

const Clientes = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:3000/api/clientes', {
        params: data
      });
      
      console.log(response.data)

      setLista(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const actualizarCliente = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/clientes/${id}`, data);
        console.log(response.data); // Cliente actualizado
    } catch (error) {
        console.error(error);
    }
};

const eliminarCliente = async (id) => {
  try {
      const response = await axios.delete(`http://localhost:3000/api/clientes/${id}`);
      console.log(response.data); // Confirmación de eliminación
  } catch (error) {
      console.error(error);
  }
};


  return (
    <div className="container">
     <h1>Clientes</h1>
     <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Apellido y nombre:</label>
              <input type="text" className="form-control" {...register('apellidoynombre')} />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      {lista && <ListadoClientes lista={lista} />}
    </div>
  );
};

export default Clientes;
