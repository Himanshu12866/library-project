import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    let navigate = useNavigate();
    const [cookies, , removeCookie] = useCookies(["Adminname"]); // Correctly destructuring useCookies
    const [admin, setAdmin] = useState("");
   
    useEffect(() => {
        if (cookies.Adminname) {
            setAdmin(cookies.Adminname); // Ensure admin is a string or valid JSX content
        }
     
    }, [cookies]);
    // useEffect(() => {
    //     RemoveCookie()
    // })
    function RemoveCookie() {
        removeCookie("Adminname", { path: "/" });
        navigate("/");
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg p-3 bg-dark bg-light">
                <Link className="navbar-brand text-light fw-bold" to="/">Video Library</Link>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse">
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between" id="list">
                    {cookies.Adminname ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/adminDash" className="nav-link text-light">Admin Dashboard</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link text-light">Admin Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-light">User Login</Link>
                            </li>
                        </ul>
                    )}
                    <ul className="navbar-nav">
                        {cookies.Adminname ? (
                            <div className="d-flex ">
                            <li className="nav-item bg-primary">
                                <span className="badge bi bi-person-fill"></span>
                                <a href="#!" className="nav-link text-light fs-5">
                                    <span className="badge bg-dark">
                                        <span className="bi bi-person-fill"></span>
                                    </span> {cookies.Adminname}
                                </a>
                            </li>
                            <li className="nav-item">
                            <Link to="/addVideo" className="mx-2 nav-link text-light btn btn-success" title="Add Video">
                                <span className="bi bi-cloud-plus fs-4 m-1"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={RemoveCookie} className="nav-link text-light btn btn-danger" title="SignOut">
                                <span className="bi bi-box-arrow-right fs-4 m-1"></span>
                            </button>
                        </li>
                        </div>
                        ) : null}
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}
