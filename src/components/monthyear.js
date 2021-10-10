import './../styles/monthyear.css'
function Monthyear(props) {
    const one = () => {
        console.log("hi");
        let s = document.getElementsByClassName('switch')[0];
        s.style.transform = "translateX(90px)";
        let s1 = document.getElementById('monthly');
        s1.style.color = "#2d3d4f";
        let s2 = document.getElementById('yearly');
        s2.style.color = "white"
        props.smory("yearly");
    }
    const two = () => {
        console.log("hi");
        let s = document.getElementsByClassName('switch')[0];
        s.style.transform = "translateX(0px)";
        let s1 = document.getElementById('monthly');
        s1.style.color = "white";
        let s2 = document.getElementById('yearly');
        s2.style.color = "#2d3d4f";
        props.smory("monthly");

    }
    return (
        <>
            <div className="pricing-container">
                <div className="pricing-switcher">
                    <p className="fieldset" >
                        <input type="radio" name="duration-1" value="monthly" id="monthly-1" />
                        <label htmlFor="monthly-1" id="monthly" onClick={two}>Monthly</label>
                        <input type="radio" name="duration-1" value="yearly" id="yearly-1" />
                        <label htmlFor="yearly-1" id="yearly" onClick={one}>Yearly</label>
                        <span className="switch"></span>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Monthyear;