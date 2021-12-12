import PropTypes from "prop-types"
export const Greeting = ({name, lastName, logger}) => {
    return <p>ola{name}{lastName}</p>;
};
 Greeting.propTypes = {
     name: PropTypes.string,
     lastName: PropTypes.string.isRequired,
 };
 Greeting.defaultProps = {
     name: "estranho",
 };