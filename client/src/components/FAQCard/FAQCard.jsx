import React from 'react'

const FAQCard = ({question, answer}) => {
  return (
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
                {question}
            </p>
            </h2>
            <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
            >
            <div className="accordion-body">
                {answer}
            </div>
            </div>
        </div>
  )
}

export default FAQCard
