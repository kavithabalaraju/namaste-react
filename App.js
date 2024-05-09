
import React from "react";
import ReactDOM from "react-dom/client";

//JSX==>Babel traspiled to react.createElement==> createElement JS Object==>HTLElement(render)
//React element
const jsxHeading = (
<h1 className = "head" tabIndex = "5">
    Namaste React from JSX !</h1>);
//root.render(jsxHeading); //you can't render the functional component like this

//Title component
const Title = () => (
    <h1 className="title">This is Title component</h1>
);

//React functional component
// Component composition means calling one component inside another component called comp composition
const Number = 1000;

const HeadingComponent = () =>(
     <div id="container">    
    <Title/>
    <h2>{Number}</h2>
    {Title()}
    <h1 className ="heading">Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
