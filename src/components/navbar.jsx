import { useState , useEffect} from "react";
import {useCookies } from "react-cookie";  // Correct import
import { Link } from "react-router-dom";

export default function NavBar() {
    const [cookies ] = useCookies(["Adminname"]); // Correct usage of useCookies
    const [admin, setAdmin] = useState(""); // Initialize admin state

    useEffect(() => {
        if (cookies.Adminname) {
            setAdmin(cookies.Adminname); // Set admin from cookie if available
        }
    }, [cookies]); // Use useEffect to avoid setting state during render
    // let navigate = useNavigate()



    return (
        <div>
            <nav className="navbar navbar-expand-lg p-3 bg-dark bg-light">
                <Link className="navbar-brand text-light fw-bold" to="/">Video Library</Link>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse" >
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between" id="list">
                    {
                        admin ? (
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
                        )
                    }
                    <ul className="navbar-nav">
                        {
                            admin ? (
                                <li className="nav-item bg-primary">
                                    <a href="#!" className="nav-link text-light fs-5">{admin}</a>
                                </li>
                            ) : null
                        }
                        <li className="nav-item">
                            <Link to="/addVideo" className=" mx-2 nav-link  text-light btn btn-success" title="Add Video">
                                <span className="bi bi-cloud-plus fs-4 m-1 "></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger " title="SignOut">
                                <span className="bi bi-box-arrow-right fs-4 m-1"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
