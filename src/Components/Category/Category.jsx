import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ datas }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg,
    text_color,
    category_bg
  } = datas;
  return (
    <div>
      <Link to={`/category/${id}`}>
      <div>
        <div className="card card-compact shadow-xl" style={{backgroundColor:card_bg}}>
          <figure>
            <img
              src={picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body" >
            <h2 className="w-[100px] p-1 card-title" style={{color:text_color, backgroundColor:category_bg}}>{category}</h2>
            <p style={{color:text_color}} className="font-bold text-xl">{title}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default Category;
