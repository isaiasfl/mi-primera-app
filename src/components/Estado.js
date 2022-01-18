import React, { Component } from "react";

/*
un componte se repinta si se cambia el estado.
Luego en el estado se debe de almacener lo que quiero
cambiar dinámicamente.
El estado en una clase se hace con this.state y es un objeto inmutable.
Sólo se puede modificar con un método especial llamado setState()
El estado está en la variable state.

*/
export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Componente Estado</h1>
        <h2>{this.setState({ contador: this.state.contador + 1 })}</h2>
      </>
    );
  }
}
