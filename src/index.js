import React from 'react'
import ReactDom from "react-dom"
//importing the package faker  which we install 
import CommentDetails  from "./CommentDetails"
//create a component
const App=function()
{
    //using faker.image
    return(
    <div className="ui container comments">
        <CommentDetails/>
        <CommentDetails/>
        <CommentDetails/>
        <CommentDetails/>
    </div>
);
};
ReactDom.render(<App />,document.querySelector("#root"))