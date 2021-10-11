import "./../styles/pricecard.css";
const Pricecard = ({ imgurl, heading, button, price, period }) => {
  return (
    <>
      <div className="pricecard-main">
        <div>
          <div className="pricecard-img">
            <img src={imgurl} className="priceimg" alt="" />
          </div>
          <div className="pricecard-header">
            <div className="price-free">
              <h2 className="free">{heading}</h2>
            </div>
          </div>
          <div className="cost">
            <span className="currency">$</span>
            <span className="value">{period === "monthly" ? price : 10.2 * price}</span>
            <span className="duration">{period === "monthly" ? "mo" : "yr"}</span>
          </div>
        </div>
        <div>
          <div className="button-main">
            <button className="pricecard-button">{button}</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricecard;
