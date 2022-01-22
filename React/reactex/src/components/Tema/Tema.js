
import { useAuth } from "../../contexts/auth";
import styles from "./Tema.module.css"

export const Tema = () =>{
    const state = useAuth();
    console.log(state);


    
    return( 
        <div className={state.logado?styles.dark:styles.light}>
        {state.logado?
    <button onClick={()=>state.setLogado(false)}>{'Light'}</button>
    :
    <button onClick={()=>state.setLogado(true)}>{'Dark'}</button>}
    </div>
    
    );
};