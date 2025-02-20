import React from 'react';

const ListadoClientes = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>ApellidoYNombre</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdCliente}>
              <td>{item.IdCliente}</td>
              <td>{item.ApellidoYNombre}</td>
              <td>{item.DNI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoClientes;
