import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Pages/Login/Signup";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home";
import Footer from "../Components/Shared/Footer/Footer";
import ErrorPage from "../Components/Shared/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            // {
            //     path: '/about',
            //     element: <AboutUs></AboutUs>,
            // },
            // {
            //     path: '/contact',
            //     element: <Contact></Contact>,
            // },
            {
                path: '/signUp',
                element: <Signup></Signup>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/footer",
                element: <Footer></Footer>,
            },
        ]
    }
])

export default router;