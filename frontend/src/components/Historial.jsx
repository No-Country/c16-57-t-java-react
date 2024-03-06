
import { Link } from "react-router-dom";
import { historial } from "../services/json/historial";


export default function Historial() {
  
  console.log(historial)
  return (
  
    <ul className="w-full flex flex-col gap-3 text-xs">
        {historial.map((orden=>
            <Link key={orden.idOrden}  to='/comprador/history/pedidos'  state={{idOrden:orden.idOrden}}>
            <p className="text-xs text-gray-400 text-[10px]">{orden.fechaHora}</p>
            <hr className="w-screen absolute left-0"/>
             <section className="mt-2">
             <h5>{orden.nombre}</h5>
             <p>Contacto:{orden.celularVendedor}</p>
             <section className="flex justify-between">
              <p>Estado :{orden.estadoOrden}</p>
              <p className="text-green-500">{orden.precio}$</p>
             </section>
               
             </section>
              
              
              
            </Link>
        ))}
    </ul>
  )
}
