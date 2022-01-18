import React, { useState } from "react";
import "./ImagenesAleatorias.css";

const ImagenesAleatorias = (props) => {
  // parte funcional de mi componente
  const [enabled, setEnabled] = useState(true);

  const numero = props.numero;
  const src = "https://randomuser.me/api/portraits/women/" + numero + ".jpg";
  let classNameImg = enabled ? "" : "disabled";
  //let classNamePicture = props.size === "small" ? "is-small" : "";
  let classNamePicture = "";
  if (props.size === "small") {
    classNamePicture = "is-small";
  } else if (props.size === "large") {
    classNamePicture = "is-large";
  }
  // parte de pintado
  return (
    <picture className={classNamePicture}>
      <img
        src={src}
        alt="women"
        className={classNameImg}
        onClick={() => setEnabled(!enabled)}
      />
      <h3>{props.nombre}</h3>
    </picture>
  );
};

ImagenesAleatorias.defaultProps = {
  numero: 18,
};

export default ImagenesAleatorias;
