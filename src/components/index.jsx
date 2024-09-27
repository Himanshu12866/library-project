import { BrowserRouter,  Routes, Route } from "react-router-dom";
import OutLet from "./outlet";
import AdminLogin from "./admin";
import AdminDashBoard from "./adminDashboard";

export default function IndexPage(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OutLet/>} />
                    <Route path="/admin" element={<AdminLogin/>} />
                    
                    <Route path="/adminDash" element={<AdminDashBoard/>}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}