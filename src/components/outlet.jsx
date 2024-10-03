import Home2 from "./home2";
import { Outlet } from "react-router-dom";

export default function OUTLet(){
    return (
        <div>
            <Home2/>
            <Outlet/>
        </div>
    )
}