import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddToCartButton from "../../cart/components/AddToCartButton";

const DisplayFoodCard = ({
  food: { id, foodName, foodPic },
  auth: { user, isAuthenticated },
}) => {
  return (
    <div className="d-inline-block col-sm-6 col-md-4 col-lg-3">
      <div className="card mx-2 mb-3">
        <div className="card-img-container">
          <Link to={`/foods/${id}`}>
            <img
              src={foodPic}
              className="card-img-top d-inline-block"
              alt={foodName}
            />
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
          <div className="mx-auto">
            {isAuthenticated && !user.isAdmin && (
              <AddToCartButton foodId={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayFoodCard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFoodCard);
