import React from "react"
import Faq from "./Faq"

function FaqSection() {

    return (<React.Fragment>
        <section id="frequentlyAskedQuestion" className="faq">
            <div className="wrapperSection">
                <h2 className="faq__tittle">
                    Preguntas frecuentes
                </h2>
                <Faq></Faq>
                <Faq></Faq>
                <Faq></Faq>
                <Faq></Faq>
            </div>
        </section>
    </React.Fragment>)
}

export default FaqSection