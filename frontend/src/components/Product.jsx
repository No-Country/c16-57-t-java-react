import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";
import { RightArrow } from "./Icons/RightArrow";
import { useState } from "react";
import IconStars from "./Icons/IconStars";

const Product = ({
  nombre,
  vendedor,
  precio,
  unidad,
  to,
  variant ='contained',
  size = 'large',
  className = '',
  img,
  imgClassName ='w-[130px] h-[117.44px] bg-cover bg-no-repeat relative mx-auto my-0',
  
}) => {
  const variantClasses = {
    'contained': 'bg-white text-accent hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out',
    'outlined': 'border-2 border-primary',
    'transparent': 'bg-transparent',
  }; 
  
  const sizeClasses = {
    // 'small': 'h-8 p-1 text-sm',
    // 'medium': 'size-25 p-2 text-base',
    'large': 'h-[156px] text-xl',
    'landscape': 'h-[64px] text-xl items-center  w-full flex flex-row '
  };

  const baseClasses = "rounded-xl aspect-square w-full"
  const [isFavorito, setIsFavorito] = useState(false);
  
  const toggleFavorito = () => {
    setIsFavorito(!isFavorito);
  }

  return (
    <div className="flex flex-col w-full font-custom-200 drop-shadow-2xl" >
      <Link to={to}>
        <button className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
         {img && <img src={img} alt={`Imagen de ${img} de Verdumarket`} className="relative mb-14 object-cover"/>
 }         
 <button onClick={toggleFavorito} className="left-32 absolute inset-0 border-red-400">
      {isFavorito ? '❤️' : '🤍'}
    </button>
 <div className=" absolute inset-0 mt-24 text-center  justify-center">
    <p className="text-center font-custom-200 -mb-2 text-[16px]">
          ${precio}{" "}{unidad?"por Un.":"por Kg."}
    </p>
  {vendedor && <p className="text-[14px]  font-custom font-light">{vendedor}</p>} 
  <div className="flex flex-row justify-center ">
    <IconStars/>
    <IconStars/>
    <IconStars/>
    <IconStars/>
    <IconStars/>
    </div>
  </div>      
  </button>
      </Link>
   
    </div>
  )
}

export default Product;
/*
 <div className='main-container w-[156px] h-[156px] bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] mx-auto my-0'>
      <div className='w-[31px] h-[31px] bg-[url(../assets/images/f8ea058c5ba9e6156b5ec36427495b05d417b07b.png)] bg-contain bg-no-repeat opacity-70 relative z-[4] mt-[3.5px] mr-0 mb-0 ml-[2.485px]' />
      <div className='w-[24px] h-[24px] relative overflow-hidden z-[5] mt-[43.5px] mr-0 mb-0 ml-[127.748px]'>
        <div className='w-[20px] h-[18.35px] bg-[url(../assets/images/708131db-58ff-4e30-98ba-2d1807a60b79.png)] bg-[length:100%_100%] bg-no-repeat relative z-[6] mt-[3px] mr-0 mb-0 ml-[2px]' />
      </div>
      <span className="flex w-[89.917px] h-[16px] justify-center items-start font-['Montserrat'] text-[14px] font-medium leading-[16px] text-[#095012] tracking-[0.4px] relative text-center overflow-hidden whitespace-nowrap mt-[4.303px] mr-0 mb-0 ml-[33.485px]">
        $ 1000 x kg
        <br />
      </span>
      <span className="flex w-[130px] h-[16px] justify-center items-start font-['Montserrat'] text-[14px] font-light leading-[16px] text-[#095012] tracking-[0.4px] relative text-center whitespace-nowrap z-[1] mt-0 mr-0 mb-0 ml-[16.14px]">
        Campos del Delta
      </span>
      <div className='w-[80px] h-[16px] bg-[url(../assets/images/b29a5cf9-abf9-4ce4-95d1-f7b15b703328.png)] bg-[length:100%_100%] bg-no-repeat relative z-[2] mt-0 mr-0 mb-0 ml-[38px]' />
      <div className='w-full h-[70.83%] bg-[url(../assets/images/b3d65f66-346b-493e-b700-eabf783240a0.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[-2.69%] left-0 z-[3]' />
    </div>
  );
*/