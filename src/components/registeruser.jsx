import { useState, useEffect } from "react";
import useCapcha from "../Hooks/capcha";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import *as yup from "yup";
export default function RegisterUser() {
    const [otp, setOtp] = useState("");
    const [type, setType] = useState("password")
    const [eye, setEye] = useState("bi bi-eye-slash-fill")
    function Generate() {
        let code = useCapcha
        setOtp(code)
    }
    let navigate = useNavigate()
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
    useEffect(() => {
        Generate()
    }, [])
    const validationSchema = yup.object({
        name: yup
            .string()
            .required("Please Enter Your Name")
            .min(6, "Name must be at least 6 characters")
            .max(25, "Name cannot exceed 25 characters")
            .matches(/^[A-Z]/, "Name must start with an uppercase letter"), // Add a rule for starting with an uppercase if needed

        username: yup
            .string()
            .required("Please enter a valid Username")
            .min(6, "Username must be at least 6 characters")
            .max(12, "Username cannot exceed 12 characters")
            .matches(
               /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                'Username must be between 6 and 12 characters, with at least one uppercase letter, one lowercase letter, and one digit'
            ),
        email: yup
            .string()
            .required("Please Enter Your Email")
            .email("Invalid Email")
            .max(20, "Email cannot exceed 20 characters"),
        userpsw: yup
            .string()
            .required("Please Enter Password")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
            ),
            captcha: yup.string().required("Please Enter the Captcha").test("captcha-match", "Please enter the correct code", (value) => value === otp) // Custom validation for Captcha

    });

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            userpsw: "",
            username: ""
        },
        validationSchema: validationSchema,
        onSubmit: (user) => {
            axios.post("http://127.0.0.1:1234/newuser", user)
                .then(() => {
                    alert("Registered Successfully \n Please Login");
                    navigate("/userlogin")

                })
        }

    })
    return (
        <div className="home-box-1 d-flex justify-content-center">

            <div className="card" id="CardId">
                <div className="card-header">Register Details</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Name :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" name="name" onChange={formik.handleChange} style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                            <span className="text-danger">{formik.errors.name}</span>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4">User Name :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" name="username" onChange={formik.handleChange} style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                            <span className="text-danger">{formik.errors.username}</span>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Email ID :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" name="email" onChange={formik.handleChange} style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                            <span className="text-danger">{formik.errors.email}</span>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Password :</label>
                        </div>

                        <div className="col-lg-6">
                            <div className="input-group">
                                <input type={type} name="userpsw" onChange={formik.handleChange} className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                                <span className={`input-group-text ${eye}`} onClick={ShowPsw} style={{ backgroundColor: "transparent", color: "white", border: "3px solid green" }}></span>
                            </div>
                            <span className="text-danger">{formik.errors.userpsw}</span>
                        </div>                        </div>

                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label text-light fs-4 fw-bold">Enter Captcha :</label>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group">
                                <input className="form-control text-light" name="captcha" onChange={formik.handleChange} style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                                <span className="input-gruop-text px-3 py-1" style={{ backgroundColor: "transparent", color: "white", border: "3px solid green", width: "120px" }}>{otp}</span>
                                <span className="input-group-text bi bi-arrow-clockwise" onClick={Generate} style={{ backgroundColor: "transparent", color: "white", border: "3px solid green", cursor: "pointer" }}></span>
                            </div>
                            <span className="text-danger">{formik.errors.captcha}</span>
                        </div>
                    </div>
                    <button className="btn btn-secondary w-50 my-3">Register</button>
                </form>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-lg-12">
                            <Link to="/userlogin" className="form-label text-light">Already have an Account ?</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}