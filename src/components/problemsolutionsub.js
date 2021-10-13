import './../styles/Problemsolutionsub.css'
function Problemsolutionsub(props){
    return(
        <>
            <div className="business-sub-img">
                <img src={props.imgurl}></img>
                <h4 className="business-sub-heading">{props.heading}</h4>
            </div>
        </>
    )
}
export default Problemsolutionsub;