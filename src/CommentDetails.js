
import React from 'react'
import ReactDom from "react-dom"
import faker from "faker"        
const CommentDetails=()=>{
    const curtime=new Date().toLocaleTimeString();
    return(
        <div  className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                ikar
            </a>
            <div className="metadata">
              <span className="data">Today at {curtime}</span>  
            </div>
                <div className="text">Nice blog post</div>  
            </div>
        </div>
     );   
};

ReactDom.render(<CommentDetails />,document.querySelector("#root"))
export default  CommentDetails;