import React from 'react';
import { ChevronDown } from 'lucide-react';

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Sales Overview</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Yearly</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="h-80 flex items-end justify-between space-x-2">
        {/* Simple bar chart representation */}
        {[4, 6, 5, 8, 9, 6, 10, 13, 8, 12, 14, 16].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${height * 12}px` }}
            />
            <span className="text-xs text-gray-500 mt-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Monthly sales data for the current year
      </div>
    </div>
  );
};

export default SalesChart;