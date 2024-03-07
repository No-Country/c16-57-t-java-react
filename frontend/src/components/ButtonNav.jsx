import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";
import { RightArrow } from "./Icons/RightArrow";

const ButtonNav = ({
    /* texto a mostrar */
    text,
    /* ruta */
    to,
    /* variant = 'contained'| 'outlined' | 'transparent' */
    variant = 'contained',
    /* size = 'small' | 'medium' | 'large' */
    size = 'medium',
    /* para estilos adicionales pasados como props */
    className = '',
}) => {
  const variantClasses = {
    'contained': 'bg-primary text-primary-content',
    'outlined': 'border-2 border-primary',
    'transparent': 'bg-transparent',
  }; 

  const sizeClasses = {
    'small': 'h-8 p-1 text-sm',
    'medium': 'h-12 p-2 text-base',
    'large': 'h-14 p-2 text-xl',
  };

  const baseClasses = "rounded-xl aspect-square w-full"

  return (
    <div className="flex flex-col w-full gap-2 hover:scale-105 active:scale-105">
      <Link to={to} className="shadow-xl rounded-xl py-2  px-2">
        <button className='flex justify-center items-center  w-full relative text-[#095012] '>
          {text} 
          <RightArrow/>
        </button>
      </Link>
    </div>
  )
}

export default ButtonNav;