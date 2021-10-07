import React, { useContext, useState } from "react"
import Faq from "./Faq"
import Context from "../../context/context"
import { FaqItem } from "../../model/faqItem"
function FaqSection() {
    const [active, setActive] = useState(1)
    const context: any = useContext(Context)

    return (
        <section id="faq" className="faq">
            <div className="wrapperSection">
                <h2 className="faq__tittle">
                    Preguntas frecuentes
                </h2>
                {
                    context.value.faq.map((aFaq: FaqItem) => {
                        return (<Faq active={active} setActive={setActive} key={aFaq.id} item={aFaq} />)
                    })
                }
            </div>
        </section>
    )
}

export default FaqSection