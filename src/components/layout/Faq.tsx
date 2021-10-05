import React from "react";
import { FaqItem } from "../../model/faqItem";

function Faq(prop: { item: FaqItem }) {
  

    const renderItem = (item: FaqItem) => {
        if (item.enabled) {
            return (
                <div>
                    <details>
                        <summary>
                            <h4 className="faq__question">{item.title}</h4>
                        </summary>
                        <p className="faq__body">
                            {item.description}
                        </p>
                    </details>
                    <hr />
                </div>
            )
        }
    }
    return (<React.Fragment>
        <div className="faq__container">
            {
                renderItem(prop.item)
            }
        </div>
    </React.Fragment>)
}

export default Faq