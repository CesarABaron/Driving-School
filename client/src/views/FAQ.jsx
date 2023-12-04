import React from 'react'


const FAQ = () => {
    return (
    <div className="container">
        <h1 className="text-center mt-5 mb-4">Preguntas Frecuentes</h1>
        <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <p
                className="accordion-button collapsed no-outline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                ¿Pregunta 1?
            </p>
            </h2>
            <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
            >
            <div className="accordion-body">
                Respuesta a la pregunta 1.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <p
                className="accordion-button collapsed no-outline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
            >
                ¿Pregunta 2?
            </p>
            </h2>
            <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
            >
            <div className="accordion-body">
                Respuesta a la pregunta 2.
            </div>
            </div>
        </div>
        {/* Agrega más preguntas y respuestas si es necesario */}
        </div>
    </div>
    );
};

export default FAQ
