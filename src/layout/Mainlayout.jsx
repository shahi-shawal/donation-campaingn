import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;