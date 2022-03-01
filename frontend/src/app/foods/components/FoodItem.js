import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFoodById, deleteFoodById } from "../actions/foodActions";

export const FoodItem = ({
  auth: { isAuthenticated, user },
  food: { food },
  getFoodById,
  deleteFoodById,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getFoodById(id);
  }, [getFoodById, id]);

  const navigate = useNavigate();

  const onClick = (e) => {
    deleteFoodById(food.id, navigate);
  };
  const onClick1 = (e) => {
    console.log("button clicked");
    navigate("/foods/update-food");
  };
  return food ? (
    <div className="row food-details-container">
      <div className="col">
        <img
          src={food.foodPic}
          className="card-img-top d-inline-block"
          alt={food.foodName}
        />
      </div>
      <div className="col">
        <Link to="/" className="btn btn-light mr-auto">
          Back To Foods
        </Link>

        <div>
          <h3>{food.foodName}</h3>
          <h1>₹ {food.foodCost}</h1>
          <h2>{food.foodType}</h2>

          <div>{food.description}</div>
          {isAuthenticated && user.isAdmin && (
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={onClick1}
              >
                Update Item
              </button>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={onClick}
              >
                delete Item
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <h4>No Food Found</h4>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodById: PropTypes.func.isRequired,
  deleteFoodById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
  auth: state.auth,
});

const mapDispatchToProps = { getFoodById, deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
