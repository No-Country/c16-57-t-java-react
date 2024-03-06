const API_Comida = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef' // =<Comida> para buscar 

export async function searchVegetales({search}){

    try{
        const response = await fetch(API_Comida + `=${search}`)
        const json = await response.json();
        const vegetales = json.meals;
        console.log(vegetales);
        
        return vegetales?.map(vegetal =>(
        {
            id:vegetal.idMeal,
            title:vegetal.strMeal,
            poster:vegetal.strMealThumb 

        }))
    } catch(error){
        throw new Error('Error searching for vegetales')
    }
}