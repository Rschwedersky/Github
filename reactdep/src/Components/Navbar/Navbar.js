import { useAuth } from "../../contexts/auth";
import { useTheme } from 'styled-components';

export const Navbar = (estado) =>{
    const state = useAuth();
    const {colors} = useTheme();
    
    console.log('nav', colors.primary.light);
    
 
 return(<>
 <h2>Nome da Aplicação</h2>
 {state.dark?
    <button onClick={()=>state.setDark(false)}>{'Light'}</button>
    :
    <button onClick={()=>state.setDark(true)}>{'Dark'}</button>}
 
 </>   
    );
};