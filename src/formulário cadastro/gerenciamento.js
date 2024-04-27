import React, { useState } from 'react';
import Cadastro from './cadastro';
import Lista from './itens';

const GerenciamentoItens = () => {
  const [itens, setItens] = useState([]);

  const handleAddItem = (item) => {
    setItens([...itens, item]);
  };

  return (
    <div>
      <h2>Cadastro de Itens</h2>
      <Cadastro onAddItem={handleAddItem} />
      <h2>Itens Cadastrados</h2>
      <Lista itens={itens} />
    </div>
  );
};

export default GerenciamentoItens;
