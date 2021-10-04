import React from "react";

import logoChoiz from "../../resources/icon/choizLogo.svg"

import facebook from "../../resources/icon/facebook.svg"
import mail from "../../resources/icon/mail.svg"
import instagram from "../../resources/icon/instagram.svg"
import whatsapp from "../../resources/icon/whatsapp.svg"
function Footer() {
    return (<React.Fragment>
        <footer>
            <div className="wrapper">
                <div className="footer__container">
                    <div className="footer__item footer__left">
                        <div className="">
                            <img src={logoChoiz} alt="Choiz imagotipo" />
                        </div>
                        <span>© XCALE HEALTH srl . Todos los derechos reservados.</span>
                    </div>
                    <div className="footer__item footer__rigth">
                        <span>¡Hablemos!</span>
                        <div className="footer__social">
                            <img src={instagram} alt="Instagram icon" />
                            <img src={facebook} alt="Facebook icon" />
                            <img src={whatsapp} alt="Whatsapp icon" />
                            <img src={mail} alt="Mail icon" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>)
}

export default Footer
