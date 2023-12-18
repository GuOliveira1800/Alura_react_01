import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [lista,setLista] = useState([]);

  const aoNovoColaborador = (colabodor) =>{
    //debugger
    setLista([...lista,colabodor])
  }

  const ListaTimes = [
    {
      nome: 'Prog',
      corPrimario: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front',
      corPrimario: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Back',
      corPrimario: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Analise',
      corPrimario: '#e06869',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Teste',
      corPrimario: '#db6ebf',
      corSecundaria: '#fae9f5',
    }
    
  ]

  const aoDeletar = () =>{
    
  }

  return (
    <div>
      <Banner

      />
      <Formulario 
        times ={ListaTimes.map(times => times.nome)}
        aoColaboradorCadastrado={colabodor => aoNovoColaborador(colabodor)}
      />      
      {
        ListaTimes.map((times,indice) =>{
          return (
            <Time 
              key={indice} 
              nome={times.nome} 
              corPrimario={times.corPrimario} 
              corSecundaria={times.corSecundaria}
              listaPessoa={lista.filter(colaborador => colaborador.timeNome === times.nome)}
              aoDeletar={aoDeletar}
            />
          )
        })
      }
    </div>
  );
}

export default App;
