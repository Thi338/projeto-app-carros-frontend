import { useEffect, useState } from "react"
import { useCustomerDataMutate } from "../../../hooks/useCustomerDataMutate";
import { CustomerData } from "../../../interface/CustomerData";
import './customer-modal.css';

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
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateCustomerModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const { mutate, isSuccess } = useCustomerDataMutate();

    const submit = () => {
        const customerData: CustomerData = {
            name,
            image,
            email,
            phone
        }

        mutate(customerData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal()
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo cliente</h2>
                <form className="input-container">
                    <Input label="name"  value={name} updateValue={setName}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                    <Input label="email" value={email} updateValue={setEmail}/>
                    <Input label="phone" value={phone} updateValue={setPhone}/>
                </form>
                <button onClick={submit} className="btn-secondary">Cadastrar</button>
                <button className="fecharCadastroCliente" onClick={closeModal}>X</button>
            </div>
        </div>
    )
}