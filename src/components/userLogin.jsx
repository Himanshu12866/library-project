
import { useEffect, useState } from "react"
import useCapcha from "../Hooks/capcha"
import "../styles/userlogin.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar"
export default function UserLogin() {
    const [otp, setOtp] = useState("");
    const [type, setType] = useState("password")
    const [eye, setEye] = useState("bi bi-eye-slash-fill")
    function Generate() {
        let code = useCapcha()
        setOtp(code)
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
    useEffect(() => {
        Generate()
    }, [])
    return (
        <div className="home-box-1">
        <Navbar/>
        <div className="d-flex justify-content-center">
            <div className="card w-50" id="CardId" >
                <div className="card-header text-light"> <span className="bi bi-person-fill">&nbsp;</span> User Login</div>
                <form>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label text-light">Email Id :</label>
                            </div>
                            <div className="col-lg-6">
                                <input className="form-control text-light"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label text-light w-100">Password :</label>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input type={type} className="form-control text-light"></input>
                                    <span className={`input-group-text ${eye}`} onClick={ShowPsw} style={{ backgroundColor: "transparent", color: "white", border: "3px solid red" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label text-light">Enter Captcha :</label>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input className="form-control text-light"></input>
                                    <span className="input-gruop-text px-3 py-1" style={{ backgroundColor: "transparent", color: "white", border: "3px solid red", width: "100px" }}>{otp}</span>
                                    <span onClick={Generate} className="input-group-text bi bi-arrow-clockwise" style={{ backgroundColor: "transparent", color: "white", border: "3px solid red", cursor: "pointer" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <button className="btn btn-success w-100">LogIn</button>
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