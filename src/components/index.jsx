import { BrowserRouter, Routes, Route } from "react-router-dom";
import OUTLet from "./outlet"
import AdminLogin from "./admin";
import AdminDashBoard from "./adminDashboard";
import AddVideo from "./addVdo";
import EditVdo from "./editVdo";
import UserLogin from "./userLogin";
import RegisterUser from "./registeruser";


export default function IndexPage() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OUTLet />} />
                    <Route path="/admin" element={<AdminLogin />} />
                    <Route path="/userlogin" element={<UserLogin/>}/>
                    <Route path="/adminDash" element={<AdminDashBoard />} />
                    <Route path="/addVideo" element={<AddVideo />} />
                    <Route path="/editVdo/:videoId" element={<EditVdo />} />
                    <Route path="/newuser" element={<RegisterUser/>} />
                    <Route path="*" element={"<h1>Sorry Not Found</h2>"}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}