import { useAuth } from "../../contexts/auth";
import { useTheme } from 'styled-components';
import { Botao, Title } from './Navbar.styles';

export const Navbar = (estado) =>{
    const state = useAuth();
    
    
    
 
 return(<>
 <Title primary={!state.dark}>Nome da Aplicação
    
    
    <Botao onClick={()=>state.setCadastroAberto(true)}>Abrir Cadastro</Botao>
    
    
    
    <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>{state.dark?'Light':'Dark'}</Botao>
    </Title>
    </>
    );
};