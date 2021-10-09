import './../styles/footersub.css'
import { Link } from 'react-router-dom';
function Footersub(props){
    return(
        <>
           <div className="footersub-main">
					<h4 className="fsh">{props.heading}</h4>
					<ul>
						<li><Link to="" className="footerlink">{props.link1}</Link></li>
						<li><Link to="" className="footerlink">{props.link2}</Link></li>
						<li><Link to="" className="footerlink">{props.link3}</Link></li>
						<li><Link to="" className="footerlink">{props.link4}</Link></li>
					</ul>
			</div>
        </>
    )
}
export default Footersub ;