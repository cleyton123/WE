import React from 'react';
import {Link} from 'react-router-dom';

function Home (){

   return (
   <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Home</h1>
        <p>Bem vindo a tela de Home</p>
        <Link to={"/About"}>About</Link>
   </div>
   );
}
export default Home;