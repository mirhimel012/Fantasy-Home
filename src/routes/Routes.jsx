import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Details from "../components/Details";
import PrivateDetails from "../components/PrivateDetails";
import FindOffices from "../components/FindOffices";
import PrivateContact from "../components/PrivateContact";
import PrivateProfile from "../pages/PrivateProfile";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/profile',
                element: <PrivateProfile><Profile></Profile></PrivateProfile>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: "/blog/:id",
                element: <PrivateDetails><Details></Details></PrivateDetails>,
                loader: () => fetch(`/blogs.json`)
            },
            {
                path: '/find',
                element: <PrivateContact><FindOffices></FindOffices></PrivateContact>,
            },
            
        ]
    }
]);
export default router;