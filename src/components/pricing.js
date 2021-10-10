import './../styles/pricing.css'
import Monthyear from './monthyear';
import Pricecard from './pricecard';
import {useState} from 'react';
import Frequentlyaq from './frequentlyaq';
function Pricing() {
   const [mory,smory]=useState("monthly");
    return (
      <>
        <Monthyear smory={smory}/>
        <div className="pricing-main">
          <Pricecard imgurl={"./images/free.png"} heading="FREE" mory={mory} button="SIGN UP"/>
          <Pricecard imgurl={"./images/teamwork.png"} heading="TEAM" mory={mory} button="BUY NOW"/>
          <Pricecard imgurl={"./images/profit.png"} heading="BUSSINESS" mory={mory} button="BUY NOW"/>
          <Pricecard imgurl={"./images/enterprise.png"} heading="ENTERPRISE" mory={mory} button="CONTACT SALES"/>
        </div> 
        <div className="faq">
        <div className="faqt-div">
        <h2 className="faqt">Frequently Asked Questions</h2>
        </div>
        <div className="faq-top">
        <Frequentlyaq />
        <Frequentlyaq />
        <Frequentlyaq />
        </div>
        </div>
      </>
    );
  }
  
  export default Pricing;
  