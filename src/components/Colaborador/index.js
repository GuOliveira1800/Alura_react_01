import './Colaborador.css';
import { IoMdCloseCircle } from "react-icons/io";


const Colaborador = (props) =>{
    return( /*https://github.com/GuOliveira1800.png*/        
        <div className='colaborador' >
            
            <IoMdCloseCircle size={25} className='deletar' onClick={props.aoDeletar}/>
            
            <div className='cabecalho' style={{backgroundColor: props.corPrimario}}>
                <img src={props.endereco} alt='Meu git' />
            </div>
            <div className='rodape' style={{backgroundColor: props.corSecundaria}}>
                <h4> {props.nome} </h4>
                <h5> {props.timeNome} </h5>
            </div>
        </div>
    )
}
export default Colaborador;