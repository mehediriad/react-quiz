import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
]);

export default router;