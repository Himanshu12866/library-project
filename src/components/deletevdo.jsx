/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from "axios"
// import { useFormik } from ""
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "../styles/deleteVdo.css"
export default function DeletVdo() {

    let params = useParams()


    let navigate = useNavigate()

    const [detail, setDetail] = useState([{
        videoId: 0,
        videoName: "",
        title: "",
        videoCategory: "",
        url: "",
        dislikes: "",
        likes: "",
        views: ""

    }]);
    function LoadVideo() {

        axios.get(`http://127.0.0.1:1234/deleteVdo/${params.videoId}`)
            .then(response => {
                setDetail(response.data)
                console.log(detail)
            })
    }
    function CheckFunction() {
        let sure = window.confirm("Are Sure To Delete")
        if (sure === true) {
            axios.delete(`http://127.0.0.1:1234/delete/${params.videoId}`)
            alert("Video Deleted Succefully")
            navigate("/adminDash")

        }
        else {
            alert("Cancelled")
        }
    }
    useEffect(() => {
        LoadVideo()
    }, [])


    return (
        <div className="home-box-1 p-2">
            <h1 className="bg-dark text-light p-2">Delete Video</h1>
            {
                detail.map(item =>
                    <div className="deleteVdo">
                        <div className=" row w-75" key={item.videoId} style={{ backdropFilter: "blur(5px)", marginTop: "20px" }}>
                            <div className="col-lg-6 col-sm-12">
                                <iframe src={item.url} title={item.title} style={{ width: "100%", height: "383px" }}></iframe>
                                <div className="row my-2">
                                    <div className="col-6">
                                        <Link to="/adminDash" className="btn btn-success text-light w-100">Cancel</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to={`/editVdo/${item.videoId}`} className="btn btn-warning text-light w-100">Edit Video</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="card" style={{ backgroundColor: "transparent" }}>
                                    {/* <div className="card-header">
                                       
                                    </div> */}
                                    <div className="card-body" style={{ height: "383px" }}>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Id :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.videoId}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Name :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.videoName}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Title :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.title}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Category :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.videoCategory}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Likes :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.likes}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Dislikes :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.dislikes}</h4>
                                            </div>
                                        </div>
                                        <div className=" row my-2">
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">Video Views :</h4>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left" }}>
                                                <h4 className="card-title text-light">{item.views}</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer">
                                        <div className=" row my-1">
                                            <div className="col-12">
                                                <button onClick={CheckFunction} className="btn btn-danger w-100">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



