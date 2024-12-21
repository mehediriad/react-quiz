import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const {signin} = useAuth()

  const handleLogin = (e) =>{
    e.preventDefault();
    setLoading(true)
    const email = e.target.email.value;
    const password = e.target.password.value;

    signin(email,password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      if(user){
        navigate("/")
        setLoading(false)
      }
    })
    .catch(() => {
      setLoading(false)
    });
  }
    return (
        <div>
           <h1 className="text-4xl font-bold">Login to your account</h1>
        <div className="column">
          <div className="illustration">
            <img src="./images/login.svg" alt="Login" />
          </div>
          <form onSubmit={handleLogin} className="login form" action="#">
            <div className="textInput">
              <input required name="email" type="text" placeholder="Enter email" />
              <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
              <input required name="password" type="password" placeholder="Enter password" />
              <span className="material-icons-outlined"> lock </span>
            </div>

            <button disabled={loading} type="submit" className="button">
              <span>{loading ? "Loading..." : "Sign In"}</span>
            </button>

            <div className="info"> Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
          </form>
        </div>
        </div>
    );
};

export default Login;