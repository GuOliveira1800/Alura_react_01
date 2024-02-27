import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [lista,setLista] = useState([]);

  const aoNovoColaborador = (colabodor) =>{
    //debugger
    setLista([...lista,colabodor])
  }

  const [ListaTimes,setListaTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Prog',
      cor: '#d9f7e9',
    },
    {
      id: uuidv4(),
      nome: 'Front',
      cor: '#e8f8ff',
    },
    {
      id: uuidv4(),
      nome: 'Back',
      cor: '#f0f8e2',
    },
    {
      id: uuidv4(),
      nome: 'Analise',
      cor: '#fde7e8',
    },
    {
      id: uuidv4(),
      nome: 'Teste',
      cor: '#fae9f5',
    }
    
  ]);

  const aoNovoTime = (time) =>{
    //debugger
    console.log(time);
    setListaTimes([...ListaTimes,time])
  }

  const aoDeletar = (id) =>{
    console.log(id);
    setLista(lista.filter(pessoa => pessoa.id !== id));
  }

  function mudaCor(cor,id) {
    setListaTimes(ListaTimes.map(
      time => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }
    ))
  }

  function favoritar(id) {
    setLista(lista.map(
      pessoa => {
        if (pessoa.id === id) {
          pessoa.favorita = !pessoa.favorita
        }
        return pessoa;
      }
    ))
  }

  return (
    <div>
      <Banner

      />
      <Formulario 
        times ={ListaTimes.map(times => times.nome)}
        aoColaboradorCadastrado={colabodor => aoNovoColaborador(colabodor)}
        aoNovoTime = {time => aoNovoTime(time)}
      />      
      {
        ListaTimes.map((times,indice) =>{
          return (
            <Time 
              key={indice} 
              times={times}
              listaPessoa={lista.filter(colaborador => colaborador.timeNome === times.nome)}
              mudarCor={mudaCor}
              aoDeletar={aoDeletar}
              aoFavoritar={favoritar}
            />
          )
        })
      }
    </div>
  );
}

export default App;
