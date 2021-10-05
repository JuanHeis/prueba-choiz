import React from "react";

function Faq(prop: { value: any }) {
    console.log(prop.value)
    return (<React.Fragment>
        <div className="faq__container">

            <details>
                <summary>
                    <h4 className="faq__question">{prop.value.title}</h4>
                </summary>
                <p className="faq__body">

                    {prop.value.description}
                </p>
            </details>
            <hr />
        </div>
    </React.Fragment>)
}

export default Faq