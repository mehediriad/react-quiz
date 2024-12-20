import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/Layout";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <App />,
            }
        ]
    },
]);

export default router;