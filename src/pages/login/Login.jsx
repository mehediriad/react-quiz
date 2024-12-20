import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <div>
           <h1 className="text-4xl font-bold">Login to your account</h1>
        <div className="column">
          <div className="illustration">
            <img src="./images/login.svg" alt="Login" />
          </div>
          <form className="login form" action="#">
            <div className="textInput">
              <input type="text" placeholder="Enter email" />
              <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
              <input type="password" placeholder="Enter password" />
              <span className="material-icons-outlined"> lock </span>
            </div>

            <button className="button">
              <span>Submit now</span>
            </button>

            <div className="info"> Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
          </form>
        </div>
        </div>
    );
};

export default Login;