import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../action/authAction";

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    password2: "",
  });
  const { name, email, address, password, password2 } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
    } else {
      register({ email, name, password, address }, navigate);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-2"></div>
        <div className="col">
          <h3 className="text-center">New users please register here</h3>
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
              <label htmlFor="password" className="form-label">
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
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

            <div className="row">
              <div className="col mb-3">
                <label htmlFor="houseno" className="form-label">
                  House No
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House No"
                  name="houseno"
                  onChange={onChange}
                  disabled
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  name="street"
                  onChange={onChange}
                  disabled
                />
              </div>
            </div>

            <div className="row">
              <div className="col mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  onChange={onChange}
                  disabled
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  onChange={onChange}
                  disabled
                />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="zipcode" className="form-label">
                Zipcode
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Zipcode"
                name="zipcode"
                onChange={onChange}
                disabled
              />
            </div>
            <input
              type="submit"
              className="col-12 btn btn-primary"
              value="Register"
            />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { register })(Register);
