import { useState,useEffect } from "react";

export const useSearch = () =>{

    const [search, updateSearch] = useState('');
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(search.match(/^\d+$/)){
            setError('No se puede buscar con números')
            return
        } 
        setError(null)

    },[search])

    return {search,updateSearch,error}
}