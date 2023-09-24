import PropTypes from "prop-types";

const Category = ({ datas }) => {
  const {
    picture,
    title,
    category
  } = datas;
  return (
    <div>
      <div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{category}</h2>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default Category;
