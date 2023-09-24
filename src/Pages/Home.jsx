import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";


const Home = () => {
    const data = useLoaderData()
    const datas= data.data;
    console.log(datas);
    return (
        <div>
            <Banner></Banner>
           <div className="mx-w-4xl mx-auto px-8">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
                {
                    datas.map((datas)=> <Category key={datas.id} datas={datas}></Category>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;