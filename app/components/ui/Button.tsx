import {useTheme} from "@/app/hooks/useTheme"

export const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}> = ({ 
  children, 
  onClick, 
  variant = 'secondary', 
  size = 'md', 
  disabled = false,
  className = ''
}) => {
  const { isDark } = useTheme();
  
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: isDark 
      ? 'bg-gray-700 border border-gray-600 text-white hover:bg-gray-600' 
      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: isDark 
      ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};
