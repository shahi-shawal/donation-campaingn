
import Banner from "../Components/Banner/Banner";
// import DisplayCategory from "../Components/Category/DisplayCategory";
import { useState } from "react";


const Home = () => {
    const [datas,setDatas]= useState([]);
    fetch('./Data/Data.json')
    .then(res=>res.json())
    .then(data=> setDatas(data))
    return (
        <div>
            <Banner datas={datas}></Banner>
            {/* <DisplayCategory datas={datas}></DisplayCategory> */}
        </div>
    );
};

export default Home;