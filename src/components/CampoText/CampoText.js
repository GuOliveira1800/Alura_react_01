import './CampoText.css';

export const CampoText = (props) =>{
    
    const metodoDeConcatenacao = `${props.place}...`;

    const aoDigitado = (evento) =>{
        props.aoAltera(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input
                onChange={aoDigitado}
                value={props.valor}
                name={props.nome}
                required={props.required}
                placeholder={metodoDeConcatenacao}/>
        </div>
    )

}