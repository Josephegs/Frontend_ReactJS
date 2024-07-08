import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function ItemDoCarrinho({nomeDoItem, descricaoDoItem}) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <h1>
        Item: {nomeDoItem}
      </h1>
      <h4>
        Descrição do Item: {descricaoDoItem}
      </h4>
      <p>Quantidade: {quantidade} </p>
      <button 
        onClick={
            () => setQuantidade(quantidade + 1)
            }
      > Adicionar </button>
      <button onClick={
        () => setQuantidade(quantidade - 1)
      }
      > Remover </button>
    </>
  )
}


function Saudacao({nome}) {
  return (
    <h1>
      Olá, {nome}
    </h1>
  )
}

function OceanApp() {
  return (
    <div>
      <h1> App Ocean</h1>
    </div>
  )
}

function App() {

  let item1 = "X";
  let item2 = "Y";

  return (
    <div className="1App">
      <header className="App-header">
        <h1>Meu primeiro projeto react</h1>
        <ItemDoCarrinho nomeDoItem={item1} descricaoDoItem="testando"  />
        <ItemDoCarrinho nomeDoItem={item2} descricaoDoItem="retestando"  />
      </header>
      
    </div>
  );
}

export default App;
