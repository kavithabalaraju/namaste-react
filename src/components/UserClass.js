import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Child Constructor");
        super(props);
     //   console.log(props);
        this.state = {
            userInfo:{
                login:"Dummy",
                id:"123"
            }
        };

    }
    async componentDidMount(){
        //This fun is used for invoke the API call in CBC
        console.log("Child componentDidMount");
        const data = await fetch("https://api.github.com/users/kavithabalaraju");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        }
        );
    }
render(){
    console.log("Child Render");
   const {login,id} = this.state.userInfo;
    return (
    <div>
        <h3>Name:{login}</h3>
        <h3>Id:{id}</h3>
        <h4>Contact:chkavitha324</h4>
    </div>
    )
}

componentDidUpdate(){
    console.log("componentDidUpdate");
}
};
export default UserClass;
