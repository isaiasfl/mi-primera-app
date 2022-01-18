import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Estado from "./components/Estado";
import TarjetaFruta from "./components/TarjetaFruta";
import ImagenesAleatorias from "./components/ImagenesAleatorias";

const nombre = "Isaías";
const id = 23;
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
const preciofijo = 7.34;
const miObjeto = {
  nombre: "Isaías",
  correo: "ifernandez@ieshlanz.es",
};
function App() {
  return (
    <>
      <div className="App App-header">
        {/* <Componente meses={meses} objeto={miObjeto.correo} /> 
        <Estado />
        */}
        <ImagenesAleatorias nombre="Luisa" size="small" />
        <ImagenesAleatorias nombre="Luisa" size="" numero="2" />
        <ImagenesAleatorias nombre="Luisa" size="large" numero="3" />
        <TarjetaFruta nombreFruta="Fresas" precio="2,45" />
      </div>
    </>
  );
}

export default App;
