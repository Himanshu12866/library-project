import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddVideo() {
    let navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    
    function LoadVdo() {
        axios.get("http://127.0.0.1:1234/videos")
            .then(response => {
                setVideos(response.data);
            });
    }

    let formik = useFormik({
        initialValues: {
            videoId: "",
            videoName: "",
            url: "",
            title: "",
            videoCategory: "",
            dislikes: "",
            likes: "",
            views: ""
        },
        enableReinitialize: true,
        onSubmit: (values) => {
        
            values.videoId = `${videos.length + 1}`;
            axios.post("http://127.0.0.1:1234/addVdo", values)
                .then(() => {
                    alert("Video Added Successfully");
                    navigate("/adminDash");
                });
        }
    });

    useEffect(() => {
        LoadVdo();
    }, [formik]);

    return (
        <div className="home-box-1">
            <h1 className="btn fw-bold btn-dark w-100 my-2 p-4" style={{ textTransform: "uppercase", fontSize: "20px", letterSpacing: "2px" }}>Add Video</h1>

            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div className="card w-75 w-sm-100" style={{ backgroundColor: "rgba(0,0,0,.6)" }}>

                    <div className="card-header" style={{ backgroundColor: "transparent", color: "white" }}>
                        <h2>Please Fill The Details</h2>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video ID (Auto-generated):
                                    </div>
                                    <div className="col-6">
                                        <input name="videoId" value={`${videos.length + 1}`}  readOnly className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Name:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="videoName" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Title:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="title" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video URL:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="url" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Category:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="videoCategory" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Likes:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="likes" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Dislikes:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="dislikes" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-6 p-1">
                                        Video Views:
                                    </div>
                                    <div className="col-6">
                                        <input onChange={formik.handleChange} name="views" className="form-control" />
                                    </div>
                                </div>
                                <button type="submit" className="btn w-50 btn-success">Submit</button>
                                <Link to="/adminDash" className="btn w-50 btn-dark">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
