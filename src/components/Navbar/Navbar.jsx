import { Link } from "react-router-dom";
import "./Nabar.css"
import logo from "/logo.png"

const Navbar = () => {
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
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>

                <Link to="/signup">Signup</Link>
                {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
            </div>
        </nav>
    );
};

export default Navbar;