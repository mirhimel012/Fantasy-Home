import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";


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
                element: <Profile></Profile>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            
        ]
    }
]);
export default router;