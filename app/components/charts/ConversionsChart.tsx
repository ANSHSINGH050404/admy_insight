
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../hooks/useDashboard';
import { useTheme } from '../../hooks/useTheme';
import { ChartContainer } from './ChartContainer';
import { CustomTooltip } from './CustomTooltip';
export const ConversionsChart: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { data } = useDashboard();
  const { isDark } = useTheme();

  return (
    <ChartContainer title="Conversion Rates" isLoading={isLoading} className="lg:col-span-2">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data?.revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
          <XAxis dataKey="month" stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="conversions" 
            stroke="#f59e0b" 
            strokeWidth={3}
            dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};