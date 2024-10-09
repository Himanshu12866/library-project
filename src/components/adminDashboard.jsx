// import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../styles/adminDash.css"
export default function AdminDashBoard() {
    let navigate = useNavigate()
    const [cookies, ,removeCookie] = useCookies(["Adminname"]);
    const [vdo, setVdo] = useState([{
        videoId: 0,
        videoName: "",
        title: "",
        videoCategory: "",
        url: "",
        dislikes: "",
        likes: "",
        views: ""
    }])
    function Loadvdo() {
        axios.get("http://127.0.0.1:1234/videos")
            .then(response => {
                setVdo(response.data)
            })
    }
    useEffect(() => {
        Loadvdo()
    }, [cookies])
    function RemoveCookie() {
        removeCookie("Adminname", { path: "/" });
        navigate("/");
    }
    return (
        <div className="home-box-1 overflow-x-hidden">
            <nav className="navbar navbar-expand-lg  p-3 bg-dark bg-light">
                <Link className="navbar-brand text-light fw-bold" to="/">Video Library</Link>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse" >
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between" id="list">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">Admin Dashboard</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item bg-primary">
                            <a href="#!" className="nav-link text-light fs-5">
                                <span className="badge bg-dark">
                                    <span className="bi bi-person-fill"></span>
                                </span> {cookies.Adminname}
                            </a>                        </li>
                        <li className=" nav-item">
                            <Link to="/addVideo" className="btn btn-success mx-2 nav-link text-light" title="Add New Videos">
                                <span className="bi bi-cloud-plus fs-4 m-1" ></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={RemoveCookie} className="nav-link text-light">
                                <span className="bi bi-box-arrow-right fs-4 m-1"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div  id="adminBox">
                <div className="adminDiv" >
                    {
                        vdo.map(item =>
                         <div key={item.id} className="row my-3" >
                            <div className="col-lg-6 col-sm-12" >
                                <iframe  src={item.url} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div  className="insideCol" >
                                    <p className="fs-3"> Name :<span className="fw-bold  fw-bold fs-2"> {item.title}</span></p>
                                    <p className="fs-3">About : <span className="fs-3 fw-bold ">{item.videoName}</span></p>
                                    <p className="fs-3">Title : <span className="fs-3 fw-bold ">{item.title}</span></p>
                                    <p className="fs-3">Category : <span className="fs-3 fw-bold ">{item.videoCategory}</span></p>
                                    <div className=" btnsGrp">
                                        <p><span className="btn bi bi-hand-thumbs-up-fill  text-light badge bg-info fs-5 p-2">{item.likes}</span></p>
                                        <p className="mx-2"><span className="btn bi bi-hand-thumbs-down-fill text-light text-light badge bg-danger fs-5 p-2 ">{item.dislikes}</span></p>
                                        <p><span className="btn bi bi-people-fill text-light badge bg-warning p-2 fs-5">{item.views}</span></p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-6">
                                        <Link to={`/editVdo/${item.videoId}`} className="btn btn-dark w-100 p-2 mt-3">Edit Details</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to={`/deleteVdo/${item.videoId}`} className="btn btn-danger w-100 p-2 mt-3">Remove Video</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}