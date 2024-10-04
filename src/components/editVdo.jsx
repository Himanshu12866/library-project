/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditVdo() {
    let params = useParams();

    const [detail, setDetail] = useState({
        videoId: 0,
        videoName: "",
        title: "",
        videoCategory: "",
        url: "",
        dislikes: "",
        likes: "",
        views: "",
    });

    // Function to load video details by videoId
    function LoadVideo() {
        axios.get(`http://127.0.0.1:1234/editVdo/${params.videoId}`).then((response) => {
            setDetail(response.data); // Update detail with the fetched data
        });
    }

    let formik = useFormik({
        enableReinitialize: true, // Reinitialize form when initialValues change
        initialValues: {
            videoId: detail[0].videoId,
            videoName: detail[0].videoName,
            title: detail[0].title,
            url:detail[0].url,
            videoCategory: detail[0].videoCategory,
            dislikes: detail[0].dislikes,
            likes: detail[0].likes,
            views: detail[0].views,
        }, // Set form initial values as the detail state
        onSubmit: (values) => {
            console.log("Updated Video Details:", values);
            // Add logic to update the video details, e.g., axios.post to update the server
        },
    });

    useEffect(() => {
        LoadVideo();
    });

    return (
        <div className="home-box-1 p-2">
            <h1 className="bg-dark text-light p-2">Edit Video Details</h1>
            <marquee className="text-light fs-4">Please Edit video details carefully</marquee>
            <div className="d-flex justify-content-center w-100">
                <div className="row my-1 w-75">
                    <div className="col-lg-5">
                        {/* Displaying the video using iframe */}
                        <iframe
                            src={formik.values.url} // Show the video URL
                            title="video"
                            style={{ width: "400px", height: "350px" }}
                        ></iframe>
                        <Link
                            to="/adminDash"
                            className="btn btn-warning w-100 p-2"
                            style={{ marginTop: "30px" }}
                        >
                            Cancel
                        </Link>
                    </div>
                    <div className="col-lg-7 tex-left">
                        {/* Form to edit the video details */}
                        <form onSubmit={formik.handleSubmit}>
                            {/* Video Id */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Id:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="videoId" // Name should match formik values' key
                                        value={formik.values.videoId} // Show pre-filled value
                                        onChange={formik.handleChange} // Handle value change
                                        readOnly // ID is typically not editable
                                    />
                                </div>
                            </div>

                            {/* Video Name */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Name:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="videoName"
                                        value={formik.values.videoName} // Show pre-filled value
                                        onChange={formik.handleChange} // Allow editing
                                    />
                                </div>
                            </div>

                            {/* Video Title */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Title:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="title"
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Video Category */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Category:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="videoCategory"
                                        value={formik.values.videoCategory}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Video URL */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video URL:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="url"
                                        value={formik.values.url}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Video Likes */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Likes:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="likes"
                                        value={formik.values.likes}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Video Dislikes */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Dislikes:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="dislikes"
                                        value={formik.values.dislikes}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Video Views */}
                            <div className="row my-1">
                                <div className="col-4">
                                    <label className="form-label fs-4">Video Views:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                        className="form-control"
                                        name="views"
                                        value={formik.values.views}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="btn btn-dark w-75 p-2"
                                style={{ marginTop: "0px" }}
                            >
                                Save Details
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
