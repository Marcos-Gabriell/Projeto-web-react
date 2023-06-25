import React, { useState } from 'react';
import './MyCadastro.css';

const MyCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [concordo, setConcordo] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConcordoChange = (event) => {
    setConcordo(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode implementar a lógica para enviar os dados para o servidor ou fazer outras ações necessárias

    // Resetar os campos após o cadastro
    setNome('');
    setEmail('');
    setConcordo(false);
  };

  return (
    <div className="form-container">
      <h2>Cadastre-se e fique informado sobre as oportunidades para inovar através dos incentivos fiscais e fomentos!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={nome} placeholder='Nome completo' onChange={handleNomeChange} />
        </label>
        <br />
        <label>
          <input type="email" value={email} placeholder='E-mail' onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          <input type="checkbox" checked={concordo} onChange={handleConcordoChange} />
          Concordo em receber comunicações.
        </label>
        <label>
          Ao informar meus dados, eu concordo com a Política de Privacidade.
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default MyCadastro;
