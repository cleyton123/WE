import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';

const CadastroForm = ({ items }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState('');

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
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
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
      console.log('Cadastro enviado:', formData);
      setFormData({
        nome: '',
        email: '',
        senha: '',
      });
    }
  };

  return (
    <div>
      <h2 className="cad">Cadastro</h2>
      {enviado && <p className="sucesso">Cadastro realizado com sucesso!</p>}
      {erroEnvio && <p className="erro">{erroEnvio}</p>}
      <form action='http://localhost:3000/' method='POST' onSubmit={handleSubmit} className="form">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={erros.nome ? 'erro' : ''}
          />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={erros.email ? 'erro' : ''}
          />
          {erros.email && <span className="erro">{erros.email}</span>}
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className={erros.senha ? 'erro' : ''}
          />
          {erros.senha && <span className="erro">{erros.senha}</span>}
        </label>
        <button type="submit">Enviar</button>
       
      <Link to={"/"}>Home</Link>
    
      </form>
   
     
    </div>
  );
};

export default CadastroForm;
