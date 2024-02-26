


 function ListOfVegetal({vegetales}) {
  return (
     <ul className="w-full flex flex-col gap-3">
        {
            vegetales.map(vegetal => (
                <li key={vegetal.id} 
                className="flex gap-2 justify-star items-center 
                relative bg-white p-2 rounded-xl shadow-md">
                    <img src={vegetal.poster} alt={`Una imagen de ${vegetal.title}`}
                     width={70} height={70}
                    />
                    <section>
                      <h3>{vegetal.title}</h3>
                      <p className="text-sm">Por Kg</p>
                    </section>
                    
                    <button 
                    className="absolute right-2 ">
                      <svg className="ad"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={25} height={25}>     
                         <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3
                         -32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                     
                    </button>
                    
                </li>
            ))
        }
     </ul>
  )
}

function VegetalesNoResults(){
    return (
        <p>No hay Resultados</p>
    )
}

export function Vegetales ({vegetales}){
    const hasVegetales = vegetales?.length > 0;
    return (
        hasVegetales
         ? <ListOfVegetal vegetales={vegetales}/>
         : <VegetalesNoResults/>
    )
}