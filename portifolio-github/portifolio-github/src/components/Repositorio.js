import PropTypes from "prop-types";
export const Repositorio = ({titulo, descricao, destacar}) => {
    return (<article> 
      <h3>{titulo}</h3>
      <span>{destacar? "Destaque": "não é destaque"}</span>
      <p>{descricao}</p>
      </article>)
  };
  Repositorio.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    destaque: PropTypes.bool.isRequired,
  };
  