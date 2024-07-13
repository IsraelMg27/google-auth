import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

function Home({ user }) {
    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={`display-4 text-primary ${styles.heading}`}>Home</h1>
            <div className={`card ${styles.form_container}`}>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <h2 className="h4 text-primary">Profile</h2>
                        <img src={user.picture} alt="profile" className={`rounded-circle mb-3 ${styles.profile_img}`} />
                    </div>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                defaultValue={user.name}
                                className="form-control"
                                placeholder="UserName"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                defaultValue={user.email}
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-primary" onClick={logout}>
                                Log Out
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
