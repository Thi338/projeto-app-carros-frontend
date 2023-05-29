import { useEffect, useState } from "react";
import { useCarDataMutate } from "../../../hooks/useCarDataMutate";
import { CarData } from "../../../interface/CarData";

import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal } : ModalProps) {
    const [model, setModel] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [year, setYear] = useState(0);
    const [color, setColor] = useState("");
    const [numberOfPorts, setNumberOfPorts] = useState(0);
    const { mutate, isSuccess, isLoading } = useCarDataMutate()

    const submit = () => {
        const carData: CarData = {
            model,
            price,
            image,
            year,
            color,
            numberOfPorts
        }
        mutate(carData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
            <h2>Cadastre um novo carro</h2>
            <form className="input-container">
            <button onClick={closeModal} className="btn-danger">X</button>
                <Input label="Modelo" value={model} updateValue={setModel}/>
                <Input label="Valor" value={price} updateValue={setPrice}/>
                <Input label="Imagem" value={image} updateValue={setImage}/>
                <Input label="Ano" value={year} updateValue={setYear}/>
                <Input label="Cor" value={color} updateValue={setColor}/>
                <Input label="Número de portas" value={numberOfPorts} updateValue={setNumberOfPorts}/>
            </form>
            <button onClick={submit} className="btn-secondary">
                
                {isLoading ? `postando...` : `Postar`}
            </button>
            
        </div>
    </div>
    )
}