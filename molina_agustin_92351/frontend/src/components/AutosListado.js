import React from 'react';

const AutosListado = ({ lista }) => {
    return (
        <div className="container mt-3">
            <h3>Listado de Autos</h3>
            <table  className="table table-striped">
                <thead>
                    <tr>
                        <th>Año</th>
                        <th>Fabricante</th>
                        <th>Modelo</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.length > 0 ? (
                        lista.map((auto) => (
                            <tr key={auto.id}>
                                <td>{auto.anio}</td>
                                <td>{auto.fabricante}</td>
                                <td>{auto.modelo}</td>
                                <td>{auto.categoria}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron autos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AutosListado;
