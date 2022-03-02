import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFoods, getFoodByType } from "../../foods/actions/foodActions";
import DisplayFoods from "../../foods/components/DisplayFoods";
import Landing from "../../core/components/layouts/Landing";

const Home = ({ auth: { user }, food, getFoods, getFoodByType }) => {
  const [foodType, setFoodType] = useState();

  useEffect(() => {
    switch (foodType) {
      case "CHINESE":
      case "MEXICAN":
      case "INDIAN":
        getFoodByType(foodType);
        break;
      default:
        getFoods();
        break;
    }
  }, [getFoods, getFoodByType, foodType]);

  const foods = food && food.foods;
  if (!foods) return <div>No food in the page</div>;

  const onChange = (e) => {
    setFoodType(e.target.value);
  };

  return (
    <section className="container">
      {user !== null ? (
        <div className="text-center">
          <h1 className="large text-primary">Food Items</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">
                <select
                  name="foodType"
                  value={foodType}
                  onChange={onChange}
                  className="form-select"
                >
                  <option defaultValue>All</option>
                  <option value="INDIAN">Indian</option>
                  <option value="CHINESE">Chinese</option>
                  <option value="MEXICAN">Mexican</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <DisplayFoods allFoods={foods} />
            </div>
          </div>
        </div>
      ) : (
        <Landing />
      )}
    </section>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  food: PropTypes.object,
  getFoods: PropTypes.func.isRequired,
  getFoodByType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  food: state.food,
});

export default connect(mapStateToProps, { getFoods, getFoodByType })(Home);
