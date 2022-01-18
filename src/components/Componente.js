import React, { Component } from "react";

/* 
Hay dos formas de crear un componente:
- componente de Clase.
- componente de función.
*/
// Componente de clases

class Componente extends Component {
  constructor(props) {
    super(props);
    this.nombre = props.nombre;
    this.meses = props.meses;
    this.objeto = props.objeto;
  }
  render() {
    return (
      <>
        <h1> Mi primer componente</h1>
        <ol>
          {this.meses.map((mes, index) => (
            <li key={index}>{mes}</li>
          ))}
        </ol>
      </>
    );
  }
}

// componente funcional
/*
function Componente() {
  return (<h1> Mi primer componente funcional</h1>);
}
*/
/*
const Componente = (props) => (
  <>
    <h1> Mi primer componente</h1>
    <ol>
      {props.meses.map((mes, index) => (
        <li key={index}>{mes}</li>
      ))}
    </ol>
  </>
);
*/

export default Componente;
