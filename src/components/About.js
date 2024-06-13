import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        //API call logic
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent Render");
        return (<div>
            <title>About</title>
            <h1>This is about page</h1>
            <UserClass name={"Kavitha (class)"} location={"Hyderabad (class)"}/>
            <UserClass name={"Balaraju (class)"} location={"Hyderabad (class)"}/>
        </div>);

    }

};


/**  const About = ()=>{
    return (<div>
        <title>About</title>
        <h1>This is about page</h1>
        <UserClass name={"Kavitha (class)"} location={"Hyderabad (class)"}/>
    </div>); 
}*/
export default About;