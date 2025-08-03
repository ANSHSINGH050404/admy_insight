import React from 'react';
import { DollarSign, Users, Target, TrendingUp } from 'lucide-react';
import { useDashboard } from '../../hooks/useDashboard';
import { MetricCard } from './MetricCard';
import { LoadingSkeleton } from '../ui/LoadingSkeleton';

interface MetricsGridProps {
  isLoading: boolean;
}

export const MetricsGrid: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { data } = useDashboard();
  
  const metrics = [
    { title: 'Total Revenue', icon: DollarSign, key: 'revenue' as const },
    { title: 'Active Users', icon: Users, key: 'users' as const },
    { title: 'Conversions', icon: Target, key: 'conversions' as const },
    { title: 'Growth Rate', icon: TrendingUp, key: 'growth' as const }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {isLoading ? (
        Array.from({ length: 4 }, (_, i) => (
          <LoadingSkeleton key={i} />
        ))
      ) : (
        metrics.map((metric) => (
          <MetricCard
            key={metric.key}
            title={metric.title}
            value={data?.metrics[metric.key].value || '0'}
            change={data?.metrics[metric.key].change || 0}
            icon={metric.icon}
          />
        ))
      )}
    </div>
  );
};