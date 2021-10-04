import React from "react";

function Faq() {
    return (<React.Fragment>
        <div className="faq__container">
            <details>
                <summary>
                    <h4 className="faq__question">Pregunta?</h4>
                </summary>
                <p className="faq__body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias eius exercitationem illum commodi consequuntur quia earum dolorum esse laboriosam inventore animi voluptatum assumenda, voluptatibus eveniet repudiandae et accusantium repellat.
                </p>
            </details>
            <hr />
        </div>
    </React.Fragment>)
}

export default Faq