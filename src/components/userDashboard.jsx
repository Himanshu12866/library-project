import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
// import NavBar from "./navbar";


export default function UserDash() {
    const [cookies, , removeCookie] = useCookies(["Username", "UserId"])
    let navigate = useNavigate()

    useEffect(() => {


    }, [cookies])
    function Logout() {
        removeCookie("Username")
        removeCookie("UserId")
        navigate("/")

    }
    return (
        <div className="home-box-1">
            <nav className="navbar navbar-expand-lg bg-dark p-2 ">
                <Link to="/" className="navbar-brand text-light fw-bold" href="$" >Video Library</Link>
                <button className="navbar-toggler">
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-flex justify-content-between mx-3" id="#list">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="d">User Dashboard</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item " >
                            <p className="text-light py-2 px-2 my-2 bg-primary position-relative">
                                <span >{cookies.Username}</span>
                            </p>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: "red", marginLeft: "10px", marginTop: "10px", borderRadius: "50%", cursor: "pointer" }} >
                            <span className=" bi bi-person-fill fs-4 nav-link text-light"></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-light bi bi-folder-plus fs-4 fw-bold"></span>
                        </li>
                        <li className="nav-item ">
                            <span onClick={Logout} title="Logout" style={{ cursor: "pointer" }} className=" bi bi-box-arrow-right fs-4  nav-link text-light"></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}