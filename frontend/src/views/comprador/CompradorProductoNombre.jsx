import { useParams } from "react-router-dom"
import { productos } from "../../services/vegetales"
import { useEffect } from "react"
import uvas from "../../assets/frutas/naranjas.png"
import peras from "../../assets/frutas/naranjaUn.png"
import Product from "../../components/Product"
const CompradorProductoNombre = () => {
const { nombre } = useParams()

useEffect(() => {

}, [nombre])
const result = productos.filter(producto => producto.nombre === nombre)

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

    {result.map((fruta,index)=>{
      return(
        
      
      <Product key={fruta.id} nombre={fruta.nombre} vendedor={fruta.vendedor} unidad={fruta.unidad}  precio={fruta.precio} img={peras} imgClassName="rounded-full  relative mt-1 mr-0.5"className="" />
          
          
        )
      })}
      </section>
      <section className="h-2/5">

      </section>
    </div> 
  )
}

export default CompradorProductoNombre