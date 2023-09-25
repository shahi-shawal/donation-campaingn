import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SingleCetegorydetails = () => {
  const [singlecard, setSingle] = useState([]);
  const cetegory = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  console.log(id);
  console.log(cetegory);

  useEffect(() => {
    const finditem = cetegory.find((item) => item.id === intId);
    setSingle(finditem);
  }, [id, cetegory]);
  const{picture,title,button_bg,description,price}=singlecard

  return (
    <div className=" ">
       <div className="flex flex-col justify-center items-center  m-20 px-20">
         <div className="relative">           
            <img src={picture}
              alt="Shoes" className="w-[1000px] h-[100vh] "
            />
            <button className="py-3 text-white px-6 rounded-lg bottom-0 m-2 absolute" style={{backgroundColor:button_bg}}>Donate ${price}</button>
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
