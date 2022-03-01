import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType} mx-2`}>
      <i className="fas fa-exclamation-triangle"></i>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(Alert);
