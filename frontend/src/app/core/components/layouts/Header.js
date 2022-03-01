import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../auth/action/authAction";

const Header = ({ auth: { isAuthenticated, user }, logout }) => {
  const authLinks = (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/auth/userdashboard">
            <i className="fas fa-user" />
            {user ? user.name : ""}
          </Link>
        </li>
      </ul>

      {isAuthenticated && user.isAdmin ? (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/foods/add-food">
              Add Food
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={logout} href="/" className="nav-link">
              <i className="fas fa-sign-out-alt" />
              Logout
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/order-history">
              Order history
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart/view-cart">
              <i className="fas fa-shopping-cart" />
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={logout} href="/" className="nav-link">
              <i className="fas fa-sign-out-alt" />
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/auth/register">
            <i className="fas fa-user" />
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/auth/login">
            <i className="fas fa-sign-in-alt" />
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>FoodDelivery</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
