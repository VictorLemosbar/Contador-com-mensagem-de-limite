import { useState, useEffect } from "react";

function MyApp() {
  const [mensagem, setMensagem] = useState("Boa");
  const [contadorCurtidas, setContadorCurtidas] = useState(0);

  useEffect(() => {
    document.title = `Likes: ${contadorCurtidas}`;
  }, [contadorCurtidas]); 


  useEffect(() => {
    if (contadorCurtidas > 5) {
      setMensagem("Bombando");
    } else {
      setMensagem("Boa");
    }
  }, [contadorCurtidas]); 

  function handleClick() {
    setContadorCurtidas(valorAtual => valorAtual + 1);
  }

  return (
    <div>
      <div>{mensagem}</div>
      <button onClick={handleClick}>Curtir</button>
    </div>
  );
}

export default MyApp;