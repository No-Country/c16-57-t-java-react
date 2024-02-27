import { useCallback,useRef,useState } from "react";
import { searchVegetales } from "../services/vegetales";


export const useVegetal = ({search}) =>{

  const [vegetales,setVegetales] = useState([]);
  const [loading,setLoading] = useState(false);
 const [error,setError] = useState(null);
  const previousSearch = useRef(search); // 

  const getVegetales =  useCallback( async ({search}) =>{

    if(search === previousSearch.current) return;

    try{
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newVegetales = await searchVegetales({search})
      setVegetales(newVegetales);
    } catch(e){
      setError(e.message);
    }

    finally{
      setLoading(false);
    }
  },[])

 
  
  return {vegetales,getVegetales,loading}
}