// import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { useCookies } from "react-cookie";
import axios from "axios";

export default function AdminDashBoard() {
    const [vdo, setVdo] = useState([{
        videoId: 0,
        videoName: "",
        title: "",
        videocategory: "",
        url: "",
        likes: "",
        dislikes: "",
        views: ""

    }])
    // const [name , setName] = useState("")
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

                        <li className=" nav-item">
                            <Link className="btn btn-success  nav-link text-light" title="Add New Videos">
                                <span className="bi bi-cloud-plus-fill fs-4" ></span>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addVideo" className="nav-link text-light">
                                <span className="bi bi-box-arrow-right fs-4"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>


                <div className="d-flex justify-content-center mt-4">
                    {
                        vdo.map(item => <div className="row" style={{ width: "80%" }}>
                            <div className="col-lg-4">
                                <iframe style={{ width: "100%", height: "250px" }} src={item.url} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                            </div>
                            <div className="col-lg-6" style={{ textAlign: "left" }}>
                                <p> Name :<span className="fw-bold"> {item.title}</span></p>
                                <p>Category : <span>{item.videoName}</span></p>
                                <div className="d-flex justify-content-start">
                                    <p><span className="btn bi bi-hand-thumbs-up-fill p-0 text-light"></span>{item.likes}</p>
                                    <p className="mx-2"><span className="btn bi bi-hand-thumbs-down-fill text-light p-0"></span>{item.dislikes}</p>
                                    <p><span className="btn bi bi-people-fill text-light p-0"></span>{item.views}</p>

                                </div>
                            </div>
                            <div className="col-lg-2" style={{ display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent: "space-evenly" }}>
                                <div>
                                    <button className="btn btn-dark w-100">Edit Video Details</button>
                                </div>
                                <div>
                                    <button className="btn btn-danger w-100">Remove Video</button>
                                </div>

                            </div>


                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}