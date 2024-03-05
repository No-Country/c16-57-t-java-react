import manzanas from '../assets/verduras/zucchini.png'
import ButtonGeneric from '@components/ButtonGeneric'

 function ListOfVegetal({vegetales}) {
  console.log(vegetales)
    return (
     
     <ul className="w-full flex flex-col gap-3">
       
        {
            vegetales.map(vegetal => (

                <ButtonGeneric key={vegetal.idProductoGenerico} text={vegetal.nombreProducto} text2={vegetal.tipoUnidad?"por unidad":"por kilo"} img={manzanas} imgClassName="rounded-full size-14" size="landscape" to={`/comprador/${vegetal.nombreProductoGenerico}`} className=""/>
            ))
        }
     </ul>
  )
}

function VegetalesNoResults(){

    return (
        <p className=' text-center text-custom-100 text-xl text-accent'>No hay Resultados</p>
    )
}

export function Vegetales ({vegetales}){
    const hasVegetales = vegetales?.length >= 1;
    return (
       vegetales && hasVegetales
         ? <ListOfVegetal vegetales={vegetales}/>

         : 
         (
!vegetales? <p></p>:
             <VegetalesNoResults/>
         )
    )
}