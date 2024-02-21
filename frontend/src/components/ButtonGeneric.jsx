import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";

const ButtonGeneric = ({
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

    img
}) => {
  const variantClasses = {
    'contained': 'bg-primary text-primary-content',
    'outlined': 'border-2 border-primary',
    'transparent': 'bg-transparent',
  }; 

  const sizeClasses = {
    'small': 'h-8 p-1 text-sm',
    'medium': 'size-22 p-2 text-base',
    'large': 'size-25 p-2 text-xl',
  };

  const baseClasses = "rounded-xl aspect-square w-full"

  return (
    <div className="flex flex-col w-full gap-2 font-custom">
      <Link to={to} className="bottom-2">
        <button className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
         {img && <img src={img} alt={`Imagen de productos ${img} de Verdumarket`} />
 }         {text}
        </button>
      </Link>
    </div>
  )
}

export default ButtonGeneric;