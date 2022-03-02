import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { addCart, deleteCartItem } from "../action/cartActions";

const AddToCartButton = ({
  foodId,
  addCart,
  deleteCartItem,
  user: { cart },
}) => {
  // const cart = user && user.cart;
  if (!cart) return <div>No items in the cart</div>;

  const countQuantity = (arr, val) =>
    arr.reduce((count, food) => (food.id === val ? count + 1 : count), 0);

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
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { addCart, deleteCartItem };

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);
