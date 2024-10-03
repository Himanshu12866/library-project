// import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";
import { useCookies } from "react-cookie";

export default function AdminDashBoard() {
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
    let data = useCookies(["Adminname"])
    function Loadvdo() {
        axios.get("http://127.0.0.1:1234/videos")
            .then(response => {
                setVdo(response.data)
            }
            )
    }

    // let data = useCookies()
    useEffect(() => {
        Loadvdo()
    }, [])
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
                        <li className="nav-item">
                            <p className="nav-link">{
                                data.map(admin => <i className="text-light" key={admin}>{admin.Adminname}</i>)
                            }</p>
                        </li>
                        <li className=" nav-item">
                            <Link to="/addVideo" className="btn btn-success  nav-link text-light" title="Add New Videos">
                                <span className="bi bi-cloud-plus-fill fs-4" ></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">
                                <span className="bi bi-box-arrow-right fs-4"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="d-flex justify-content-center">
                <div style={{ width: "85%" }}>
                    {
                        vdo.map(item => <div key={item.id} className="row my-3" style={{ width: "100%", height: "400px" }}>
                            <div className="col-lg-6" >
                                <iframe style={{ width: "100%", height: "380px" }} src={item.url} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-6" style={{ textAlign: "left" }}>
                                <div style={{ height: "320px" }}>
                                    <p className="fs-3"> Name :<span className="fw-bold  fw-bold fs-2"> {item.title}</span></p>
                                    <p className="fs-3">About : <span className="fs-3 fw-bold ">{item.videoName}</span></p>
                                    <p className="fs-3">Title : <span className="fs-3 fw-bold ">{item.title}</span></p>
                                    <p className="fs-3">Category : <span className="fs-3 fw-bold ">{item.videoCategory}</span></p>
                                    <div className="d-flex justify-content-start">
                                        <p><span className="btn bi bi-hand-thumbs-up-fill  text-light badge bg-info fs-5 p-2">{item.likes}</span></p>
                                        <p className="mx-2"><span className="btn bi bi-hand-thumbs-down-fill text-light text-light badge bg-danger fs-5 p-2 ">{item.dislikes}</span></p>
                                        <p><span className="btn bi bi-people-fill text-light badge bg-warning p-2 fs-5">{item.views}</span></p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-6">
                                        <button className="btn btn-dark w-100 p-2 mt-3">Edit Video Details</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-danger w-100 p-2 mt-3">Remove Video</button>
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