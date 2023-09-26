import { useEffect, useState } from "react";
import { getToLs } from "../Utility/localstorage";
import { Chart } from "react-google-charts";
const Statistics = () => {
  const [dataed,setData]= useState([]);
  const [datas, setdatas]= useState([]);
  fetch('Data/Data.json')
  .then(res=>res.json())
  .then(data=> setData(data))
  
  
  useEffect(()=>{
     const getLsdata = getToLs();
     if (dataed.length>0) {
      const showdata =[];
       for (const id of getLsdata) {
      const showingdata= dataed.find((find)=> find.id === id)
        showdata.push(showingdata)
       }
       setdatas(showdata)
     }

  },[dataed])
 
  
  const data = [
    ["Donate", "Donation"],
    ["Your Donate", datas.length],
    ["Total Donate", dataed.length-datas.length],
   
  ];
   
    return (
        <div>
            <Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"400px"}
    />
        
        </div>
    );
};

export default Statistics;