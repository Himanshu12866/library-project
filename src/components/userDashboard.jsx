/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../styles/userDash.css"



export default function UserDash() {
    const [cookies, , removeCookie] = useCookies(["Username", "UserId"])
    let navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        id: "",
        name: ""
    })
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
        try {
            axios.get("http://127.0.0.1:1234/videos")
            .then(response => {
                setVdo(response.data)
            })
        } catch (error) {
           console.log(error) 
        }
        
    }



    function LoadUser() {
        let id = cookies.UserId;

        try {
            axios.get("http://127.0.0.1:1234/userdetails")
            .then(response => {
                let data = response.data
                setUser(data.find(item => item.username === id))

            })
        } catch (error) {
            console.log(error)
        }
        

    }


    useEffect(() => {
        LoadUser();
        Loadvdo()

    }, [cookies])
    function Logout() {
        removeCookie("Username")
        removeCookie("UserId")
        navigate("/")
    }
    return (
        <div className="home-box-1 overflow-y-scroll">
            <nav className="navbar navbar-expand-lg bg-dark p-2 ">
                <Link  className="navbar-brand text-light fw-bold" href="$" >Video Library</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#list">
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between mx-3" id="list">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light ">User Dashboard</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item " >
                            <p className="text-light py-2 px-2 my-2 bg-primary position-relative">
                                <span >{cookies.Username}</span>
                            </p>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center" id="Icon" data-bs-target="#modal-box" data-bs-toggle="modal" >
                            <span className=" bi bi-person-fill fs-4 nav-link text-light"></span>
                        </li>
                        <li className="nav-item" id="Icons">
                            <span className="nav-link text-light bi bi-clock-fill m-1 fs-4 fw-bold"></span>
                        </li>
                        <li className="nav-item " id="Icons">
                            <span onClick={Logout} title="Logout" style={{ cursor: "pointer" }} className=" bi bi-box-arrow-right fs-4 m-1  nav-link text-light"></span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="modal fade" id="modal-box">
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ backgroundColor: "rgb(0,0,0)" }}>
                        <div className="modal-header" style={{ backgroundColor: "transparent" }}>
                            <h3>User Details</h3>
                            <button className="btn btn-close bg-light text-light fs-6" style={{ color: "white" }} data-bs-dismiss="modal">
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row my-3">
                                <div className="col-4" title="Name"><span className="bi bi-person-fill fs-2"></span></div>
                                <div className="col-8 fs-5">{user.name}</div>

                            </div>
                            <hr></hr>
                            <div className="row my-3">
                                <div className="col-4" title="User ID"><span className="bi bi-exclamation-square-fill fs-2"></span></div>
                                <div className="col-8 fs-5">{user.username}</div>

                            </div>
                            <hr></hr>
                            <div className="row my-3">
                                <div className="col-4" title="User Email"><span className="bi bi-at fs-2"></span></div>
                                <div className="col-8 fs-5">{user.email}</div>

                            </div>
                            <hr></hr>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning w-100" data-bs-dismiss="modal">Clsoe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div  id="VdoBox">
                <div className="VdoContainer">
                    {
                        vdo.map(item => <div key={item.id} className="row my-3" >
                            <div className="col-lg-6 col-sm-12" >
                                <iframe src={item.url} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-6 col-sm-12" >
                                <div>
                                    <p className="fs-3"> Name :<span className="fw-bold  fw-bold fs-2"> {item.title}</span></p>
                                    <p className="fs-3">About : <span className="fs-3 fw-bold ">{item.videoName}</span></p>
                                    <p className="fs-3">Title : <span className="fs-3 fw-bold ">{item.title}</span></p>
                                    <p className="fs-3">Category : <span className="fs-3 fw-bold ">{item.videoCategory}</span></p>
                                    <div className="d-flex w-100 justify-content-center">
                                        <p className="w-100"><span className="btn bi bi-hand-thumbs-up-fill  text-light badge bg-info fs-5 p-2">{item.likes}</span></p>
                                        <p className="mx-2 w-100"><span className="btn bi bi-hand-thumbs-down-fill text-light text-light badge bg-danger fs-5 p-2 ">{item.dislikes}</span></p>
                                        <p className="w-100"><span className="btn bi bi-people-fill text-light badge bg-warning p-2 fs-5">{item.views}</span></p>
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