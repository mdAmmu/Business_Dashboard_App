import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const DriverDetails: React.FC = () => {
  const [drivers] = useState([
    { id: 1, name: 'John Doe', amount: '$15.00' },
    { id: 2, name: 'Steve Smith', amount: '$32.00' },
    { id: 3, name: 'Emma Johnson', amount: '$23.00' },
    { id: 4, name: 'Michael Brown', amount: '$10.00' },
  ]);

  const [orders] = useState([
    { id: '0001', time: '10:00 AM', amount: '$15.00' },
    { id: '0002', time: '10:00 AM', amount: '$23.00' },
    { id: '0003', time: '12:00 PM', amount: '$15.00' },
    { id: '0004', time: '12:00 PM', amount: '$15.00' },
    { id: '0005', time: '12:00 PM', amount: '$20.00' },
  ]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Driver List */}
      <div className="xl:col-span-1">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">04/25/2024</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">Driver</h3>
          
          <div className="space-y-4">
            {drivers.map((driver) => (
              <div key={driver.id} className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-900">{driver.name}</span>
                <span className="font-semibold text-gray-900">{driver.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order List */}
      <div className="xl:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Order L</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;