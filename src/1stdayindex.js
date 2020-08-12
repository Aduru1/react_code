//import react & react dom library

import React from "react" // React is variable  , "react" is dependency name
import ReactDom from "react-dom"

//1st one is variable and 2 nd is object
//<button style="background-color:blue;color:white">Submit</button>
//<button style={{backgroundColor:'blue',color:'white',border:'2px solid yellow'}}>Submit</button>
//   <button style={{backgroundColor:'blue',color:'white'}}>Submit</button>

function getButtonText(){
    return "hitme !";
} 
function getTime()
{
    return (new Date().toLocaleTimeString())
}
    
//create react component
const App = function(){
   // const buttontext = {text:"help me"}
        //in html we called using className
        //in jsx we write html but it is converted to js
        //in js we have  a keyword className
    return (<div>
        <label className="label">{getTime()}</label>
    <button style={{backgroundColor:'blue',color:'white',border:'10px solid yellow'}}>{getButtonText()}</button>
</div>)
};


//take react component and show it on screen
ReactDom.render(<App/>,document.querySelector("#root"));





