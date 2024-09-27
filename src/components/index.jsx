import { BrowserRouter,  Routes, Route } from "react-router-dom";
import OutLet from "./outlet";
import AdminLogin from "./admin";

export default function IndexPage(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OutLet/>} />
                    <Route path="/admin" element={<AdminLogin/>}/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}