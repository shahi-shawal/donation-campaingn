
import PropTypes from 'prop-types';
import Category from './Category';


const DisplayCategory = ({datas,catval}) => {
    // console.log(catval);
    return (
        <div>
            <div className="mx-w-4xl mx-auto px-8">
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 lg:mt-12">
           {
            catval.length >0?
            catval.map((datas)=> <Category key={datas.id} datas={datas}></Category>)
            :
            datas.map((datas)=> <Category key={datas.id} datas={datas}></Category>)
                }
            </div>
           </div>
        </div>
    );
};

DisplayCategory.propTypes = {
    datas:PropTypes.object,
    catval:PropTypes.object
};

export default DisplayCategory;