import  {perfil}  from "../services/json/perfil"
export default function Perfil() {
   const newPerfil = perfil[0];
  return (
    <div className="flex flex-col gap-2">
        
            
        <img src={newPerfil.Foto} 
         className="w-[200px] rounded-[300px] mx-auto "/>
        
      <p className="text-xl ">{newPerfil.nombre}</p>

      <hr className="border-[#85d878]"/>
      <section className="flex flex-col  ">
      <span>{newPerfil.direccion.pais}</span>
      <span>{newPerfil.direccion.ciudad}</span>
      <span>{newPerfil.direccion.calle}</span>
      <span>{newPerfil.direccion.codigo_postal}</span>
      </section>
      
      <p>{newPerfil.correo}</p>
      <p>{newPerfil.telefonos[0].numero}</p>
    </div>
  )
}
