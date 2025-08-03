import {useTheme} from "@/app/hooks/useTheme"
import React from 'react';

export const ChartContainer: React.FC<{
  title: string;
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ title, isLoading, children, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } ${className}`}>
      <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      {isLoading ? (
        <div className="h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};