
import { useEffect, useState } from "react"
import useCapcha from "../Hooks/capcha"
import "../styles/userlogin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar"
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCookies } from "react-cookie";
export default function UserLogin() {
    const [otp, setOtp] = useState("");
    const [type, setType] = useState("password")
    const [eye, setEye] = useState("bi bi-eye-slash-fill")
    const [user, setUser] = useState([]);
    const [cookies , setCookie , ] = useCookies(["Username" , "UserId"])
    function Generate() {
        let code = useCapcha()
        setOtp(code)
    }
    let navigate = useNavigate()
    function LoadUsers() {
        axios.get("http://127.0.0.1:1234/userdetails")
            .then(response => {
                setUser(response.data)
                console.log(user)

            })


    }
    function ShowPsw() {
        if (type === "password") {
            setType("text")
            setEye("bi bi-eye-fill")
        }
        else {
            setType("password")
            setEye("bi bi-eye-slash-fill")
        }
    }

    let validationSchema = yup.object({
        useremail: yup.string().email("Invalid email").required("Email is required"),
        userpsw: yup.string().required("Password is required"),
        captcha: yup.string().required("Please Enter the Captcha").test("captcha-match", "Please enter the correct code", (value) => value === otp) // Custom validation for Captcha


    })
    let formik = useFormik({
        initialValues: {
            useremail: "",
            userpsw: "",
            captcha: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            let detail = user.find(data => data.email === values.useremail && data.userpsw === values.userpsw )
            if(detail){
                alert(`Login Success\n WELCOME ${detail.name} `);
                setCookie("Username" , detail.name , {path:"/useDash"})
                setCookie("UserId" , detail.username)
                navigate("/userDash")
            }
            else{
                alert("Invalid Email or Password");
            }
        }
    })
    useEffect(() => {
        Generate()
        LoadUsers()
    }, [])
    return (
        <div className="home-box-1">
            <Navbar />
            <div className="d-flex justify-content-center">
                <div className="card" id="CardId" >
                    <div className="card-header text-light"> <span className="bi bi-person-fill">&nbsp;</span> User Login</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label text-light">Email Id :</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control text-light" name="useremail" onChange={formik.handleChange}></input>
                                    <span className="text-danger fw-bold my-2">{formik.errors.useremail}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label text-light w-100">Password :</label>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <input type={type} className="form-control text-light" name="userpsw" onChange={formik.handleChange}></input>
                                        <span className={`input-group-text ${eye}`} onClick={ShowPsw} style={{ backgroundColor: "transparent", color: "white", border: "3px solid red" }}></span>
                                    </div>
                                    <span className="text-danger fw-bold my-2">{formik.errors.userpsw}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label text-light">Enter Captcha :</label>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <input className="form-control text-light" name="captcha" onChange={formik.handleChange}></input>
                                        <span className="input-gruop-text px-3 py-1" style={{ backgroundColor: "transparent", color: "white", border: "3px solid red", width: "110px" }}>{otp}</span>
                                        <span onClick={Generate} className="input-group-text bi bi-arrow-clockwise" style={{ backgroundColor: "transparent", color: "white", border: "3px solid red", cursor: "pointer" }}></span>
                                    </div>
                                    <span className="text-danger fw-bold my-2">{formik.errors.captcha}</span>
                                </div>
                            </div>
                            <div className="my-3">
                                <button type="submit" className="btn btn-success w-100">LogIn</button>
                            </div>
                        </div>
                    </form>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="/newuser" className="form-label text-light">Create A New Account ?</Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to="" className="form-label text-light">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}