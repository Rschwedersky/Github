import { useAuth } from "../../contexts/auth";
import { useTheme } from 'styled-components';
import { Botao, Title } from './Navbar.styles';

export const Navbar = (estado) =>{
    const state = useAuth();
    
    
    
 
 return(<>
 <Title primary={!state.dark}>CaraBook
    
    
    <Botao onClick={()=>state.cadastroAberto?state.setCadastroAberto(false):state.setCadastroAberto(true)}>{state.cadastroAberto?'Fechar Cadastro':'Abrir Cadastro'}</Botao>
    
    
    
    <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>{state.dark?'Light':'Dark'}</Botao>
    </Title>
    </>
    );
};