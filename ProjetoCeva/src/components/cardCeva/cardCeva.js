import PropTypes from "prop-types"
import styles from "./CardCeva.module.css"
import React,{useEffect,useState} from 'react'

const COLOR_MAP = {
    1:'#FFE699', 11:'#D77200',
    2:'#FFD978', 12:'#D06900',
    3:'#FFCA5A',
    4:"#FFBF43",
    5:'#FCB124',
    6:'#F8A700',
    7:'#F39C00',
    8:'#EA8F00',
    9:'#E68500',
    10:'#DE7C00',
}

export const CardCeva = ({dados}) =>{
  
   
return (
<div className={styles["card"]} key={dados.id}>
<div className={styles.thumbnail}>
  <img className={styles.image} src={(dados.image_url===null)? "imagem alternativa":dados.image_url} alt={dados.name} />
</div>
<h2 className={styles["card__title"]}>{dados.name}</h2>
<div className={styles.description}>
  <CardDescriptionItem title="abv:" text={dados.abv} />
  <CardDescriptionItem title="ibu:" text={dados.ibu} />
  <CardDescriptionItem1 title="description:" text={dados.description} />
  <span className={styles["card__spec-title"]}>Srm</span><span className={styles["dot"]} style={{backgroundColor:COLOR_MAP[dados.srm]}}></span>
</div>
</div>
);
}

const CardDescriptionItem1 = ({ title, text }) => {
    const [showMore, setShowMore] = useState(true);
    const [textShown, setTextShown] = useState (text.slice(0,40));
    const handleShowMore = () =>{ setShowMore(!showMore);
        showMore === false? setTextShown(text.slice(0,40)): setTextShown(text);
    };  
    
    return (
      <div className={styles.cardDescItem}>
        <span className={styles["card__spec-title"]}>{title}</span>
        <span className={styles["card__spec-value"]}>{textShown}</span>
        <button onClick={handleShowMore}>{showMore?"Show more":"Show less"}</button>
      </div>
    )
    
  };

  const CardDescriptionItem = ({ title, text }) => {
       return (
        <div className={styles.cardDescItem}>
          <span className={styles["card__spec-title"]}>{title}</span>
          <span className={styles["card__spec-value"]}>{text}</span>
        </div>
      )
  };