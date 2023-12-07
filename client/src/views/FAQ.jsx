import React, { useEffect } from 'react'
import FAQCard from "../components/FAQCard/FAQCard"
import { useDispatch, useSelector } from 'react-redux';
import { getFAQS } from '../Redux/Actions/faqsActions';


const FAQ = () => {
    const dispatch = useDispatch()
    const faqs = useSelector((state)=>state?.faqs)
    useEffect(()=>{
        dispatch(getFAQS())
    },[])
    return (
    <div className="container">
        <h1 className="text-center mt-5 mb-4">Preguntas Frecuentes</h1>
        <div className="accordion" id="faqAccordion">
        {
        faqs?.map(({id, question, answer})=> (
            <FAQCard
            id={id}
            question={question}
            answer={answer}
            />
            ))
        }
        </div>
    </div>
    );
};

export default FAQ
