import './Colaborador.css'

const Colaborador = ( {nome, cargo, imagem, time} ) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'> 
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador