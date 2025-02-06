import { useState } from "react";

export default function FiltrosPeliculas({ onConsultarPeliculas }) {
    const [pelicula, setPelicula] = useState('');
    const [incluirEliminados, setIncluirEliminados] = useState(false);

    const onFiltrarClick = () => {
        onConsultarPeliculas({
            titulo: pelicula,
            incluirEliminados
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <h5>Películas</h5>

                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar película..."
                            value={pelicula}
                            onChange={(e) => setPelicula(e.target.value)}
                        />
                    </div>

                    <div className="col-md-3 d-flex align-items-center">
                        <label className="me-2">Incluir eliminados</label>
                        <input
                            type="checkbox"
                            checked={incluirEliminados}
                            onChange={() => setIncluirEliminados(!incluirEliminados)}
                        />
                    </div>

                    <div className="col-md-3">
                        <button
                            className="btn btn-primary"
                            onClick={onFiltrarClick}
                        >
                            Consultar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
