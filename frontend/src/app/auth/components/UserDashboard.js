import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../action/authAction";

const UserDashboard = ({ auth: { user }, deleteUser }) => {
  const onClick = (e) => {
    deleteUser(user.id);
  };
  return (
    <section className="container">
      <div>
        <h2 align="center">USER DETAILS</h2>
        <a href="/" className="btn btn-dark">
          Back To Home
        </a>
        <p></p>
        <p></p>
        <table align="center">
          <tr align="center">
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          <tr align="center" text="">
            <td>{user ? user.name : ""}</td>
            <td>{user ? user.email : ""}</td>
            <td>{user ? user.address : ""}</td>
          </tr>
        </table>
      </div>

      <div className="my-2" align="center">
        <Link to="/edituser" className="btn btn-dark">
          <i className="fas fa-user-minus" />
          Edit User
        </Link>
      </div>
      <p></p>
      <p></p>
      <div className="my-2" align="center">
        <button className="btn btn-danger">
          <i onClick={onClick} className="fas fa-solid fa-eraser" />
          Delete User
        </button>
      </div>
    </section>
  );
};

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
