import './../styles/problemsolution.css'
import Problemsolutionsub from './problemsolutionsub';
import { useState } from 'react';
function Problemsolution(props){
    const rendericons=()=>{
        let count=0;
        return props.businessimg.map(element=>{
            count++;
            if(props.counter==1)
            {
                if(count<=3)
                    return <Problemsolutionsub heading={element.heading} imgurl={element.imgurl}/>
                else
                    return
            }
            else
            {
                if(count>3)
                    return <Problemsolutionsub heading={element.heading} imgurl={element.imgurl}/>
                else
                    return
            }

        })
    }
    return(
        <>
            <div className={props.display}>
                <div className="business-problem-sub">
                    <img src={props.imgurl} className="business-problem-img"></img>
                </div>
                <div className="business-problem-content">
                    <div className="business-heading-main">
                        <h1 className="business-heading-sub">{props.heading}</h1>
                    </div>
                    <div>
                        <p className="business-problem-content-one">{props.contentone}</p>
                    </div>
                    <div className="business-sub-img-main">
                        {
                            rendericons()
                        }
                    </div>
                    <div className="business-problem-content-two">
                        <p>{props.contenttwo}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Problemsolution;