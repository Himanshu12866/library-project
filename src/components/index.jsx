import { BrowserRouter,  Routes, Route } from "react-router-dom";
import OUTLet from "./outlet"
import AdminLogin from "./admin";
import AdminDashBoard from "./adminDashboard";
import AddVideo from "./addVdo";
// import Home2 from "./home2";

export default function IndexPage(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OUTLet/>} />
                    <Route path="/admin" element={<AdminLogin/>} />
                    
                 
                    <Route path="/adminDash" element={<AdminDashBoard/>}/>
                    <Route path="/addVideo" element={<AddVideo/>}/>
                    <Route path="*" element={"<h1>Sorry Not Found</h2>"}></Route>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}