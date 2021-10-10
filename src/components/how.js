import './../styles/how.css'
function How(props){
    return(
        <>
        <div className="H-main">
          <img src={props.imgurl} className="H-img"></img>
          <h3 className="H-heading">{props.heading}</h3>
          <p className="H-content">{props.content}</p>
        </div>
        </>
    )
}
export default How;