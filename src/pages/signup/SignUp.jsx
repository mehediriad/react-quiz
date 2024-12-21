import { Link } from "react-router-dom";
import "./SignUP.css"
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { signup, updateUser, logout } = useAuth()

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const agree = e.target.agree.checked;
        // console.log({ name, email, password, confirmPassword, agree });

        if (password.length < 6) {
            setError("Password must be 6 character long!")
            setLoading(false)
            return
        }
        if (password !== confirmPassword) {
            setError("Password Do't Match!")
            setLoading(false)
            return
        }
        if (!agree) {
            setError("Accept trems and condition!")
            setLoading(false)
            return
        }



        setError('')

        signup(email, password)
            .then((userCredential) => {

                const newUser = userCredential.user;


                if (newUser) {
                    updateUser(name)
                        .then(() => {
                            Swal.fire({
                                title: "Good job!",
                                text: "user has been created!",
                                icon: "success",
                                footer: 'Click Here to <a href="/login">Login</a>'
                            });
                            logout()
                                .then(() => {
                                    setLoading(false)
                                    e.target.reset()
                                }).catch(() => {
                                    setLoading(false)

                                });
                            setLoading(false)
                            e.target.reset()

                        }).catch(() => {
                            setError("Something went wrong!")
                            setLoading(false)
                        });
                }


            })
            .catch(() => {
                setError("Something went wrong!")
                setLoading(false)
            });



    }
    return (
        <div>
            <h1 className="text-4xl font-bold">Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src="./images/signup.svg" alt="Signup" />
                </div>
                <form onSubmit={handleSignup} className="signup form">
                    <div className="textInput">
                        <input name="name" type="text" placeholder="Enter name" />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input name="email" type="text" placeholder="Enter email" />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div>

                    <div className="textInput">
                        <input name="password" type="password" placeholder="Enter password" />
                        <span className="material-icons-outlined"> lock </span>
                    </div>

                    <div className="textInput">
                        <input name="confirmPassword" type="password" placeholder="Confirm password" />
                        <span className="material-icons-outlined"> lock_clock </span>
                    </div>

                    <div>
                        <label>
                            <input name="agree" type="checkbox" />
                            <span> I agree to the Terms & Conditions</span>
                        </label>
                    </div>

                    <button disabled={loading} type="submit" className="button">
                        <span>{loading ? "Loading..." : "Sign UP"}</span>
                    </button>

                    {
                        error &&
                        <span className="error">
                            {error}
                        </span>
                    }
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </form>




            </div>
        </div>
    );
};

export default SignUp;