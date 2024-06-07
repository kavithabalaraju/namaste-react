import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Opps!!!</h2>
            <h3>Something went wrong</h3>
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    );
}

export default Error;