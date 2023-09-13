

const List = ({collaboratorList}) => {

    return (
    
        <table className="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {collaboratorList.map((collaborator) => (
                     <tr key={collaborator.id}>
                     <td>{collaborator.nombre}</td>
                     <td>{collaborator.correo}</td>
                     <td>{collaborator.edad}</td>
                     <td>{collaborator.cargo}</td>
                     <td>{collaborator.telefono}</td>
                 </tr>
                )
                )}
                
            </tbody>
        </table>

    
)

}

export default List;