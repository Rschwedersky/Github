import PropTypes from "prop-types";
import styles from "./Repositorio.module.css"

export const Repositorio = ({dados, destacar}) => {
  return (
    <>
    {dados.map((item) => (
    <article className={styles.card} key={item.id}>
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
  
