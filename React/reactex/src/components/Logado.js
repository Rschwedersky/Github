import { useState } from "react";
import { useAuth } from "../contexts/auth"

export const Logado = () =>{
    const state = useAuth();
    console.log(state);


    
    return( 
        <div>
            <div>{state.logado&&`Usuario logado: ${state.nome}`}</div>
        {state.logado?
    <button onClick={()=>state.setLogado(false)}>{'logado'}</button>
    :
    <button onClick={()=>state.setLogado(true)}>{'logar'}</button>}
    </div>
    
    );
};