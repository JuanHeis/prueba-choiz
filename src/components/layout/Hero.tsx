import React from "react";
import character from "../../resources/img/character.svg"
import Header from "./Header";
import { useState } from "react";
import Modal from "../general/Modal";
function Hero() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <React.Fragment>
            <Modal open={open} closeModal={setOpen} />
            <div className="hero">
                <div className="hero__elipse">

                </div>
                <div className="wrapper">
                    <div className="hero__container">
                        <h1>
                            Cuidarte siempre te cuesta menos con Choiz
                        </h1>
                        <img className="hero__character" src={character} alt="" />

                    </div>
                </div>
            </div>
            <div className="hero__bottom">

                <div className="wrapper">
                    <div className="hero__bottom__container">

                        <p>
                            Las mejores expertas en ginecología del país están a tu disposición para conversar sin que tengas que salir de tu casa.
                        </p>

                        <button onClick={handleClick}>
                            Agendar una consulta
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Hero


