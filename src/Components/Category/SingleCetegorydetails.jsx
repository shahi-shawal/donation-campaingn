import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {saveToLs } from "../../Utility/localstorage";


const SingleCetegorydetails = () => {
  const [singlecard, setSingle] = useState([]);
  const cetegory = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  useEffect(() => {
    const finditem = cetegory.find((item) => item.id === intId);
    setSingle(finditem);
  }, [id, cetegory]);
  const handelDonate=()=>{
    saveToLs(intId);
    alert("add successfully")
  }
  const{picture,title,button_bg,description,price}=singlecard;


  return (
    <div className=" ">
       <div className="flex flex-col justify-center items-center  m-20 px-20">
         <div className="relative hero">           
            <img src={picture}
              alt="Shoes" className="w-[1000px] h-[100vh] "
            />
            <div className=" h-16 w-[1000px] mt-[600px] hero-overlay bg-opacity-60 ">

            </div>
            <button onClick={()=>handelDonate()} className="py-3 text-white px-6 rounded-lg bottom-0 left-4 m-2 absolute" style={{backgroundColor:button_bg}}>Donate ${price}</button>
          </div>
          <div className="mt-10 px-2">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
    </div>
  );
};

export default SingleCetegorydetails;
