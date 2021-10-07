import React from "react";
import { FaqItem } from "../../model/faqItem";
import down from "../../resources/icon/down.svg"
function Faq(prop: { item: FaqItem, active: number, setActive: any }) {
    const handleDetails = (event: any) => {
        event.preventDefault();
        prop.setActive(parseInt(prop.item.id))
    }

    const renderItem = (item: FaqItem) => {
        if (item.enabled) {
            return (
                <div>
                    <details onClick={handleDetails} open={prop.active === parseInt(item.id) ? true : false}>
                        <summary className="faq__question">
                            <div className="faq__question__container">
                                <h4 >{item.title}</h4>
                                <div>
                                    <img src={down} alt="" />
                                </div>
                            </div>
                        </summary>
                        <p className="faq__body">
                            {item.description}
                        </p>
                    </details>
                    <hr />
                </div >
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