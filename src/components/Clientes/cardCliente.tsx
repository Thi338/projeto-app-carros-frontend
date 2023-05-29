

interface CardClienteProps {
    name: string,
    image: string,
    email: string,
    phone: number
}

export function CardCliente({ name, image, email, phone }: CardClienteProps) {
    
    return (

        <div className="card">
            <img src={image} />
            <h2>{name}</h2>
            <p><b>E-mail: </b>{email}</p>
            <p><b>Telefone: </b>{phone}</p>
            
        </div>
    )
}