import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { addCart, countQuantity, deleteCartItem } from "../action/cartActions";

const AddToCartButton = ({
  foodId,
  addCart,
  deleteCartItem,
  auth: {
    user: { cart },
  },
}) => {
  return (
    <div>
      {countQuantity(cart, foodId) > 0 ? (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => deleteCartItem(foodId)}
          >
            -
          </button>
          <span className="px-2">{countQuantity(cart, foodId)}</span>
          <button className="btn btn-primary" onClick={() => addCart(foodId)}>
            +
          </button>
        </div>
      ) : (
        <div>
          <button className="btn btn-primary" onClick={() => addCart(foodId)}>
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

AddToCartButton.propTypes = {
  addCart: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { addCart, deleteCartItem };

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);
