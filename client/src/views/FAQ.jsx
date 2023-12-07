import React from 'react'
import FAQCard from "../components/FAQCard/FAQCard"
import { useSelector } from 'react-redux';


const FAQ = () => {

    const faq = useSelector((state)=>state.faq)

    return (
    <div className="container">
        <h1 className="text-center mt-5 mb-4">Preguntas Frecuentes</h1>
        <div className="accordion" id="faqAccordion">
        {
        faq.map(({question, asnwer})=> (
            <FAQCard
            question={question}
            asnwer={asnwer}
            />
            ))
        }
        </div>
    </div>
    );
};

export default FAQ
