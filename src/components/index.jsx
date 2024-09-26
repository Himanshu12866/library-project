import { BrowserRouter,  Routes, Route } from "react-router-dom";
import OutLet from "./outlet";

export default function IndexPage(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OutLet/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}