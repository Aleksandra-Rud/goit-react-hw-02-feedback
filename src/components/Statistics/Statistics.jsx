import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notifications";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    {total > 0 ? (
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.positive}>Good: {good}</span>
        </li>
        <li className={s.item}>
          <span className={s.middle}>Neutral: {neutral}</span>
        </li>
        <li className={s.item}>
          <span className={s.negative}>Bad: {bad}</span>
        </li>
        <li className={s.item}>
          <span className={s.sum}>Total: {total}</span>
        </li>
        <li className={s.item}>
          <span className={s.percents}>Positive feedback: {percentage} %</span>
        </li>
      </ul>
    ) : (
      <Notification message={"No feedback given"} />
    )}
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
