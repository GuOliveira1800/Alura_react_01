import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{

    const aoDigitado = (evento) =>{
        props.aoAltera(evento.target.value)
    }

    return (
        <div className='ListaSuspensa'>
            <label> {props.label} </label>
            <select required={props.required} name={props.nome} onChange={aoDigitado} value={props.valor}>
                <option value={''}></option>
                {props.itens.map(
                    item=> {
                        return(
                            <option key={item}>
                                {item}
                            </option>
                        )
                    }
                )}
            </select>
        </div>
    )

}

export default ListaSuspensa;