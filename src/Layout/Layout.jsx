import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Loyout.css"

const LayOut = () => {
    return (
        <div>
            <Navbar />
            <main className="main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default LayOut;