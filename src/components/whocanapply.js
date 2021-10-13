import './../styles/whocanapply.css'
function Whocanapply(props){
    return(
        <>
            <div className={props.reverse}>
                <div className={props.reversetwo}>
                    <h1>{props.heading}</h1>
                    <p className="who-can-apply-content-sub">{props.content}</p>
                </div>
                <div className="who-can-apply-img">
                    <img src={props.imgurl}></img>
                </div>
            </div>
        </>
    )
}
export default Whocanapply;