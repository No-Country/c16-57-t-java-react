import { useLocation } from "react-router-dom"
import { historial } from "../../services/json/historial"
import { Link } from "react-router-dom";

export default function HistorialCompras() {
    let {state} = useLocation();
    console.log(state)
   const   Orden =  historial.find((orden)=> orden.idOrden === state.idOrden)
   console.log(Orden)
      return (
    <div className="text-center">
      <Link to={'/comprador/history'} className="absolute left-3">
      <svg className="rotate-180 fill-[#4dc6c6]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={25} height={25}>     
                         <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3
                         -32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                     
        </Link>      
        <p >{Orden.nombre}</p>
        <p className="text-2xl">${Orden.carrito.precioTotal}</p>
        <p className="text-xs">Dirección:{Orden.direccion}</p>
        <p className="text-xs text-gray-400 mb-4">{Orden.fechaHora}</p>
       <hr className="border-dashed border-y border-[#9bc5a7]"/>

       <ul className="flex flex-col items-start mt-4">
       {Orden.carrito.listadoItems.map(lista=>(
        <li key={lista.idProducto} className="text-[14px] text-start mb-4">
            <h6 className="text-[#455dbd]">{lista.nombreProducto}</h6>
            <p >Cantidad:{lista.cantidad}</p>
            <p className="text-green-500">${lista.precio}</p>
        </li>
       ))}
        </ul>
    </div>
  )
}
