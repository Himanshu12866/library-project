/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from "axios"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function EditVdo() {

    let params = useParams()

    const [detail, setDetail] = useState([{
        videoId: 0,
        videoName: "",
        title: "",
        videoCategory: "",
        url: "",
        dislikes: "",
        likes: "",
        views: ""

    }])
    function LoadVideo() {
        axios.get(`http://127.0.0.1:1234/editVdo/${params.videoId}`)
            .then(response => {
                setDetail(response.data)
            })
    }
    useEffect(() => {
        LoadVideo()
    })
    return (
        <div className="home-box-1 p-2">
            <h1 className="bg-dark text-light p-2">Edit Video Details</h1>
            <marquee className="text-light fs-4">Please Edit video details Carefully</marquee>
            <div className="d-flex justify-content-center w-100">
                {
                    detail.map((item, index) =>
                        <div className="row my-2 w-75">
                            <div className="col-lg-5">
                                <iframe src={item.url} key={index} title="video" style={{ width: "400px", height: "350px" }}></iframe>
                                <Link to="/adminDash" className="btn btn-warning w-100 p-2" style={{ marginTop: "30px" }}>Cancel</Link>
                            </div>
                            <div className="col-lg-7 tex-left">
                                <form>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Id :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.videoId}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Name :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.videoName}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Title :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.title}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Category :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.videoCategory}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Likes :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.likes}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Dislikes :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.dislikes}></input>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label className="form-label fs-4">Video Views :</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control" value={item.views}></input>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark w-75 p-2" style={{ marginTop: "15px" }}>Save Details</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}