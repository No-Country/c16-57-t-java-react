import ButtonGeneric from '@components/ButtonGeneric'
import naranjas from '../../assets/frutas/naranjas.png'
import peras from '../../assets/frutas/peras.png'
import SearchForm from '../../components/SearchForm';

//! Este componente es un placeholder para la vista de frutas del comprador. debe consumir la data de frutas del backend, se realizará un JSON que simule la data de frutas para el desarrollo de la vista.

const frutas = [
  {
    "fruta": "Manzana",
    "precio": 2.5,
    "vendedor": "Frutas Doña María",
    "unidad": false
  },
  {
    "fruta": "Banana",
    "precio": 1.2,
    "vendedor": "Frutería El Paraíso",
    "unidad": true
  },
  {
    "fruta": "Uva",
    "precio": 3.8,
    "vendedor": "Don Juan Frutas",
    "unidad": true
  },
  {
    "fruta": "Pera",
    "precio": 2.0,
    "vendedor": "Frutas Express",
    "unidad": false
  },
  {
    "fruta": "Naranja",
    "precio": 1.0,
    "vendedor": "La Fruterita",
    "unidad": true
  },
  {
    "fruta": "Kiwi",
    "precio": 2.5,
    "vendedor": "Kiwi Fresh",
    "unidad": true
  },
  {
    "fruta": "Mango",
    "precio": 2.3,
    "vendedor": "Mango Lovers",
    "unidad": true
  },
  {
    "fruta": "Fresa",
    "precio": 1.5,
    "vendedor": "Fresas Del Valle",
    "unidad": false
  },
  {
    "fruta": "Melón",
    "precio": 4.0,
    "vendedor": "Melones Dorados",
    "unidad": true
  },
  {
    "fruta": "Sandía",
    "precio": 5.0,
    "vendedor": "Familia Sandía",
    "unidad": true
  },
  {
    "fruta": "Coco",
    "precio": 3.5,
    "vendedor": "Coco Paradise",
    "unidad": true
  },
  {
    "fruta": "Papaya",
    "precio": 2.8,
    "vendedor": "Papayas Ricas",
    "unidad": true
  },
  {
    "fruta": "Piña",
    "precio": 3.2,
    "vendedor": "Piñas del Caribe",
    "unidad": true
  },
  {
    "fruta": "Cereza",
    "precio": 4.5,
    "vendedor": "Cerezas Premium",
    "unidad": false
  },
  {
    "fruta": "Limón",
    "precio": 1.2,
    "vendedor": "Limones Súper Ácidos",
    "unidad": false
  },
  {
    "fruta": "Ciruela",
    "precio": 2.7,
    "vendedor": "Ciruelas Dulces",
    "unidad": false
  },
  {
    "fruta": "Granada",
    "precio": 3.5,
    "vendedor": "Granadas Exóticas",
    "unidad": false
  },
  {
    "fruta": "Durazno",
    "precio": 2.4,
    "vendedor": "Duraznos del Valle",
    "unidad": false
  },
  {
    "fruta": "Higo",
    "precio": 1.8,
    "vendedor": "Higos Frescos",
    "unidad": false
  },
  {
    "fruta": "Guayaba",
    "precio": 2.2,
    "vendedor": "Guayabas Sabrosas",
    "unidad": false
  }
]


const CompradorFrutas = () => {
  return (
    <>
    <section className="h-2/8  sticky top-0 text-center w-full mb-4 z-20 bg-[#EDF3ED] rounded-lg">
        <h1 className='text-3xl font-custom font-medium text-accent mb-2'>Frutas</h1>
        <SearchForm/>
    </section>
    <section className="flex flex-col h-6/8 gap-3 ">
{frutas.map((fruta,index)=>{
  return(
    <div className="">

    <ButtonGeneric key={index} text={fruta.fruta} text2={fruta.unidad?"por unidad":"por kilo"} img={peras} imgClassName="rounded-full size-14" size="landscape" className=""/>
    
    </div>
  )
})}

    </section>
    </>
  );
};

export default CompradorFrutas;
