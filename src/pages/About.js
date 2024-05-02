import React from "react";
import { Link } from "react-router-dom";

function About () {
    return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>About</h1>
        <h2>ToorRecife</h2>
        <p><strong>BEM-VINDO</strong></p>
        <p>O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turisticos,usado também como um guia sobre tudo que tem mais próximo <br />a ele, como restaurante, shopping etc, abrangindo toda a história de Recife, para assim ajudar a cidade a se desenvolver mais em relação á visita de turistas</p>
        <p><strong>Nomes da equipe : </strong>Cleyton,Italo e Elion</p>
        <p><strong>Link do repositório: </strong> https://github.com/cleyton123/web.git</p>
      
        <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/cadastro"}>Cadastro</Link>
      </div>
    </div>
    )
}
export default About;