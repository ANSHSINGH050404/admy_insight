
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../hooks/useDashboard';
import { useTheme } from '../../hooks/useTheme';
import { ChartContainer } from './ChartContainer';
import { CustomTooltip } from './CustomTooltip';


export const UsersChart: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { data } = useDashboard();
  const { isDark } = useTheme();

  return (
    <ChartContainer title="User Acquisition" isLoading={isLoading}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data?.revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
          <XAxis dataKey="month" stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};