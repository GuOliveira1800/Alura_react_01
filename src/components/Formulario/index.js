import { useState } from "react";
import Botao from "../Botao";
import CampoText from "../CampoText";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = (props) =>{

    const[nome,setNome] = useState('');
    const[cargo,setCargo] = useState('');
    const[endereco,setEndereco] = useState('');
    const[timeNome,setTime] = useState('');

    const Salva = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            endereco,
            timeNome
        });
        setNome('');
        setCargo('');
        setEndereco('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={Salva}>
                <h2>Preencha os dados</h2>
                <CampoText 
                    valor={nome} 
                    aoAltera={valor => setNome(valor)} 
                    nome="nome" required={true} 
                    label="Nome" 
                    place="Nome"
                />
                <CampoText 
                    valor={cargo} 
                    aoAltera={valor => setCargo(valor)} 
                    nome="cargo" 
                    required={true} 
                    label="Cargo" 
                    place="Cargo"
                />
                <CampoText 
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
        </section>
    )
}

export default Formulario;