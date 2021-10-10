import './../styles/frequentlyaq.css'
import { useState } from 'react';
function Frequentlyaq() {
    const [d, sd] = useState("answer");
    const [d2, sd2] = useState("faq-dd");
    const ans = () => {
        if (d == "answer") {
            sd("answer2");
            sd2("faq-dd2");
        }
        else {
            sd2("faq-dd");
            sd("answer");
        }
    }
    return (
        <>
            <div className="faq-main">
                <div className="question">
                    <p className="quuestion-sub">What does "Max # of APIs" mean?</p>
                    <div className={d2} onClick={ans}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" alt="Caret icon for questions." data-icon="caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropdown-ic"><path fill="#F99D78" d="M12,17c-0.207,0-0.413-0.063-0.588-0.191l-11-8l1.177-1.617L12,14.764l10.412-7.572l1.177,1.617l-11,8 C12.413,16.937,12.207,17,12,17z"></path></svg>
                    </div>
                </div>
                <div className={d}>
                    <p>The "max number of APIs" refers to the number of APIs you design in Postman. It does NOT refer to how many APIs your company uses. You can also check our blog post for a more detailed answer to this question.</p>
                </div>
                <hr />
            </div>
        </>
    )
}
export default Frequentlyaq;