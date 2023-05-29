
import './card.css'

interface CardProps {
    
    price: number,
    model: string, 
    image: string,
    year: number,
    color: string
    numberOfPorts: number
}

 
export function Card({ price, model, image, year, color, numberOfPorts} : CardProps) {

    
    
    return (
        <div className="card">
            <img src={image}/>
            <h2>{model}</h2>
            <p><b>Valor: </b>{price.toFixed(3)}</p>
            <p><b>Ano: </b>{year}</p>
            <p><b>Cor: </b>{color}</p>
            <p><b>Portas: </b>{numberOfPorts}</p>
            <p><a href="">Deletar</a></p>
        </div>
    )
    
}