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
          <div>
            <div className="navbar__mobile">Menu</div>
            <ul>
              <li className="navbar__item"><a href="/#">Tratamientos</a> </li>
              <li className="navbar__item"><a href="/#consult">Consulta online</a> </li>
              <li className="navbar__item"><a href="/">Quiénes somos</a> </li>
              <li className="navbar__item"><a href="/#faq">Preguntas frecuentes</a></li>
              <li className="navbar__item"><a href="/#contact">Contacto</a></li>
              <li className="navbar__item"><button className="button--secondary">¿Tenés dudas?</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )

}

export default Header