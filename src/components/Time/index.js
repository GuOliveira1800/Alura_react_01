import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) =>{

    return(
        props.listaPessoa.length > 0 && 
        <section
            style={{
                backgroundColor: props.corSecundaria
            }}
            className='time'
        >
            <input type='color' className='input-cor'/>
            <h3 style={{borderColor: props.corPrimario}}>
                {props.nome}
            </h3>
            
            <div className='pessoa'>
                {
                    props.listaPessoa.map( (colaborador,indice) =>{
                        return(
                            <Colaborador
                                corPrimario={props.corPrimario}
                                corSecundaria={props.corSecundaria}
                                key={indice}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                endereco={colaborador.endereco}
                                timeNome={colaborador.timeNome}
                                aoDeletar={props.aoDeletar}
                            />
                        )
                    })
                }
            </div>

        </section>
    )

}



export default Time;