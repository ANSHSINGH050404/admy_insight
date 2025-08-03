
import React from 'react';
import { useDashboard } from '../../hooks/useDashboard';
import { MetricsGrid } from '../metrics/MetricsGrid';
import { RevenueChart } from '../charts/RevenueChart';
import { UsersChart } from '../charts/UsersChart';
import { TrafficSourcesChart } from '../charts/TrafficSourcesChart';
import { ConversionsChart } from '../charts/ConversionsChart';
import { DataTable } from '../table/DataTable';
export const DashboardContent: React.FC = () => {
  const { data, isLoading } = useDashboard();

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Metrics Cards */}
      <MetricsGrid isLoading={isLoading} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RevenueChart isLoading={isLoading} />
        <UsersChart isLoading={isLoading} />
      </div>

      {/* Traffic Sources and Conversions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <TrafficSourcesChart isLoading={isLoading} />
        <ConversionsChart isLoading={isLoading} />
      </div>

      {/* Data Table */}
      {!isLoading && data && <DataTable campaigns={data.campaigns} />}
    </main>
  );
};