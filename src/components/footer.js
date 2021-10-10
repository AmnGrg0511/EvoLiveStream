import './../styles/footer.css'
import Footersub from './footersub.js';
import {Link} from 'react-router-dom'
import {ImHeart} from 'react-icons/im'
import { IconContext } from 'react-icons/lib';
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillDribbbleSquare} from 'react-icons/ai'
import {AiFillBehanceSquare} from 'react-icons/ai'
function Footer(){
    const empty=()=>{
        let r=document.getElementsByClassName('email')[0];
        r.setAttribute('placeholder',"");
    }
    const full=()=>{
        let r=document.getElementsByClassName('email')[0];
        r.setAttribute('placeholder',"Your Email Address");
    }
    return(
        <>
        <div className="Footer-main">
           <div className="Footer-container">
               <div className="Footer-row">
                  <Footersub heading="Top Products" link1="Managed Website" link2="Manage Reputation" link3="Power Tools" link4="Marketing Service"/>
                  <Footersub heading="Quick Links" link1="Jobs" link2="Brand Assets" link3="Investor Relations" link4="Terms of Service"/>
                  <Footersub heading="Features" link1="Jobs" link2="Brand Assets" link3="Investor Relations" link4="Terms of Service"/>
                  <Footersub heading="Resources" link1="Guides" link2="Research" link3="Experts" link4="Agencies"/>
                  <div className="footersub-main2">
					<h4 className="fsh">Newsletter</h4>
					<p style={{marginTop:"0px",fontSize:"15px",color:"#797979"}}>You can trust us. we only send promo offers,</p>
					<div className="ff">
						<form target="_blank" className="fform">
                            <span>
							<input name="EMAIL" placeholder="Your Email Address"  required type="email" className="email" onFocus={empty} onBlur={full}/>
                            </span>
                            <span>
							<button className="subscribe">subscribe</button>
                            </span>
						</form>
					</div>
				</div>
               </div>
           </div>
           <div className="footercr">
				<p className="copyright">Copyright ©2021 All rights reserved | This template is made with <IconContext.Provider value={{className:"heart"}}><ImHeart /></IconContext.Provider> by <Link to="" className="footerlinksb" style={{color:"white"}}>Colorlib</Link></p>
				<div className="slinks">
					<Link to="" className="footerlinksb"><IconContext.Provider value={{className:"handles"}}><AiFillFacebook /></IconContext.Provider></Link>
					<Link to="" className="footerlinksb"><IconContext.Provider value={{className:"handles"}}><AiFillTwitterSquare /></IconContext.Provider></Link>
					<Link to="" className="footerlinksb"><IconContext.Provider value={{className:"handles"}}><AiFillDribbbleSquare/></IconContext.Provider></Link>
					<Link to="" className="footerlinksb"><IconContext.Provider value={{className:"handles"}}><AiFillBehanceSquare /></IconContext.Provider></Link>
				</div>
			</div>
        </div>
        </>
    )
}
export default Footer;