import PropTypes from "prop-types"
import styles from "./CardCeva.module.css"

export const CardCeva = ({dados}) =>{
    console.log("dentro do card",{dados})


return (
<div className={styles["card"]} key={dados.id}>
<div className={styles.thumbnail}>
  <img className={styles.image} src={(dados.image_url===null)? "imagem alternativa":dados.image_url} alt={dados.name} />
</div>
<h2 className={styles["card__title"]}>{dados.name}</h2>
<div className={styles.description}>
  <CardDescriptionItem title="description:" text={dados.description} />
  <CardDescriptionItem title="abv:" text={dados.abv} />
  <CardDescriptionItem title="ibu:" text={dados.ibu} />
</div>
</div>
);
}

const CardDescriptionItem = ({ title, text }) => {
    return (
      <div className={styles.cardDescItem}>
        <span className={styles["card__spec-title"]}>{title}</span>
        <span className={styles["card__spec-value"]}>{text}</span>
      </div>
    );
  };