

import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  p-3 bg-dark bg-light">
                <a className="navbar-brand text-light fw-bold" href="kmn">Video Library</a>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse" >
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between" id="list">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">Admin Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">User Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">Dashboard</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light">
                                <span className="bi bi-person-fill fs-4 text-light"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light">
                                <span className="bi bi-cloud-plus-fill fs-4"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light">
                                <span className="bi bi-box-arrow-right fs-4"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}