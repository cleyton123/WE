import React from 'react';
import ReactDOM from 'react-dom';
import GerenciamentoItens from './formulário cadastro/gerenciamento';
import DOM from './formulário cadastro/DOM/elementos';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";


ReactDOM.render(<GerenciamentoItens />, document.getElementById('root'));
function App () {
  return(
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/gerenciamento' element={<GerenciamentoItens/>}/>
       <Route path='/DOM' element={<DOM/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App;