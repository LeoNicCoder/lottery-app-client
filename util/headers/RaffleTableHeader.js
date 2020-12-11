import OperationIcon from "../../components/form/OperationIcon";

const getRaffleTableHeader = (onDeleteSelected, onUpdateSeleted) => {

    return [
        { 
            Header: 'Nombre',
            accessor: 'name',
        },
        {
            Header: 'Inicio',
            accessor: 'startDate',
        },
        {
            Header: 'Final',
            accessor: 'endDate',
        },
        /*{
            Header: 'No Ganador',
            accessor: 'winner_number',
        },*/
        {
            Header: 'Estado',
            accessor: 'isActive',
            Cell: ({cell: {value}}) => {

                return(
                    <>
                        {
                            value ? (
                                <p className="text-orange-600 font-bold">Sin correr</p>
                            ) : (
                                <p className="text-green-600 font-bold">Finalizado</p>
                            )
                        }
                    </>
                )
            }
        },
        {
            Header: 'Opcion',
            accessor: 'id',
            Cell: ({cell: {value}}) => {
              return (
                <div className="px-3 flex justify-evenly">
                   {/*<OperationIcon type="view" action={() => {}} /> */}
                   <OperationIcon type="edit" action={() => onUpdateSeleted(value)} />
                   <OperationIcon type="delete" action={() => onDeleteSelected(value)} />
                </div>
              )
            }
          }
    ]
}

export default getRaffleTableHeader;
