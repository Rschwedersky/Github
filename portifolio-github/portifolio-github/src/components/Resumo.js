import PropTypes from "prop-types";
export const Resumo = ({img, name}) => {
    return (<div>
      <img src={img} alt={name} />
      <h2>Minha Foto</h2>
      </div>)
  };

  Resumo.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  