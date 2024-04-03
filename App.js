/** const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from the React !");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //object it convert to h1 tag and pass to browser */

/**
 * <div id = "parent">
 * <div id = "child1">
 * <h1>I'm h1 tag</h1>
 * /div>
 *  <div id = "child2">
 * <h2>I'm h2 tag</h2>
 * /div>
 * </div> 
 */

//How do we create a nested element in react
const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I'm h1 tag here"),React.createElement("h2",{},"I'm h2 tag here")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I'm h1 tag here"),React.createElement("h2",{},"I'm h2 tag here")])]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);