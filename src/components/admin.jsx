/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./navbar";
import axios from "axios";
import "../styles/home2.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

export default function AdminLogin() {
    const [admin, setAdmin] = useState([]);
    const [cookies, setCookie ] = useCookies(["Adminname"]); 
    const [ type , setType] = useState("password");
    const [ eye , setEye] = useState("bi bi-eye-slash")
    let navigate = useNavigate();

    function ChangeType(){
       if(type === "password"){
        setType("text")
        setEye("bi bi-eye")
       }
       else{
        setType("password")
        setEye("bi bi-eye-slash")
       }
    }
    // Fetch admin data from the server
    function LoadAdmins() {
        axios.get('http://127.0.0.1:1234/admins')
            .then(response => {
                setAdmin(response.data);
           
            })
            .catch(err => console.error(err)); // Added error handling
    }

    // Set up the form handling with Formik
    let formik = useFormik({
        initialValues: {
            adminId: 0,
            adminPsw: ""
        },
        onSubmit: (inputs) => {
            let detail = admin.find(data => data.adminId === parseInt(inputs.adminId) && data.adminPsw === inputs.adminPsw);
            if (detail) {
                alert(`Welcome Back ${detail.adminName}`);
                
                // Set a cookie to store the admin name
                setCookie("Adminname", detail.adminName, { path: "/adminDash" }); // Added path to ensure the cookie is accessible across the app
               
                navigate("/adminDash"); // Navigate to admin dashboard
            } else {
                alert("Admin Not Found");
            }
        }
    });

    // Load admin data on component mount
    useEffect(() => {
        LoadAdmins();
    },[]); // Empty dependency array ensures this runs once on mount

    return (
        <div className="home-box-1">
            <NavBar />
            <div className="input-box">
                <div className="card w-100 text-light" style={{ backgroundColor: "transparent" }}>
                    <h1>Admin Login</h1>
                    <hr style={{ height: "5px", backgroundColor: "white" }} />
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <label className="form-label fw-bold fs-3">User ID :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="adminId"
                                onChange={formik.handleChange}
                                value={formik.values.adminId} // Added value to bind input with formik
                            />
                            <label className="form-label fw-bold fs-3">Password :</label>
                            <div className="input-group">
                                <input
                                    type={type}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    name="adminPsw"
                                    value={formik.values.adminPsw} // Added value to bind input with formik
                                />
                                <span onClick={ChangeType} className= {`input-group-text bg-dark text-light  ${eye}`}></span>
                            </div>
                            <label className="form-label fs-3 fw-bold">Enter Captcha:</label>
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-dark w-100 my-3">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
