import NavBar from "./navbar";
import { Outlet } from "react-router-dom";

export default function OutLet(){
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}