import React from "react";
import { Link } from "react-router-dom";

function About () {
    return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>About</h1>
        <p><strong>BEM-VINDO</strong></p>
        <p>O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turisticos.</p>
        <p><strong>Nomes da equipe : </strong>Cleyton,Italo e Elion</p>
        <p><strong>Link do repositório: </strong> https://github.com/cleyton123/web.git</p>
      
        <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/cadastro"}>CadastroForm</Link>
      </div>
    </div>
    )
}
export default About;