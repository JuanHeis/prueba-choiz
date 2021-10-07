import React from "react";
import one from "../../resources/img/1.svg";
import two from "../../resources/img/2.svg";
import three from "../../resources/img/3.svg";
import rectangle from "../../resources/img/rectangle.svg";
function Modal(props: { open: boolean, closeModal: any }) {

  const handleClick = () => {
    props.closeModal()
  }
  if (!props.open) {
    return null
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close">
          <span onClick={handleClick}>X</span>
        </div>
        <h3>Paso a paso para la consulta remota</h3>
        <div className="modal__grid">
          <div className="modal__grid__img">
            <img src={one} alt="" />
            <img className="rect" src={rectangle} alt="" />
          </div>


          <div className="modal__grid__number">.1</div>
          <p className="modal__grid__p">
            Completás algunas preguntas breves y nos contás el motivo
            de la consulta.
          </p>
          <span className="modal__grid__span">
            Vamos a elegir la doctora adecuada según su especialidad y tu necesidad.
          </span>
          <span className="span__exception" />



          <div className="modal__grid__img">

            <img src={two} alt="" />
            <img className="rect" src={rectangle} alt="" />

          </div>
          <div className="modal__grid__number">.2</div>

          <p className="modal__grid__p">
            Te contactamos por y coordinamos el pago para reservar la fecha.
          </p>
          <span className="modal__grid__span">
            Si tenés Swiss Medical es GRATIS* y si no, podes pedir reintegro
          </span>

          <span className="span__exception">
            *Excepto para planes que requieren copago
          </span>

          <div className="modal__grid__img">
            <img src={three} alt="" />
          </div>
          <div className="modal__grid__number">.3</div>

          <p className="modal__grid__p">
            Tenés la videollamada con tu doctora, desde donde estés y sin límite de tiempo.
          </p>
          <span className="modal__grid__span">
            ¡Dura lo que vos necesites!
          </span>
          <span className="span__exception" />

        </div>
      </div>
    </div>
  )
}


export default Modal