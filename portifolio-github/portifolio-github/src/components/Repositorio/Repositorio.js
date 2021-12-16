import PropTypes from "prop-types";
export const Repositorio = ({dados, destacar}) => {
  return (
    <>
    {dados.map((item) => (
    <article key={item.id}>
      <h3>{item.titulo}</h3>
      <p>{item.descricao}</p>
      </article> ))}
      </>
  );
    }
    
  Repositorio.propTypes = {
    dados: PropTypes.object.isRequired,
    destaque: PropTypes.bool.isRequired,
  };
  
