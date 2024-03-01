import { useState,useEffect } from "react";

export const useSearch = () =>{

    const [search, updateSearch] = useState('');
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(!search.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+$/) && search!==''){
            setError('Sólo Letras por favor!')
            return
        } 
        setError(null)

    },[search])

    return {search,updateSearch,error}
}