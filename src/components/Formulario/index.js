import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) =>{

    const[nomeTime,setNomeTime] = useState('');
    const[corTime,setCorTime] = useState('#ffffff');

    const[id,setId] = useState(uuidv4());
    const[nome,setNome] = useState('');
    const[cargo,setCargo] = useState('');
    const[endereco,setEndereco] = useState('');
    const[timeNome,setTime] = useState('');

    const Salva = (evento) =>{
        evento.preventDefault();
        
        console.log(id);
        props.aoColaboradorCadastrado({
            id,
            nome,
            cargo,
            endereco,
            timeNome
        });
        setNome('');
        setCargo('');
        setEndereco('');
        setTime('');

        setId(uuidv4());
    }
    
    const SalvaTime = (evento) =>{
        evento.preventDefault();
        
        console.log(id);
        props.aoNovoTime({
            id,
            nome: nomeTime,
            cor: corTime
        });
        setNomeTime('');
        setCorTime('#ffffff');

        setId(uuidv4());
    }

    

    return (
        <section className="formulario">
            <form onSubmit={Salva}>
                <h2>Preencha os dados</h2>
                <Campo 
                    valor={nome} 
                    aoAltera={valor => setNome(valor)} 
                    nome="nome" required={true} 
                    label="Nome" 
                    place="Nome"
                />
                <Campo 
                    valor={cargo} 
                    aoAltera={valor => setCargo(valor)} 
                    nome="cargo" 
                    required={true} 
                    label="Cargo" 
                    place="Cargo"
                />
                <Campo 
                    valor={endereco} 
                    aoAltera={valor => setEndereco(valor)} 
                    nome="endereco" 
                    required={true} 
                    label="Imagem" 
                    place="Endereço da imagem"/>
                <ListaSuspensa 
                    valor={timeNome} 
                    aoAltera={valor => setTime(valor)} 
                    nome="time" 
                    required={true} 
                    label="Lista Cargos" 
                    itens={props.times} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={SalvaTime}>
                <h2>Preencha os dados para o time</h2>
                <Campo 
                    valor={nomeTime} 
                    aoAltera={valor => setNomeTime(valor)} 
                    nome="nome" 
                    required={true} 
                    label="Nome" 
                    place="Nome"
                />
                <Campo 
                    type="color"
                    valor={corTime} 
                    aoAltera={valor => setCorTime(valor)} 
                    nome="nome" 
                    required={true} 
                    label="Nome" 
                    place="Nome"
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;