import { useLocation } from "react-router-dom";
import ButtonNav from "@components/ButtonNav";

// TODO: convertir ModeSwitch en un toggle

const ModeSwitch = () => {
  /* TODO: codigo duplicado con @components/NavBar - extraer a un custom hook */
  /* tomar los params de la ruta actual (location) */
  const location = useLocation();
  /* tomar el modo ("vendedor" | "comprador") del primer param de location después de "/" */
  const modo = location.pathname.split("/")[1];
  /* tomar la subruta actual del segundo param de location */
  const pagina = location.pathname.split("/")[2];
  const isComprador = modo === "comprador";

  /* determinar etiqueta y ruta destino para cambiar */
  const modoDestino = isComprador ? "vendedor" : "comprador";
  const textoBoton = `Cambiar a modo ${isComprador ? "Vendedor" : "Comprador"}`;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <p>Modo: <span className="font-bold uppercase">{modo}</span></p>
      <ButtonNav text={textoBoton} to={`/${modoDestino}/${pagina}`} />
    </div>
  )
}

export default ModeSwitch;