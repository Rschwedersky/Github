
import './App.css';
import Hello from './components/HelloWorld/Hello';
import {Greeting} from "./components/Greeting";


function App() {

  return (
    <div className="App">
      <Greeting name = "jose" lastName = "hahaha" />
      <Hello/>
      
    </div>
  );
}

export default App;
