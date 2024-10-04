import "./Time.css";

const Time = (props) => {
  const estilo = {
    backgroundColor: props.corSecundaria,
  };

  return (
    <section className="time" style={estilo}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
