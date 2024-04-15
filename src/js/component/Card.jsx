import React from "react";

export const Cards = () => {
  return(
    <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.4geeks.com">4geeks</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Testeando Cards</h5>
    <p className="card-text">Supercalifragilisticoespilaidoso</p>
    <a href="www.google.es" className="btn btn-primary">Go to google</a>
  </div>
</div>
  )
}