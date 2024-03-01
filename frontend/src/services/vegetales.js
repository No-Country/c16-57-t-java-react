const API_KEY = '123456';
const API_Comida = 'https://www.themealdb.com/api/json/v1/1/search.php?s' // =<Comida> para buscar 

const productos = [
    {
        "id": 1,
        "nombre": "Manzana",
        "precio": 2.5,
        "vendedor": "Frutas Doña María",
        "unidad": false
    },
    {
        "id": 2,
        "nombre": "Banana",
        "precio": 1.2,
        "vendedor": "Frutería El Paraíso",
        "unidad": true
    },
    {
        "id": 3,
        "nombre": "Uva",
        "precio": 3.8,
        "vendedor": "Don Juan Frutas",
        "unidad": true
    },
    {
        "id": 4,
        "nombre": "Pera",
        "precio": 2.0,
        "vendedor": "Frutas Express",
        "unidad": false
    },
    {
        "id": 5,
        "nombre": "Naranja",
        "precio": 1.0,
        "vendedor": "La Fruterita",
        "unidad": true
    },
    {
        "id": 6,
        "nombre": "Kiwi",
        "precio": 2.5,
        "vendedor": "Kiwi Fresh",
        "unidad": true
    },
    {
        "id": 7,
        "nombre": "Mango",
        "precio": 2.3,
        "vendedor": "Mango Lovers",
        "unidad": true
    },
    {
        "id": 8,
        "nombre": "Fresa",
        "precio": 1.5,
        "vendedor": "Fresas Del Valle",
        "unidad": false
    },
    {
        "id": 9,
        "nombre": "Melón",
        "precio": 4.0,
        "vendedor": "Melones Dorados",
        "unidad": true
    },
    {
        "id": 10,
        "nombre": "Sandía",
        "precio": 2.0,
        "vendedor": "Sandías Frescas",
        "unidad": true
    },
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
      },
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


export async function searchVegetales({search}){

    return (
        productos.filter(producto => producto.nombre.toLowerCase().includes(search.toLowerCase()))
    )

    // try{
    //     const response = await fetch(API_Comida + `=${search}`)
    //     const json = await response.json();
    //     const vegetales = json.meals;
    //     console.log(vegetales);
        
    //     return vegetales?.map(vegetal =>(
    //     {
    //         id:vegetal.idMeal,
    //         title:vegetal.strMeal,
    //         poster:vegetal.strMealThumb 

    //     }))
    // } catch(error){
    //     throw new Error('Error searching for vegetales')
    // }
}