import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ nome, cor, id, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  const estilo = {
    backgroundColor: hexToRgba(cor, "0.4"),
    backgroundImage: "url(/imagens/fundo.png)",
  };

  return colaboradores.length > 0 ? (
    <section className="time" style={estilo}>
      <input
        onChange={(evento) => mudarCor(evento.target.value, id)}
        value={cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: cor }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              id={colaborador.id}
              favorito={colaborador.favorito}
              corDeFundo={cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
