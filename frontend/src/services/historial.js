export async function APiHistorial({id}){

    try{
        const response = await fetch('./json/historial.json')
        const json = await response.json();
        const vegetales = json.meals;
        console.log(json);
        
        return vegetales?.map(historial =>(
        {
            id:historial.IdOrden,
            title:historial.strMeal,
            poster:historial.strMealThumb 

        }))
    } catch(error){
        throw new Error('Error searching for vegetales')
    }
}