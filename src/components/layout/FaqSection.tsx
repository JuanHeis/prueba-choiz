import React, { useContext } from "react"
import Faq from "./Faq"
import Context from "../../context/context"
function FaqSection() {

    const context: any = useContext(Context)

    return (
        <section id="frequentlyAskedQuestion" className="faq">
            <div className="wrapperSection">
                <h2 className="faq__tittle">
                    Preguntas frecuentes
                </h2>
                {
                    context.value.faq.map((afaq: any) => {
                        return (<Faq value={afaq} />)
                    })
                }
            </div>
        </section>
    )
}

export default FaqSection