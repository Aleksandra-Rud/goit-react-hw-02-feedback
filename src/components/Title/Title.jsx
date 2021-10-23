import PropTypes from "prop-types";
import s from "./Title.module.css";

const Section = ({ title, children }) => {
    return (
        <div>
            <h2 className={s.title}>{title}</h2>
              { children }
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section;