import axios from "axios"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function EditVdo() {

let params = useParams()

const [detail , setDetail] = useState([{
    videoId: 0,
    videoName: "",
    title: "",
    videoCategory: "",
    url: "",
    dislikes: "",
    likes: "",
    views: ""

}])
    function LoadVideo(){
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
            <h1 className="bg-dark text-light p-2">Edit Vidoe Details</h1>
        </div>
    )
}