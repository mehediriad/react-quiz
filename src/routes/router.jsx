import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";


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
        ]
    },
]);

export default router;