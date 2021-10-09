import { ImDisplay } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './../styles/home.css'
function Home(){
    return(
        <>
        <div className="video-main">
        <video src="./images/Evointrovideo.mp4" className="video" autoPlay muted loop></video>
        <div className="video-content">
          <h1 className="vc-go">Go Live with Evo</h1>
          <h2 className="vc-l">LIVE STREAMING PLATFORM</h2>
          <Link><button className="gs">Get started</button></Link>
        </div>
        </div>
       <div className="tagline">
            <div className="th">
            <h1 className="thc">
            Level up your live video with reliable, high-quality streaming for your viewers everywhere.
            </h1>
            </div>
       </div>
       <div className="greatfeature-main">
            <div className="gfsub front">
                  <img src="./images/featured.png" className="featureimg"></img>
                   <h2>Evo’s live streaming platform works great for</h2>
            </div>
            <div className="points-sub"> 
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Performances and events</p>
                      </div>
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Webinars and classes</p>
                      </div>
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Community engagement</p>
                      </div>
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Company announcements</p>
                      </div>
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Product launches</p>
                      </div>
                      <div className="points-sub2">
                      <img src="./images/check.png" className="pointicon"></img>
                      <p className="points-f">Virtual conferences and panels</p>
                      </div>
                </div>
       </div>
        </>
    )
}
export default Home;