import { twMerge } from "tailwind-merge";
import logoVerduMarket from  '@/assets/logoVerduMarket.png';

const AppLogo = ({
  /* variant = 'contained'| 'outlined' | 'transparent' */
  variant = 'contained',
  /* size = 'small' | 'medium' | 'large' */
  size = 'medium',
  /* para estilos adicionales pasados como props */
  className = '',
}) => {
  const variantClasses = {
    'contained': 'bg-primary/20',
    'outlined': 'border-2 border-primary',
    'transparent': 'bg-transparent',
  }; 

  const sizeClasses = {
    'small': 'w-8 h-8 p-1',
    'medium': 'w-14 h-14 p-2',
    'large': 'w-20 h-20 p-2',
  };

  const baseClasses = "rounded-lg aspect-square"

  return (
    <img 
      src={logoVerduMarket} 
      alt="Logo VerduMarket" 
      className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    />
  );
}

export default AppLogo;
