import { useParams } from "react-router-dom"
import { searchVegetalesByName } from "../../services/vegetales"
import { useEffect, useState } from "react"
import uvas from "../../assets/frutas/naranjas.png"
import peras from "../../assets/frutas/naranjaUn.png"
import Product from "../../components/Product"
const CompradorProductoNombre = () => {

const [result,setResult]= useState([])
  const { nombre } = useParams()

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await searchVegetalesByName({nombre});
      setResult(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  

  fetchData();
}, [nombre])


console.log(result)
return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <section className=" flex flex-col items-center h-2/5 mb-6">
          
          <h1 className="text-center justify-start text-2xl font-custom-200 text-accent mb-2">
            {nombre}
        </h1>
        <img src={uvas} alt="" className="rounded-3xl h-[150px] drop-shadow-2xl"/>
          </section>
          <section className="grid grid-cols-2 h-4/5 items-start gap-2">

    {result.map(f=>{
      return(
        
      
      <Product key={f.idProductoGenerico} nombre={f.nombreProducto} vendedor={`La ${f.nombreProducto} Loca`} unidad={f.tipoUnidad}  precio={Math.random()*9} img={peras} imgClassName="rounded-full  relative mt-1 mr-0.5"className="" />
          
          
        )
      })}
      </section>
      <section className="h-2/5">

      </section>
    </div> 
  )
}

export default CompradorProductoNombre