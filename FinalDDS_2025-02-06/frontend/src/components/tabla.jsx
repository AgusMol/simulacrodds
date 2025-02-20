export default function Tabla({ items}) {

    console.log('TablaTemperaturas',items)
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <table className="table table-responsive">
                        <thead>
                            <tr key={'temperatura-h'}>
                                <th scope="col">#</th>
                                <th scope="col">Provincia</th>
                                <th scope="col">Localidad</th>
                                <th scope="col">Temperatura</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.map((item, index) => {
                                return (
                                    <tr key={'temperatura-' + index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.provincia}</td>
                                        <td>{item.localidad}</td>
                                        <td>{item.temperatura}</td>
                                        <td>{item.fecha}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}