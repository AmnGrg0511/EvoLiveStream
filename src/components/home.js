import { ImDisplay } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './../styles/home.css'
import How from './how';
import Partners from './partners';
function Home() {
  return (
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
        <div className="gfm-2">
          <div className="gfsub">
            <img src="./images/featured.png" className="featureimg"></img>
            <h2 className="kf">Evo’s live streaming platform works great for</h2>
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
      </div>
      <div className="how">
        <div className="how-sub">
          <How imgurl="./images/live-stream.png" heading="Create" content="Byte-sized short videos and Livestream shopping sessions that require no app download to engage more customers" />
          <How imgurl="./images/online-shopping.png" heading="Go Live Shopping" content="Interact in real-time, generate leads, and retarget audience using Text + Chat + WhatsApp + SMS + Voice to convert more customers" />
          <How imgurl="./images/sell.png" heading="Sell" content="Sell more with Live Shopping by providing in-video checkouts or redirect them to any external web/product page" />
        </div>
        <Link to=""><button className="how-b">GET STARTED</button></Link>
      </div>
      <div className="Technologypartners">
      <h2 style={{textAlign:'center'}}>TECHNOLOGY PARTNERS</h2>
      <Partners />
      <Partners />
      </div>
    </>
  )
}
export default Home;