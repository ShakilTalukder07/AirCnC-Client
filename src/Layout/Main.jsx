import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Main;