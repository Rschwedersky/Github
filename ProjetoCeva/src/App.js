
import styles from './App.module.css';
import React,{useEffect,useState} from 'react'
import { CardCeva } from './components/CardCeva';


function App() {
  const [listaCevas, setListaCeva] = useState([]);
  const [listaCevasFiltrada, setListaCevaFiltrada] = useState([]);
  
  useEffect(() => {
  fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
 .then(response => response.json())
 .then(objeto => {setListaCeva(objeto)
    setListaCevaFiltrada(objeto)
})
 .catch(erro => console.log('CATCH: ' + erro))
 //console.log(listaCevas[1], listaCevasFiltrada)
}, []);

  
  return (
    <>
    <div />
    <div className={styles.container}>
      
      <h1 className={styles.pageTitle}>All Cevas</h1>
      <div className={styles.cardGrid}>
        {listaCevasFiltrada.map((item) => <CardCeva dados={item} />)}
      </div>
    </div>
  </>
  );
}

export default App;
