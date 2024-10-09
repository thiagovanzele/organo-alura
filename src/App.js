import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Front-End",
      cor: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      cor: "#F0F8E2",
    },
    {
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      cor: "#FAE5F5",
    },
    {
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function mudarCorDoTime(cor, nomeTime) {
    setTimes(times.map((time) => {
      if (time.nome === nomeTime) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function deletarColaborador() {
    console.log('Deletando colaborador');
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map((time) => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
