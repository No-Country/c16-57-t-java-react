import SearchForm from "@components/SearchForm"
import ButtonGeneric from "@components/ButtonGeneric"
import peras from '../../assets/verduras/pepino.png'
const CompradorVerduras = () => {
  
  const verduras =[
    {
      "nombre": "Tomate",
      "id": "12",
      "vendedor": "Verduleria El Tomate",
      "Unidad": "true",
      "precio":Math.random()*10,
  
    },
    {
      "nombre": "Lechuga",
      "id": "13",
      "vendedor": "Verduleria La Lechuga",
      "Unidad": "true",
      "precio":Math.random()*10,
  
    },
    {
      "nombre": "Espinaca",
      "id": "14",
      "vendedor": "Verduleria La Espinaca",
      "Unidad": "true",
      "precio":Math.random()*10,
  
    },
    {
      "nombre": "Perejil",
      "id": "15",
      "vendedor": "Verduleria El Perejil",
      "Unidad": "true",
      "precio":Math.random()*10,
  
    },
    {
      "nombre": "Verduras de hoja",
      "id": "41",
      "vendedor": "Verduleria Las Verduras de Hoja",
      "Unidad": "false"
    },
    {
      "nombre": "Cebolla",
      "id": "43",
      "vendedor": "Verduleria La Cebolla",
      "Unidad": "true",
      "precio":Math.random()*15,
    },
    {
      "nombre": "Zanahoria",
      "id": "44",
      "vendedor": "Verduleria La Zanahoria",
      "Unidad": "true",
      "precio":Math.random()*15,
    },
    {
      "nombre": "Remolacha",
      "id": "45",
      "vendedor": "Verduleria La Remolacha",
      "Unidad": "true"
    },
    {
      "nombre": "Rucula",
      "id": "46",
      "vendedor": "Verduleria La Rucula",
      "Unidad": "true",
      "precio":Math.random()*13,
    },
    {
      "nombre": "Apio",
      "id": "47",
      "vendedor": "Verduleria El Apio",
      "Unidad": "true",
      "precio":Math.random()*17,
    },
    {
      "nombre": "Puerro",
      "id": "48",
      "vendedor": "Verduleria El Puerro",
      "Unidad": "true",
      "precio":Math.random()*17,
    },
    {
      "nombre": "Calabaza",
      "id": "49",
      "vendedor": "Verduleria La Calabaza",
      "Unidad": "true",
      "precio":Math.random()*17,
    },
    {
      "nombre": "Batata",
      "id": "50",
      "vendedor": "Verduleria La Batata",
      "Unidad": "true",
      "precio":Math.random()*17,
    }
  
  ]
  
    return (
  
      <>
      <section className="h-2/8  sticky top-0 text-center w-full mb-4 z-20 bg-[#F6F6F6] rounded-lg">
          <h1 className='text-3xl font-custom font-medium text-accent mb-2'>Verduras</h1>
          <SearchForm/>
      </section>
      <section className="flex flex-col h-6/8 gap-3 ">
  {verduras.map((fruta,index)=>{
    return(
      <div className="">
  
      <ButtonGeneric key={fruta.id} text={fruta.nombre} text2={fruta.Unidad?"por unidad":"por kilo"} img={peras} imgClassName="rounded-full size-14" size="landscape" className="" to={`/comprador/${fruta.nombre}`}/>
      
      </div>
    )
  })}
  
      </section>
      </>
    )
  }
  
  export default CompradorVerduras