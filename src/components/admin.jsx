import NavBar from "./navbar";

import "../styles/home2.css";
export default function AdminLogin() {
    return (
        <div className="home-box-1">
            <NavBar />
            <div className="input-box">

                <div className="card w-100 text-light" style={{ backgroundColor: "transparent" }}>
                    <h1>Admin Login</h1>
                    <hr style={{ height:"5px" , backgroundColor:"white"}}></hr>
                    <div className="card-body">
                        <form >

                            <label className="form-label fw-bold fs-3">User ID :</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" />
                            <label className="form-label fw-bold fs-3">Password :</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" />
                                <button className="input-group-text bi bi-eye-slash"></button>
                            </div>
                            <label className="form-label fs-3 fw-bold">Enter Captcha:</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" />
<button className="btn btn-dark w-100 my-3">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
