import './Colaborador.css';
import { IoMdCloseCircle, AiFillHeart } from "react-icons/io";


const Colaborador = (props) =>{
    return( /*https://github.com/GuOliveira1800.png*/        
        <div className='colaborador' >
            
            <IoMdCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => {props.aoDeletar(props.colaborador.id)}}
            />
            
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.colaborador.endereco} alt='Meu git' />
            </div>
            <div className='rodape' style={{backgroundColor: 'white' }}>
                <h4> {props.colaborador.nome} </h4>
                <h5> {props.colaborador.timeNome} </h5>
                <div>
                    {
                        props.colaborador.favorito
                            ? 
                            : 

                    }
                </div>
            </div>
        </div>
    )
}
export default Colaborador;