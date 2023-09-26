
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donationcard = ({datas}) => {
    const {
          id,
        picture,
        title,
        category,
        card_bg,
        text_color,
        category_bg,
        price,
        button_bg
      } = datas;
    return (
        <div>
         <div className=''>
        <div className=" mt-6 flex flex-row card card-compact shadow-xl" style={{backgroundColor:card_bg}}>
          <div>
          <figure>
            <img
              src={picture}
              alt="Shoes"
            />
          </figure>
          </div>
          <div className="mt-6 ml-4" >
            <h2 className="w-[100px] p-1 card-title" style={{color:text_color, backgroundColor:category_bg}}>{category}</h2>
            <p  className="font-bold text-xl">{title}</p>
            <p style={{color:text_color}} className="font-bold text-xl">${price}</p>
            <div className='mt-2 w-28 text-white font-semibold p-2 rounded-lg' style={{backgroundColor:button_bg}}>
            <Link to={`/category/${id}`}><button>View Details</button></Link>
          </div>
          </div>
          
        </div>
      </div>
        </div>
    );
};

Donationcard.propTypes = {
    datas: PropTypes.object
};

export default Donationcard;