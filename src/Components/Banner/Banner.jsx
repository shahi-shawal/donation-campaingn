
import { useEffect, useState } from "react";
import DisplayCategory from "../Category/DisplayCategory";

const Banner = ({datas}) => {
    // console.log(datas);
    const [defaultt, setDefault]=useState()
    const [searchval, setSearchval]= useState(defaultt)
    const [catval, setcatval]= useState([])

   
    // const handelClick=()=>{
    //  const filteritem= catval.filter((filter)=> console.log(filter.category))
    //  console.log(filteritem);
    // }
    useEffect(()=>{
      const defa= datas.map((de)=> de.category)
      setDefault(defa)
    },[datas])
    const handelsub=e=>{
      e.preventDefault()

        const catD= datas.filter((catitem)=> catitem.category === searchval)
        setcatval(catD);
        console.log(catD);
    
      // console.log(e.target.category.value);
      console.log(searchval);
    }
    const handelChange=e=>{

      console.log(e.target.value);
      setSearchval(e.target.value);
    }
    
  return (
    <div>
      <div
        className="hero h-[85vh]"
        style={{
          backgroundImage: "url(./images/volunteer.avif)",
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center mt-8">
              {/* <div className="input-group w-full max-w-xs text-black">
                <input onChange={e=> setSearchval(e.target.value)}
                  type="text"
                  placeholder="Search here…"
                  className="input input-bordered"
                />
                <button onClick={()=>handelClick()} className="btn text-white bg-red-500 border-red-500 hover:bg-red-500 text-white border-red-500  w-20">Search</button>
              </div> */}
              <div  className="input-group w-full max-w-xs text-black">
                <form onSubmit={handelsub}>
                <input onChange={handelChange}
                  type="text"
                  placeholder="Search here…"
                  name="category"
                  className="input input-bordered"
                />
                <button className="btn text-white bg-red-500 border-red-500 hover:bg-red-500 text-white border-red-500  w-20">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisplayCategory datas={datas} catval={catval}></DisplayCategory>

    </div>
  );
};

export default Banner;
