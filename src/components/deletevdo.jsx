/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from "axios"
// import { useFormik } from ""
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function DeletVdo() {

    let params = useParams()


    // let navigate = useNavigate()

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
    useEffect(() => {
        LoadVideo()
    }, [])


    return (
        <div className="home-box-1 p-2">
            <h1 className="bg-dark text-light p-2">Delete Video</h1>
            <div className="d-flex justify-content-center w-100">
                {
                    detail.map(item =>
                        <div className="row w-75" key={item.videoId}>
                            <div className="col-6">

                                <iframe src={item.url} title={item.title} style={{ width: "300px", height: "300px" }}></iframe>
                            </div>
                            <div className="col-6">
                                <div className="card" style={{backgroundColor:"transparent"}}>
                                    <div className="card-header">
                                        <h3 className="text-light">{item.videoName}</h3>
                                    </div>
                                    <div className="card-body">
                                    <h4 className="card-title text-light"> {item.title}</h4>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }

            </div>
        </div>
    )
}



