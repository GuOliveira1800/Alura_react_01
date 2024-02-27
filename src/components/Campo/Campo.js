import './Campo.css';

export const Campo = (props) =>{
    
    const metodoDeConcatenacao = `${props.place}...`;

    const aoDigitado = (evento) =>{
        props.aoAltera(evento.target.value)
    }

    return (
        <div 
            className={`campo campo-${(props.type === undefined ? 'text' : props.type)}`}
        >
            <label>{props.label}</label>
            <input
                type={(props.type === undefined ? 'text' : props.type)}
                onChange={aoDigitado}
                value={props.valor}
                name={props.nome}
                required={props.required}
                placeholder={metodoDeConcatenacao}/>
        </div>
    )

}