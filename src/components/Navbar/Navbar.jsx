import { Link } from "react-router-dom";
import "./Nabar.css"
import logo from "/logo.png"
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user,logout } = useAuth()
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" className="brand">
                        <img src={logo} alt="React Quiz App Logo" />
                        <h3>React Quiz App</h3>
                    </Link>
                </li>
            </ul>
            <div className="account">
                {
                    user ? (
                        <>
                            <span className="material-icons-outlined" title="Account">
                                account_circle
                            </span>

                            <p>{user && user.displayName}</p>
                            <button onClick={logout}>
                                <span className="material-icons-outlined" title="Logout"> logout </span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )
                }

            </div>
        </nav>
    );
};

export default Navbar;