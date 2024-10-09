/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/editVdo.css"


export default function EditVdo() {

    let params = useParams()
    let videoId = parseInt(params.videoId)
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
        axios.get(`http://127.0.0.1:1234/editVdo/${params.videoId}`)
            .then(response => {
                setDetail(response.data)
            })
    }
    useEffect(() => {
        LoadVideo()
    })
    // const name = detail[0].videoName;


    let formik = useFormik({

        enableReinitialize: true,
        initialValues: {
            videoId: detail[0].videoId,
            videoName: detail[0].videoName,
            title: detail[0].title,
            videoCategory: detail[0].videoCategory,
            url: detail[0].url,
            dislikes: detail[0].dislikes,
            likes: detail[0].likes,
            views: detail[0].views
        },
        onSubmit: (value) => {
            axios.put(`http://127.0.0.1:1234/editVdo/${videoId}`,  value)
            .then(() => {
                alert("Video Updataed Successfully")    
                navigate("/adminDash")
            })
        }
    })

    return (
        <div className="home-box-1 p-2"  id="EditVdo">
            <h1 className="bg-dark text-light p-2">Edit Video Details</h1>
            <marquee className="text-light fs-4">Please Edit video details Carefully</marquee>
            <div className="d-flex justify-content-lg-center editBox  w-100">

                <div className="row my-1 w-75">
                    <div className="col-lg-5 col-sm-12">
                        <iframe src={formik.values.url} title="video" ></iframe>
                        <Link to="/adminDash" className="btn btn-warning w-100 p-2" style={{ marginTop: "30px" }}>Cancel</Link>
                    </div>
                    <div className="col-lg-7 col-sm-12 tex-left">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row my-1">
                                <div className="col-4 col-sm-6">
                                    <label className="form-label fs-4">Video Id :</label>
                                </div>
                                <div className="col-8 col-sm-6">
                                    <input className="form-control"  value={detail[0].videoId} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Name :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="videoName" value={formik.values.videoName} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Title :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="title" value={formik.values.title} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Category :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="videoCategory" value={formik.values.videoCategory} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video URL :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="url" onChange={formik.handleChange} value={formik.values.url}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Likes :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="likes" value={formik.values.likes} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Dislikes :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="dislikes" value={formik.values.dislikes} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Views :</label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="views" value={formik.values.views} onChange={formik.handleChange}></input>
                                </div>
                            </div>
                            <button className="btn btn-dark w-75 p-2" type="submit">Save Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



