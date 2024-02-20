import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge";

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
    <div className="flex flex-col w-full gap-2">
      <Link to={to} className="bottom-2">
        <button className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
          {text}
        </button>
      </Link>
    </div>
  )
}

export default ButtonNav;