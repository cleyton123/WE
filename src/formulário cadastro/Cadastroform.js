import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const CadastroForm = ({ onCadastro, items }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.nome.trim()) {
      newErrors.nome = 'Campo obrigatório';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Campo obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.senha.trim()) {
      newErrors.senha = 'Campo obrigatório';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    }
    setErros(newErrors);


    if (Object.keys(newErrors).length === 0) {
      
      setEnviado(true);
      onCadastro(formData);
     
      const newItem = { nome: formData.nome, email: formData.email, senha: formData.senha };
      items.push(newItem);
      
      setFormData({
        nome: '',
        email: '',
        senha: '',
      });
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      {enviado ? (
        <p>Cadastro enviado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            {erros.nome && <span>{erros.nome}</span>}
          </label>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {erros.email && <span>{erros.email}</span>}
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
            {erros.senha && <span>{erros.senha}</span>}
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
      <h2>Itens</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.nome} - {item.email} - {item.senha}</li>
        ))}
      </ul>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default CadastroForm;
