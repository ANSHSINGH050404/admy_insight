import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}

export const CustomTooltip: React.FC<{
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}> = ({ active, payload, label }) => {
  const { isDark } = useTheme();

  if (active && payload && payload.length) {
    return (
      <div className={`p-3 rounded-lg border shadow-lg ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};