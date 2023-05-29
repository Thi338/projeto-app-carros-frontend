
import { useState } from 'react';
import './cadastroCarros.css'

import { Link } from 'react-router-dom';


import { useCarData } from '../../hooks/useCarData';
import { Card } from '../Card/card';
import { CreateModal } from '../Card/create-modal/create-modal';

function CadastroCarros() {
  const { data } = useCarData();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
   
  
      <div className='container'>
        <h1>Cadastro de Carros</h1>
        <div className="card-grid">
            {data?.map(carData => <Card 
            price={carData.price} 
            model={carData.model}
            image={carData.image}
            year={carData.year}
            color={carData.color}
            numberOfPorts={carData.numberOfPorts}
            />
            )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>novo</button>
        <Link to='/clientes'><button className='clientes'>Clientes</button></Link>
        <Link to='/vistorias'><button className='btn-vistorias'>Vistorias</button></Link>
      </div>
          
  )
  
}

export default CadastroCarros;