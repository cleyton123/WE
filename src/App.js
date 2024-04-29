import React, { useState } from 'react';
import CadastroForm from './formulário cadastro/Cadastroform';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './pages/404';

function App() {
  const [items, setItems] = useState([]);

  const handleCadastro = (formData) => {
  
    setItems([...items, formData]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/cadastro' element={<CadastroForm onCadastro={handleCadastro} items={items} />} />
         
         <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
