import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0);
    const [count2] = useState(2);
    console.log(count);

    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h3>Name:{name}</h3>
        <h3>Location:Hyderabad</h3>
        <h4>Contact:chkavitha324</h4>
    </div>
}

export default User;