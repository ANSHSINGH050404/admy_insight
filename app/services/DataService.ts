import type { Campaign, DashboardData } from '../types/interfaces';


export class DataService {
  static generateMockData(): DashboardData {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const revenueData = months.map(month => ({
      month,
      revenue: Math.floor(Math.random() * 50000) + 30000,
      users: Math.floor(Math.random() * 2000) + 1000,
      conversions: Math.floor(Math.random() * 500) + 200
    }));

    const channelData = [
      { name: 'Google Ads', value: 35, color: '#4285f4' },
      { name: 'Facebook', value: 28, color: '#1877f2' },
      { name: 'Instagram', value: 20, color: '#e4405f' },
      { name: 'LinkedIn', value: 12, color: '#0077b5' },
      { name: 'Twitter', value: 5, color: '#1da1f2' }
    ];

    const campaigns = [
      { id: 1, name: 'Summer Sale 2024', status: 'Active' as const, budget: '$15,000', spent: '$12,450', roi: '324%', clicks: 45678 },
      { id: 2, name: 'Brand Awareness Q3', status: 'Active' as const, budget: '$8,500', spent: '$7,230', roi: '198%', clicks: 23456 },
      { id: 3, name: 'Product Launch', status: 'Paused' as const, budget: '$25,000', spent: '$18,900', roi: '412%', clicks: 67890 },
      { id: 4, name: 'Holiday Special', status: 'Completed' as const, budget: '$12,000', spent: '$11,800', roi: '287%', clicks: 34567 },
      { id: 5, name: 'Retargeting Campaign', status: 'Active' as const, budget: '$5,500', spent: '$4,200', roi: '156%', clicks: 19876 }
    ];

    return {
      revenueData,
      channelData,
      campaigns,
      metrics: {
        revenue: { value: '$423,592', change: 12.3 },
        users: { value: '18,429', change: 8.1 },
        conversions: { value: '3,847', change: -2.4 },
        growth: { value: '24.8%', change: 5.7 }
      }
    };
  }

  static exportToCsv(data: Campaign[], filename: string = 'campaign-data.csv') {
    const csvContent = data.map(campaign => 
      Object.values(campaign).join(',')
    ).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}