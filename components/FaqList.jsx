"use client";

import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";


const FaqList = ({ data }) => {

    const faqs_list = data.faqs_list;

    const [activeIndex, setActiveIndex] = useState(null);

    const handleQuestionClick = (e, index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <div className="faqs-list">
            {faqs_list.map((faq, index) => (
                <div key={index} className={`faq ${activeIndex === index ? "active" : ""}`}>
                    <div
                        className="faq-question"
                        onClick={(e) => handleQuestionClick(e, index)}
                    >
                        <p className="faq-question-link">{faq.question}</p>
                        <div className="icon-wrapper">
                            <MdKeyboardArrowUp />
                        </div>
                    </div>
                    <div className="faq-answer">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FaqList