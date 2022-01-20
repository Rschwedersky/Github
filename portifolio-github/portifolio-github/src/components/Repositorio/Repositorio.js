import PropTypes from "prop-types";
import styles from "./Repositorio.module.css"


export const Repositorio = ({dados, destacar}) => {
  return (
    <>
    {dados.map((item) => (
    <article className={styles.card} style={destacar===item.id?{backgroundColor: "lightblue"  }:{ }} key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      </article> ))}
      </>
  );
    }
    
  Repositorio.propTypes = {

  };
  
