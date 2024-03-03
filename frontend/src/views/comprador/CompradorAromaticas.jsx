

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
    <div>CompradorAromaticas</div>
  )
}

export default CompradorAromaticas