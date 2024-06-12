import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (<div>
        <title>About</title>
        <h1>This is about page</h1>
        <User name={"Kavitha (function)"}/>
        <UserClass name={"Kavitha (class)"} location={"Hyderabad (class)"}/>
    </div>);
}
export default About;