
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { useEffect, useState} from "react";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const AppLayout = () => {
     // this out let is used to replace with respective componet
    return (<div className = "app">
        <Header/>   
        <Outlet/>
    </div>
    

    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/resturant",
            element:<ResturantMenu/>
        }],
        errorElement:<Error/>
    },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
