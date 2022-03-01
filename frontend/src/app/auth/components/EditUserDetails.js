import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { editUser } from "../action/authAction";

const EditUserDetails = ({ auth: { user }, editUser }) => {
  const [formData, setFormData] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    address: user ? user.address : "",
    password: user ? user.password : "",
    roles: user ? user.roles : "",
    cart: user ? user.cart : "",
  });

  const { name, email, address, password, roles, cart } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser({ name, email, address, password, roles, cart }, user.id);
  };
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-2"></div>
        <div className="col">
          <h3 className="text-center">Edit User Details Here</h3>
          <a href="/" className="btn btn-dark">
            Back To Home
          </a>
          <p></p> <p></p> <p></p>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address <sup>*</sup>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Fullname <sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fullname"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={address}
                onChange={onChange}
              />
            </div>
            <div>
              <input
                type="submit"
                className="col-12 btn btn-primary"
                value="Save"
              />
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

EditUserDetails.propTypes = {
  auth: PropTypes.object.isRequired,
  editUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { editUser })(EditUserDetails);
