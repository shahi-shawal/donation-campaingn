import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import SingleCetegorydetails from "../Components/Category/SingleCetegorydetails";

const myCreateRouter= createBrowserRouter([{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
        path:"/",
        element:<Home></Home>
        },
        {
        path:"/donation",
        element:<Donation></Donation>,
        loader:()=>fetch('./Data/Data.json')
        },
        {
        path:"/statistics",
        element:<Statistics></Statistics>
        },
        {
        path:"/category/:id",
        element:<SingleCetegorydetails></SingleCetegorydetails>,
        loader:()=>fetch('./Data/Data.json')
        }
]
}]);

export default myCreateRouter;