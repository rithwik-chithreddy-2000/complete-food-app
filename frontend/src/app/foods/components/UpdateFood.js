import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFood } from "../actions/foodActions";

export const UpdateFood = ({ food: { food }, updateFood }) => {
  const [formData, setFormData] = useState({
    foodName: food.foodName,
    foodCost: food.foodCost,
    description: food.description,
    foodPic: food.foodPic,
    foodType: food.foodType,
  });
  const { foodName, foodCost, description, foodPic, foodType } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    updateFood(
      food.id,
      { foodName, foodCost, description, foodPic, foodType },
      navigate
    );
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col">
        <h3>Edit food details</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="foodName" className="form-label">
              Food name
            </label>
            <input
              type="text"
              className="form-control"
              id="foodName"
              name="foodName"
              value={foodName}
              onChange={onChange}
              aria-describedby="foodNameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foodCost" className="form-label">
              Food cost
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text">₹</span>
              <input
                type="number"
                className="form-control"
                id="foodCost"
                name="foodCost"
                value={foodCost}
                onChange={onChange}
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="foodDesc" className="form-label">
              Food description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              aria-describedby="foodDescHelp"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="foodPic" className="form-label">
              Food picture URL
            </label>
            <input
              type="web"
              className="form-control"
              id="foodPic"
              name="foodPic"
              value={foodPic}
              onChange={onChange}
              aria-describedby="foodPicHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foodPic" className="form-label">
              Food type
            </label>
            <select className="form-select" name="foodType" onChange={onChange} value={foodType}>
              <option value="DEFAULT"></option>
              <option>INDIAN</option>
              <option>CHINESE</option>
              <option>MEXICAN</option>
            </select>
          </div>
          <input
            type="submit"
            className="col-12 btn btn-primary"
            value="Update food details"
          />
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

UpdateFood.propTypes = {
  updateFood: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { updateFood };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFood);
