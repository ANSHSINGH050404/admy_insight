import {useTheme} from "@/app/hooks/useTheme"
import {Search} from "lucide-react"

export const SearchInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}> = ({ value, onChange, placeholder = 'Search...', className = '' }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`relative ${className}`}>
      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
        isDark ? 'text-gray-400' : 'text-gray-500'
      }`} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`pl-10 pr-4 py-2 rounded-lg border text-sm ${
          isDark 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
};