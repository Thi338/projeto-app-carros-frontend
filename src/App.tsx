
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CadastroCarros from './components/Carros/CadastroCarros';
import { CadastroClientes } from './components/Clientes/CadastroClientes';
import { CadastroVistorias } from './components/Vistorias/CadastroVistorias';



function App() {

  return (

      <Router>
          <Routes>
              <Route path='/' element={<CadastroCarros />} />
              <Route path='/clientes' element={<CadastroClientes />}/>
              <Route path='/vistorias' element={<CadastroVistorias />}/>
          </Routes>
      </Router>
          
  )
  
}

export default App
