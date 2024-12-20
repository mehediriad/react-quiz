import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";


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
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/quiz",
                element: <Quiz />,
            },
            {
                path: "/quiz/result",
                element: <Result />,
            },
        ]
    },
]);

export default router;