import manzanas from '../assets/verduras/zucchini.png'
import ButtonGeneric from '@components/ButtonGeneric'

 function ListOfVegetal({vegetales}) {
  return (
     <ul className="w-full flex flex-col gap-3">
        {
            vegetales.map(vegetal => (

                <ButtonGeneric key={vegetal.id} text={vegetal.nombre} text2={vegetal.Unidad?"por unidad":"por kilo"} img={manzanas} imgClassName="rounded-full size-14" size="landscape" className=""/>
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