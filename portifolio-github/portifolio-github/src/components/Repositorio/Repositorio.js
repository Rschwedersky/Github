import PropTypes from "prop-types";
import styles from "./Repositorio.module.css"


export const Repositorio = ({dados, destacar, func}) => {
  return (
    <>
    {dados.map((item) => (
    <article onClick={() => func(item.id)} className={styles.card} style={destacar===item.id?{backgroundColor: "lightblue"  }:{ }} key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      </article> ))}
      </>
  );
    }
    
  Repositorio.propTypes = {

  };
  
