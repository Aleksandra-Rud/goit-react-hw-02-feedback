import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <>
      <ul>
        {options.map(option => (
            <button
                key={option}
                type="button"
                onClick={onLeaveFeedback}
                className={s.btn}
            >
              {option}
            </button>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.prototypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

