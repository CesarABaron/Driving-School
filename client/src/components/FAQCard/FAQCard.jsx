import React from 'react'

const FAQCard = ({id ,question, answer}) => {
  return (
        <div className="accordion-item no-outline">
            <h2 className="accordion-header no-outline" id={"heading"+id}>
            <p
                className="accordion-button collapsed no-outline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne"+id}
                aria-expanded="true"
                aria-controls={"collapseOne"+id}
            >
                {question}
            </p>
            </h2>
            <div
            id={"collapseOne"+id}
            className="accordion-collapse collapse no-outline"
            aria-labelledby={"heading"+id}
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
