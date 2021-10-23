import React from "react";
import PropTypes from "prop-types";
import s from "./Notifications.module.css";

const Notification = ({ message }) => {
  return <p className={s.notice}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;