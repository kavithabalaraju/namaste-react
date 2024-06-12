import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count:0,
            count2:2
        };
    }
render(){
   const {name,location} = this.props;
    return (
    <div>
        <h1>Count = {this.state.count}</h1>
        <h1>Count = {this.state.count2}</h1>
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h4>Contact:chkavitha324</h4>
    </div>
    )
}
};
export default UserClass;
