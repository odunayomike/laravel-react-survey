import { createBrowserRouter } from "react-router-dom";
import Survey from "./views/Survey";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/survey",
        element: <Survey />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

export default router;
