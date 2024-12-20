import "./Nabar.css"
import logo from "/logo.png"

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="index.html" className="brand">
                        <img src={logo} alt="React Quiz App Logo" />
                        <h3>React Quiz App</h3>
                    </a>
                </li>
            </ul>
            <div className="account">
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <a href="signup.html">Signup</a>
                {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
            </div>
        </nav>
    );
};

export default Navbar;