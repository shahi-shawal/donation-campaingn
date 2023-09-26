import { useEffect, useState } from "react";
import { getToLs } from "../Utility/localstorage";
import Donationcard from "../Components/DonationCard/Donationcard";
// import Statistics from "./Statistics";


const Donation = () => {
    const [data,setData]= useState([]);
    const [datas, setdatas]= useState([]);
    const [isShow,setisShow]= useState(false)
    fetch('./Data/Data.json')
    .then(res=>res.json())
    .then(data=> setData(data))
    
    
    useEffect(()=>{
       const getLsdata = getToLs();
    //    console.log(getLsdata);
       if (data.length>0) {
        const showdata =[];
         for (const id of getLsdata) {
        const showingdata= data.find((find)=> find.id === id)
          showdata.push(showingdata)
         }
         setdatas(showdata)
       }

    },[data])
    // console.log(datas);
    return (
        <div className="mx-w-4xl mx-auto px-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grids-cols-2 gap-6">
                {
                   isShow? datas.map((datas)=> <Donationcard key={datas.id} datas={datas}></Donationcard>)
                   :
                    datas.slice(0,4).map((datas)=> <Donationcard key={datas.id} datas={datas}></Donationcard>)
                }
            </div>
            <div className="text-center mt-6">
           {
                datas.length >4 && !isShow && ( <button onClick={()=>setisShow(!isShow)} className="btn btn-success text-white">See All</button>)
              
           }
            </div>
        </div>
    );
};

export default Donation;