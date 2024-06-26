import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


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