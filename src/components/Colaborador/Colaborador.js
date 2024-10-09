import { FaTrash } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  cargo,
  favorito,
  imagem,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }
  

  return (
    <div className="colaborador">
      <FaTrash size={25} className="deletar" onClick={() => aoDeletar(id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='favoritar'>
          {favorito ? (
            <AiFillHeart size={25} onClick={favoritar} color="red" />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
