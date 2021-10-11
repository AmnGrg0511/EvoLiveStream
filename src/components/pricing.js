import "./../styles/pricing.css";
import Monthyear from "./monthyear";
import Pricecard from "./pricecard";
import { useState } from "react";
import Frequentlyaq from "./frequentlyaq";
import faqs from "../data/faqs.json";
import prices from "../data/prices.json";
const Pricing = () => {
  const [period, setPeriod] = useState("monthly");
  return (
    <>
      <Monthyear {...{ period, setPeriod }} />
      <div className="pricing-main">
        {prices.map((price) => (
          <Pricecard {...price} period={period} />
        ))}
      </div>
      <div className="faq">
        <div className="faqt-div">
          <h2 className="faqt">Frequently Asked Questions</h2>
        </div>
        <div className="faq-top">
          {faqs.map((faq) => (
            <Frequentlyaq {...faq} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
