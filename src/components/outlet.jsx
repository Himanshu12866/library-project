import Home2 from "./home2";
// import NavBar from "./navbar";
import { Outlet } from "react-router-dom";

export default function OutLet(){
    return (
        <div>
            <Home2/>
            <Outlet/>
        </div>
    )
}