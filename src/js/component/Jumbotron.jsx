import React from "react";
import { Button } from "./Button.jsx";

const Jumbotron = () => {
const ColorText = 'text-warning bg-success'
    return (
<div className="jumbotron">
  <h1 className={ColorText}>Intro de React</h1>
  <p className="lead">React es una libería front-end para Javascript (como Boostrap para HTML). Básicamente divide 
  y encapsula todo el sitio web en componentes más pequeños.</p>
  <hr className="my-4"/>
  <p>React.js separa tu código en pequeñas partes llamadas Componentes que pueden crearse/definirse como class o como function. Cada componente es como una aplicación
         de React más pequeña que tiene su propia lógica y tiene un propósito final que es renderizar algo</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="https://4geeks.com/es/syllabus/spain-fs-pt-65/read/learn-react-js-tutorial" role="button">Sigue investigando</a>
  </p>
  <Button />
</div>
    )
}

export default Jumbotron