import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <PublicRoute><SignUp /></PublicRoute>,
            },
            {
                path: "/login",
                element: <PublicRoute><Login /></PublicRoute>,
            },
            {
                path: "/quiz",
                element: <PrivateRoute><Quiz /></PrivateRoute>,
            },
            {
                path: "/quiz/result",
                element: <PrivateRoute><Result /></PrivateRoute>,
            },
        ]
    },
]);

export default router;