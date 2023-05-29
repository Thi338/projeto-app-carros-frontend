import { useState } from "react";
import { useCustomerData } from "../../hooks/useCustomerData";
import { CardCliente } from "./cardCliente"
import { CreateCustomerModal } from "./create-customer-modal/create-customer-modal";

import "./cadastroClientes.css";
import { Link } from "react-router-dom";

export function CadastroClientes() {
    const { data } = useCustomerData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <div className="container">
           
            <h1>Cadastro de Clientes</h1>
            <div className="card-grid">
            {data?.map(customerData => 
            <CardCliente 
                name={customerData.name} 
                image={customerData.image} 
                email={customerData.email} 
                phone={customerData.phone}
                />
            )}
            </div>
            {isModalOpen && <CreateCustomerModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>novo</button>
            <Link to='/'><button className="btn-carros">Carros</button></Link>
            <Link to='/vistorias'><button className="btn-vistorias">Vistorias</button></Link>
        </div>
    )
}
