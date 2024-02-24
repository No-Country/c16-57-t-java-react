import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";

const ButtonGeneric = ({
    text,
    to,
    variant = 'contained',
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

  return (
    <div className="flex flex-col w-full font-custom drop-shadow-2xl" >
      <Link to={to} delay={2500}>
        <button className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
         {img && <img src={img} alt={`Imagen de ${img} de Verdumarket`} className={imgClassName}/>
 }         <p >{text}</p>
        </button>
      </Link>
    </div>
  )
}

export default ButtonGeneric;