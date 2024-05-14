import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='pt-4 pb-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;