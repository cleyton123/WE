const opcoes = ['Opção 1', 'Opção 2', 'Opção 3','opção 4','opção 5'];

function DOM() {
    return (
      <div>
        <h1>Selecione uma opção:</h1>
        <select>
          {opcoes.map((opcao, index) => (
            <option key={index} value={opcao}>{opcao}</option>
          ))}
        </select>
      </div>
    );
  }
  export default DOM;