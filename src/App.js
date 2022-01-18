import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Estado from "./components/Estado";

const nombre = "Isaías";
const id = 23;
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
const miObjeto = {
  nombre: "Isaías",
  correo: "ifernandez@ieshlanz.es",
};
function App() {
  return (
    <>
      <div className="App App-header">
        <Componente meses={meses} objeto={miObjeto} />
        <Estado />
      </div>
    </>
  );
}

export default App;
