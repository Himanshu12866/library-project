/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import { Button } from "@mui/material";


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  p-3 bg-dark bg-light">
                <a className="navbar-brand text-light fw-bold" >Video Library</a>
                <button className="btn btn-dark navbar-toggler" data-bs-toggle="collapse" data-bs-target="#list">
                    <span className="bi bi-list"></span>
                </button>
            </nav>
        </div>
    )
}