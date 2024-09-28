import { BrowserRouter,  Routes, Route } from "react-router-dom";
import OutLet from "./outlet";
import AdminLogin from "./admin";
import AdminDashBoard from "./adminDashboard";
import AddVideo from "./addVdo";

export default function IndexPage(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OutLet/>} />
                    <Route path="/admin" element={<AdminLogin/>} />
                    
                    <Route path="/adminDash" element={<AdminDashBoard/>}/>
                    <Route path="/addVideo" element={<AddVideo/>}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}