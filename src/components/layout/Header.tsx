import React from "react";
import logoChoiz from "../../resources/icon/choizLogo.svg"
function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <div className="">
            <img src={logoChoiz} alt="Choiz imagotipo" />
          </div>
          <ul>
            <li className="navbar__item"> <a href="">Tratamientos</a> </li>
            <li className="navbar__item"> <a href="">Consulta online</a> </li>
            <li className="navbar__item"> <a href="">Quiénes somos</a> </li>
            <li className="navbar__item"> <a href="">Preguntas frecuentes</a></li>
            <li className="navbar__item"><a href="">Contacto</a></li>
            <li className="navbar__item"><button className="button--secondary">¿Tenés dudas?</button></li>
          </ul>
        </div>
      </div>
    </header>
  )

}

export default Header