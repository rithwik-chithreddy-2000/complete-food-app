import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addFood } from "../actions/foodActions";
export const AddFood = ({ addFood }) => {
  const [formData, setFormData] = useState({
    foodName: "",
    foodCost: "",
    description: "",
    foodPic: "",
    foodType: "",
  });
  const { foodName, foodCost, description, foodPic, foodType } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(foodType);
    addFood({ foodName, foodCost, description, foodPic, foodType }, navigate);
  };
  return (
    <div className="row" >
      <div className="col-3"></div>
      <div className="col">
        <h3>Add new food details</h3>
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
              onChange={onChange}
              aria-describedby="foodPicHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foodType" className="form-label">
              Food type
            </label>
            <select className="form-select" onChange={onChange} name="foodType">
              <option value="DEFAULT"></option>
              <option>INDIAN</option>
              <option>CHINESE</option>
              <option>MEXICAN</option>
            </select>
          </div>
        
          {/* <button type="submit" className="btn btn-primary">
            Save new food details
          </button> */}
          <input
              type="submit"
              className="col-12 btn btn-primary"
              value="Save new food details"
            />
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

AddFood.propTypes = {
  addFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addFood,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
