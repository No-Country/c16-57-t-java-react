import SearchForm from "../../components/SearchForm";
import ButtonGeneric from "../../components/ButtonGeneric";
import nueces from '../../assets/frutos_secos/nueces.png'
const CompradorFrutosSecos = () => {
    const frutosSecos = [
      {
        "nombre": "Avellana",
        "id": "19",
        "vendedor": "Almacen El Avellano",
        "Unidad": "true",
        "precio":Math.random()*12,
  
      },
      {
        "nombre": "Almendra",
        "id": "20",
        "vendedor": "Almacen La Almendra",
        "Unidad": "true",
        "precio":Math.random()*12,
  
      },
      {
        "nombre": "Nuez",
        "id": "21",
        "vendedor": "Almacen La Nuez",
        "Unidad": "true",
        "precio":Math.random()*12,
  
      },
      {
        "nombre": "Castaña",
        "id": "22",
        "vendedor": "Almacen La Castaña",
        "Unidad": "true",
        "precio":Math.random()*12,
      },
      
    ]
    return (
      <>
      <section className="h-2/8  sticky top-0 text-center w-full mb-4 z-20 bg-[#F6F6F6] rounded-lg">
          <h1 className='text-3xl font-custom font-medium text-accent mb-2'>Frutas</h1>
          <SearchForm/>
      </section>
      <section className="flex flex-col h-6/8 gap-3 ">
  {frutosSecos.map((fruta,index)=>{
    return(
      <div className="">
  
      <ButtonGeneric key={index} text={fruta.nombre} text2={fruta.Unidad?"por unidad":"por kilo"} img={nueces} imgClassName="rounded-full size-14" size="landscape" className="" to={`/comprador/${fruta.nombre}`}/>
      
      </div>
    )
  })}
  
      </section>
      </>
    );
    
  }
  
  export default CompradorFrutosSecos