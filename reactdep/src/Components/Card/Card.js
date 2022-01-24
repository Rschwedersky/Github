import { useAuth } from "../../contexts/auth";
import { Botao, Li} from './Card.styles';



export const Card = ()=>{
    const {dados, dark, handleSeguindo} = useAuth();
    
    return(
        <ul>
            {dados.map((e)=>
            <Li key={e.id}>
                <h2>{e.nome}</h2>
                <h2>{e.descricao}</h2>
                <Botao dark={dark} seguindo={e.seguindo} onClick={()=>handleSeguindo(e)}>{e.seguindo?'Deixar de seguir':'Seguir'}</Botao>
             </Li>)}
        </ul>
    );

};