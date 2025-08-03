import {useTheme} from "@/app/hooks/useTheme"
 export const LoadingSkeleton: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`animate-pulse p-6 rounded-xl border ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className={`h-4 rounded mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
      <div className={`h-8 rounded mb-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
      <div className={`h-4 w-1/2 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
    </div>
  );
};