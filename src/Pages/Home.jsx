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
            <div>
                {
                    datas.map((datas)=> <Category key={datas.id} datas={datas}></Category>)
                }
            </div>
        </div>
    );
};

export default Home;