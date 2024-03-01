import ButtonGeneric from '@components/ButtonGeneric'
import naranjas from '../../assets/frutas/naranjas.png'
import peras from '../../assets/frutas/peras.png'
import SearchForm from '../../components/SearchForm';

//! Este componente es un placeholder para la vista de frutas del comprador. debe consumir la data de frutas del backend, se realizará un JSON que simule la data de frutas para el desarrollo de la vista.

export const frutas = [
  // {
  //   "fruta": "Manzana",
  //   "precio": 2.5,
  //   "vendedor": "Frutas Doña María",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Banana",
  //   "precio": 1.2,
  //   "vendedor": "Frutería El Paraíso",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Uva",
  //   "precio": 3.8,
  //   "vendedor": "Don Juan Frutas",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Pera",
  //   "precio": 2.0,
  //   "vendedor": "Frutas Express",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Naranja",
  //   "precio": 1.0,
  //   "vendedor": "La Fruterita",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Kiwi",
  //   "precio": 2.5,
  //   "vendedor": "Kiwi Fresh",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Mango",
  //   "precio": 2.3,
  //   "vendedor": "Mango Lovers",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Fresa",
  //   "precio": 1.5,
  //   "vendedor": "Fresas Del Valle",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Melón",
  //   "precio": 4.0,
  //   "vendedor": "Melones Dorados",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Sandía",
  //   "precio": 5.0,
  //   "vendedor": "Familia Sandía",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Coco",
  //   "precio": 3.5,
  //   "vendedor": "Coco Paradise",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Papaya",
  //   "precio": 2.8,
  //   "vendedor": "Papayas Ricas",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Piña",
  //   "precio": 3.2,
  //   "vendedor": "Piñas del Caribe",
  //   "unidad": true
  // },
  // {
  //   "fruta": "Cereza",
  //   "precio": 4.5,
  //   "vendedor": "Cerezas Premium",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Limón",
  //   "precio": 1.2,
  //   "vendedor": "Limones Súper Ácidos",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Ciruela",
  //   "precio": 2.7,
  //   "vendedor": "Ciruelas Dulces",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Granada",
  //   "precio": 3.5,
  //   "vendedor": "Granadas Exóticas",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Durazno",
  //   "precio": 2.4,
  //   "vendedor": "Duraznos del Valle",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Higo",
  //   "precio": 1.8,
  //   "vendedor": "Higos Frescos",
  //   "unidad": false
  // },
  // {
  //   "fruta": "Guayaba",
  //   "precio": 2.2,
  //   "vendedor": "Guayabas Sabrosas",
  //   "unidad": false,
  // },
  {
    "nombre": "Manzana",
    "id": "1",
    "vendedor": "Fruteria La Manzana",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Pera",
    "id": "2",
    "vendedor": "Verduleria El Peral",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Naranja",
    "id": "3",
    "vendedor": "Fruteria La Naranja",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Banana",
    "id": "4",
    "vendedor": "Verduleria La Banana",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Uva",
    "id": "5",
    "vendedor": "Fruteria La Uva",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Sandia",
    "id": "6",
    "vendedor": "Verduleria La Sandia",
    "Unidad": "true",    
    "precio":Math.random()*10,

  },
  {
    "nombre": "Melon",
    "id": "7",
    "vendedor": "Fruteria El Melon",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Limón",
    "id": "8",
    "vendedor": "Verduleria El Limon",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Mango",
    "id": "9",
    "vendedor": "Fruteria El Mango",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Kiwi",
    "id": "10",
    "vendedor": "Verduleria El Kiwi",
    "Unidad": "true",
    "precio":Math.random()*10,

  },{
    "nombre": "Coco",
    "id": "23",
    "vendedor": "Almacen El Coco",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Anana",
    "id": "24",
    "vendedor": "Fruteria La Anana",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Durazno",
    "id": "25",
    "vendedor": "Fruteria El Durazno",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Cereza",
    "id": "26",
    "vendedor": "Fruteria La Cereza",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Frambuesa",
    "id": "27",
    "vendedor": "Fruteria La Frambuesa",
    "Unidad": "true",
    "precio":Math.random()*10 

  },
  {
    "nombre": "Arandano",
    "id": "28",
    "vendedor": "Fruteria El Arandano",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Zarzamora",
    "id": "29",
    "vendedor": "Fruteria La Zarzamora",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Pitahaya",
    "id": "30",
    "vendedor": "Fruteria La Pitahaya",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Granada",
    "id": "31",
    "vendedor": "Fruteria La Granada",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Ciruela",
    "id": "32",
    "vendedor": "Fruteria La Ciruela",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Higo",
    "id": "33",
    "vendedor": "Fruteria El Higo",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Mora",
    "id": "34",
    "vendedor": "Fruteria La Mora",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Frutilla",
    "id": "35",
    "vendedor": "Fruteria La Frutilla",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Pomelo",
    "id": "36",
    "vendedor": "Fruteria El Pomelo",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Mandarina",
    "id": "37",
    "vendedor": "Fruteria La Mandarina",
    "Unidad": "true",
    "precio":Math.random()*10,

  },
  {
    "nombre": "Frutos rojos",
    "id": "38",
    "vendedor": "Fruteria Los Frutos Rojos",
    "Unidad": "false",
    "precio":Math.random()*10,
    
  },
  {
    "nombre": "Frutas tropicales",
    "id": "40",
    "vendedor": "Fruteria Las Frutas Tropicales",
    "Unidad": "false",
    "precio":Math.random()*10,
  },
]


const CompradorFrutas = () => {
  return (
    <>
    <section className="h-2/8  sticky top-0 text-center w-full mb-4 z-20 bg-[#F6F6F6] rounded-lg">
        <h1 className='text-3xl font-custom font-medium text-accent mb-2'>Frutas</h1>
        <SearchForm/>
    </section>
    <section className="flex flex-col h-6/8 gap-3 ">
{frutas.map((fruta,index)=>{
  return(
    <div className="">

    <ButtonGeneric key={index} text={fruta.nombre} text2={fruta.Unidad?"por unidad":"por kilo"} img={peras} imgClassName="rounded-full size-14" size="landscape" className=""/>
    
    </div>
  )
})}

    </section>
    </>
  );
};

export default CompradorFrutas;
