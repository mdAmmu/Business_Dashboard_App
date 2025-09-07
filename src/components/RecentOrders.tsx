import React from 'react';
import { User, ExternalLink } from 'lucide-react';

const RecentOrders: React.FC = () => {
  const orders = [
    {
      id: 1,
      customer: 'Gladys Lawson',
      amount: '$200.00',
      date: '14 Mar 2024 11:50 AM',
    },
    {
      id: 2,
      customer: 'Arlene McCoy',
      amount: '$159.00',
      date: '14 Mar 2024 11:50 AM',
    },
    {
      id: 3,
      customer: 'Cody Fisher',
      amount: '$300.00',
      date: '14 Mar 2024 11:50 AM',
    },
    {
      id: 4,
      customer: 'Jerome Bell',
      amount: '$450.00',
      date: '14 Mar 2024 11:50 AM',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors flex items-center space-x-1">
          <span>View all</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{order.customer}</p>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900">{order.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;