
import "../styles/iserlogin.css"
export default function UserLogin() {
    return (
        <div className="home-box-1 d-flex justify-content-center align-items-center">
            <div className="card w-50" id="CardId" >
                <div className="card-header text-light">User Login</div>
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
                                <label className="form-label text-light">Password :</label>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input className="form-control text-light"></input>
                                    <span className="input-group-text bi bi-eye-slash-fill"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    )
}