import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Child Constructor");
        super(props);
        console.log(props);
        this.state = {
            count:0
        };

    }
render(){
    console.log("Child Render");
   const {name,location} = this.props;
    return (
    <div>
        <button onClick={()=>{
            //Never update the state variable directly (this.state.count = this.state.count+1)
            this.setState({
                count:this.state.count+1
            })
        }

        }>Increase Count</button>
        <h1>Count = {this.state.count}</h1>
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h4>Contact:chkavitha324</h4>
    </div>
    )
}
componentDidMount(){
    //This fun is used for invoke the API call in CBC
    console.log("Child componentDidMount");
}
};
export default UserClass;
