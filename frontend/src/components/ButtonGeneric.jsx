import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";
import { RightArrow } from "./Icons/RightArrow";

const ButtonGeneric = ({
    text,
    text2,
    to,
    variant ='contained',
    size = 'large',
    className = '',
    img,
    imgClassName ='w-[130px] h-[117.44px] bg-cover bg-no-repeat relative mx-auto my-0',
    arrow=true
  }) => {
  const variantClasses = {
    'contained': 'bg-white text-accent   transition-colors duration-300 ease-in-out',
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

  return (
    <div className="flex flex-col w-full font-custom-200 drop-shadow-lg hover:scale-105 active:scale-105 " >
      <Link to={to}>
        <button className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
         {img && <img src={img} alt={`Imagen de ${img} de Verdumarket`} className={imgClassName}/>
 }         
 <div className={size==="landscape"?"ml-2 justify-start":""}>
  <span className={size==="landscape"?"flex justify-start font-medium":""}>{text}</span>
  {text2 && <p className="flex text-sm font-light">{text2}</p>} 
  </div>
 {arrow && 
 
        <RightArrow/>
 
 }      
  </button>
      </Link>
    </div>
  )
}

export default ButtonGeneric;