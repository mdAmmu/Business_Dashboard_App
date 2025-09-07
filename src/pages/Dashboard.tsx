import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import SalesChart from '../components/SalesChart';
import RecentOrders from '../components/RecentOrders';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'TOTAL SALES',
      value: '$26,450',
      change: '+5%',
      isPositive: true,
    },
    {
      title: 'TOTAL REVENUE',
      value: '$12,300',
      change: '+3%',
      isPositive: true,
    },
    {
      title: 'NEW ORDERS',
      value: '245',
      change: '+6%',
      isPositive: true,
    },
    {
      title: 'NEW CUSTOMERS',
      value: '1,560',
      change: '+4%',
      isPositive: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts and Orders */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Sales Overview */}
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        
        {/* Recent Orders */}
        <div className="xl:col-span-1">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;