import { useAuth } from "../../contexts/auth";
import { useTheme } from 'styled-components';
import { Botao, Title } from './Navbar.styles';

export const Navbar = (estado) =>{
    const state = useAuth();
    const {colors} = useTheme();
    
    console.log('nav', colors.primary.light);
    
 
 return(<>
 <Title>Nome da Aplicação</Title>
    <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>{state.dark?'Light':'Dark'}</Botao>
    </>
    );
};