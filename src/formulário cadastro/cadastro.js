import React, { useState } from 'react';

const CadastroItem = ({ onAddItem }) => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !quantidade) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    onAddItem({ nome, quantidade: parseInt(quantidade) });
    setNome('');
    setQuantidade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do item"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default CadastroItem;
