interface CardVistoriaProps {
    dataVistoria: string,
    statusVistoria: string
}

export function CardVistoria({ dataVistoria, statusVistoria }: CardVistoriaProps) {
    
    return (

        <div className="card">
            <h2>{dataVistoria}</h2>
            <h3>{statusVistoria}</h3>
        </div>
    )
}