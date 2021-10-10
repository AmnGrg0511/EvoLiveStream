import './../styles/pricecard.css'
function Pricecard(props) {
    const pricemy = () => {
        if (props.mory == "monthly")
            return <span className="value">30</span>
        else
            return <span className="value">20</span>
    }
    return (
        <>
            <div className="pricecard-main">
                <div>
                    <div className="pricecard-img">
                        <img src={props.imgurl} className="priceimg"></img>
                    </div>
                    <div className="pricecard-header">
                        <div className="price-free">
                            <h2 className="free">
                                {props.heading}
                            </h2>
                        </div>
                    </div>
                    <div className="cost">
                        <span className="currency">$</span>
                        {
                            pricemy()
                        }
                        <span className="duration">mo</span>
                    </div>
                </div>
                <div>
                    <div className="button-main">
                        <button className="pricecard-button">{props.button}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricecard;