import ButtonGeneric from '@components/ButtonGeneric'
import SearchForm from '@components/SearchForm'

import cilantro from '../../assets/aromaticas/cilantro.png'
const CompradorAromaticas = () => {
  
  const aromaticas =[
    {
      "nombre": "Cilantro",
      "id": "16",
      "vendedor": "Verduleria El Cilantro",
      "Unidad": "true",
      "precio":Math.random()*12,

    },
    {
      "nombre": "Albahaca",
      "id": "17",
      "vendedor": "Verduleria La Albahaca",
      "Unidad": "true",
      "precio":Math.random()*12,

    },
    {
      "nombre": "Menta",
      "id": "18",
      "vendedor": "Verduleria La Menta",
      "Unidad": "true",      "precio":Math.random()*12,

    },
    {
      "nombre": "Aromaticas",
      "id": "42",
      "vendedor": "Verduleria Las Aromaticas",
      "Unidad": "false",
       "precio":Math.random()*12,
    },
  ]
  return (
    <>
    <section className="h-2/8  sticky top-0 text-center w-full mb-4 z-20 bg-[#F6F6F6] rounded-lg">
        <h1 className='text-3xl font-custom font-medium text-accent mb-2'>Aromaticas</h1>
        <SearchForm/>
    </section>
    <section className="flex flex-col h-6/8 gap-3 ">
{aromaticas.map((fruta,index)=>{
  return(
    <div className="">

    <ButtonGeneric key={index} text={fruta.nombre} text2={fruta.Unidad?"por unidad":"por kilo"} img={cilantro} imgClassName="rounded-full size-14" size="landscape" className="" to={`/comprador/${fruta.nombre}`}/>
    
    </div>
  )
})}

    </section>
    </>
  )
}

export default CompradorAromaticas