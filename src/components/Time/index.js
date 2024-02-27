import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) =>{

    return(
        props.listaPessoa.length > 0 && 
        <section
            style={{
                backgroundColor: hexToRgba(props.times.cor,'0.6')
            }}
            className='time'
        >
            <input value={props.times.cor} onChange={evento => props.mudarCor(evento.target.value,props.times.id)} type='color' className='input-cor'/>
            <h3 style={{borderColor: props.times.cor}}>
                {props.times.nome}
            </h3>
            
            <div className='pessoa'>
                {
                    props.listaPessoa.map( (colaborador,indice) =>{
                        return(
                            <Colaborador
                                cor={props.times.cor}
                                key={indice}
                                colaborador={colaborador}
                                aoDeletar={props.aoDeletar}
                                aoFavoritar={props.aoFavoritar}
                            />
                        )
                    })
                }
            </div>

        </section>
    )

}



export default Time;