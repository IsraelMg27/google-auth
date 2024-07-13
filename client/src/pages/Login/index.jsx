import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
    const googleAuth = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
    };

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={`display-4 text-primary ${styles.heading}`}>Log in Form</h1>
            <div className={`card ${styles.form_container}`}>
                <div className="card-body">
                    <h2 className="h4 text-primary text-center mb-4">Members Log in</h2>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary mb-3">Log In</button>
                        </div>
                    </form>
                    <div className="text-center my-3">or</div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-primary mb-3" onClick={googleAuth}>
                            <img src="./images/google.png" alt="google icon" className="me-2" />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <p className="text-muted">
                            New Here? <Link to="/signup" className="text-primary">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
