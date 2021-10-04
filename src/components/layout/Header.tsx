import React from "react";
import logoChoiz from "../../resources/icon/choizLogo.svg"
function Header() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <header>
                    <div className="">
                        <img src={logoChoiz} alt="Choiz imagotipo" />
                    </div>
                    <ul>
                        <li className="navbar__item">Tratamientos</li>
                        <li className="navbar__item">Consulta online</li>
                        <li className="navbar__item">Quiénes somos</li>
                        <li className="navbar__item">Preguntas frecuentes</li>
                        <li className="navbar__item">Contacto</li>
                    </ul>
                    <button className="button--secondary">¿Tenés dudas?</button>
                </header>
            </div>
           
        </React.Fragment>
    )

}

export default Header