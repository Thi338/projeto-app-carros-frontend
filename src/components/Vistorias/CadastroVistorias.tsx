import { useState } from "react";


import { Link } from "react-router-dom";
import { CardVistoria } from "./cardVistoria";
import { useSurveyData } from "../../hooks/useSurveyData";
import { CreateVistoriaModal } from "./create-vistoria-modal/create-vistoria-modal";
import './cadastroVistoria.css';

export function CadastroVistorias() {
    
    const { data } = useSurveyData();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <div className="container">
           
            <h1>Cadastro de Vistorias</h1>
            <div className="card-grid">
                {data?.map(surveyData => <CardVistoria 
                dataVistoria={surveyData.dataVistoria} 
                statusVistoria={surveyData.statusVistoria}
                />)}
          
            </div>
            {isModalOpen && <CreateVistoriaModal closeModal={handleOpenModal}/>}
            <button onClick={handleOpenModal}>novo</button>
            <Link to='/'><button className="btn-carros">Carros</button></Link>
            <Link to='/clientes'><button className="btn-clientes">Clientes</button></Link>
        </div>
    )
}
