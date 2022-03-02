import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container-fluid m-0">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mb-4 text">Food Delivery</h1>
              <p className="lead">
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <hr />

              <Link to="/auth/register" className="btn btn-lg btn-info me-2">
                Sign Up
              </Link>
              <Link to="/auth/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
