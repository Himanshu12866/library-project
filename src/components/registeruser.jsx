
import { useState , useEffect } from "react";
import useCapcha from "../Hooks/capcha";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function RegisterUser() {
    const [otp, setOtp] = useState("");
    const [type, setType] = useState("password")
    const [eye, setEye] = useState("bi bi-eye-slash-fill")
    function Generate() {
        let code = useCapcha
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
        <div className="home-box-1 d-flex justify-content-center">

            <div className="card w-50" id="CardId">
                <div className="card-header">Register Details</div>
                <form>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Name :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4">User Name :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Email ID :</label>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold fs-4"> Password :</label>
                        </div>
                        
                        <div className="col-lg-6">
                                <div className="input-group">
                                    <input type={type} className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                                    <span className={`input-group-text ${eye}`} onClick={ShowPsw} style={{ backgroundColor: "transparent", color: "white", border: "3px solid green" }}></span>
                                </div>
                            </div>                        </div>
                
                    <div className="row my-2">
                        <div className="col-lg-6">
                            <label className="form-label text-light fs-4 fw-bold">Enter Captcha :</label>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group">
                                <input className="form-control text-light" style={{ backgroundColor: "transparent", border: "3px solid green" }}></input>
                                <span className="input-gruop-text px-3 py-1" style={{ backgroundColor: "transparent", color: "white", border: "3px solid green", width: "100px" }}>{otp}</span>
                                <span className="input-group-text bi bi-arrow-clockwise" onClick={Generate} style={{ backgroundColor: "transparent", color: "white", border: "3px solid green", cursor: "pointer" }}></span>
                            </div>
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