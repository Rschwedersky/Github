
import styles from './App.module.css';
import Hello from './components/HelloWorld/Hello';
import {Greeting} from "./components/Greeting";
import React,{useEffect,useState} from 'react'


function App() {
  const [listaCevas, setListaCeva] = useState([]);
  const [listaCevasFiltrada, setListaCevaFiltrada] = useState([]);
  



  useEffect(() => {
  fetch(`https://api.punkapi.com/v2/beers?page=5&per_page=80`)
 .then(response => response.json())
 .then(objeto => {setListaCeva(objeto)
    setListaCevaFiltrada(objeto)
})
 .catch(erro => console.log('CATCH: ' + erro))
 //console.log(listaCevas[1], listaCevasFiltrada)
}, []);

  
  return (
    <div className={styles.App}>
      <Greeting name = "jose" lastName = "hahaha" />
      <Hello/>
      
    </div>
  );
}

export default App;
