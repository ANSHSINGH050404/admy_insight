// Types
export interface MetricData {
  title: string;
  value: string;
  change: number;
  icon: string;
}

export interface ChartData {
  month: string;
  revenue: number;
  users: number;
  conversions: number;
}

export interface ChannelData {
  name: string;
  value: number;
  color: string;
}

export interface Campaign {
  id: number;
  name: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: string;
  spent: string;
  roi: string;
  clicks: number;
}

export interface DashboardData {
  revenueData: ChartData[];
  channelData: ChannelData[];
  campaigns: Campaign[];
  metrics: {
    revenue: { value: string; change: number };
    users: { value: string; change: number };
    conversions: { value: string; change: number };
    growth: { value: string; change: number };
  };
}