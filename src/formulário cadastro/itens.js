import React from 'react';

const ListaItens = ({ itens }) => {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item.nome} - {item.quantidade}</li>
      ))}
    </ul>
  );
};

export default ListaItens;
