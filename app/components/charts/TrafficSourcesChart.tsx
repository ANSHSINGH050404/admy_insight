import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../hooks/useDashboard';
import { useTheme } from '../../hooks/useTheme';
import { ChartContainer } from './ChartContainer';



export const TrafficSourcesChart: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { data } = useDashboard();
  const { isDark } = useTheme();

  return (
    <ChartContainer title="Traffic Sources" isLoading={isLoading}>
      <div className="relative">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data?.channelData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data?.channelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {data?.channelData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.name}
                </span>
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
};
