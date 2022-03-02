import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

export const DisplayCart = ({ user }) => {
  const cart = user && user.cart;
  if (!cart) return <div>No items in the cart</div>;

  const totalCost = (arr) => arr.reduce((sum, food) => sum + food.foodCost, 0);
  const unique = (arr) => [
    ...new Map(arr.map((item) => [JSON.stringify(item), item])).values(),
  ];

  return (
    <div className="view-cart-container">
      <h3>Your cart content</h3>
      {cart.length > 0 ? (
        <Fragment>
          <table className="table">
            <thead>
              <tr>
                <th>Sl no</th>
                <th>Foor name</th>
                <th>Food cost</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            {unique(cart).map((food, index) => (
              <CartItem key={food.id} food={food} index={index} />
            ))}
            <tfoot>
              <th colSpan="4"></th>
              <th>₹ {totalCost(cart)}</th>
            </tfoot>
          </table>

          <button className="btn btn-primary" click="checkout()">
            Checkout
          </button>
        </Fragment>
      ) : (
        <h4>Nothing added to the cart...</h4>
      )}
    </div>
  );
};

DisplayCart.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCart);
