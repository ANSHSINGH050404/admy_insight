import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
}


export const MetricCard: React.FC<{
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
}> = ({ title, value, change, icon: Icon }) => {
  const { isDark } = useTheme();
  const isPositive = change > 0;
  
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-900' : 'bg-blue-50'}`}>
          <Icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <div className={`flex items-center text-sm font-medium ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}>
          {isPositive ? '+' : ''}{change}%
          <TrendingUp className={`h-4 w-4 ml-1 ${isPositive ? '' : 'rotate-180'}`} />
        </div>
      </div>
      <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {title}
      </h3>
      <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </p>
    </div>
  );
};

