import { useAuth } from "../../contexts/auth";
import styles from "./Layout.module.css"


export const Layout = () =>{
    const state = useAuth();
    console.log(state);

    
    return( 
        <div className={state.logado?styles.dark:styles.light}>
        {state.logado?
    <h1 className={state.logado?styles.dark:styles.light}>Aqui voce verá a cor da fonte</h1> 
    :
    <h1 className={state.logado?styles.dark:styles.light}>Aqui voce verá a cor da fonte</h1>}
    </div>
    
    );
};