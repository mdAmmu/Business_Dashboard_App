import React from 'react';

const BillDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bill Details</h2>
        <p className="text-gray-600">Bill details functionality coming soon.</p>
        <div className="mt-8 p-12 bg-gray-50 rounded-lg">
          <div className="text-gray-400 text-6xl mb-4">📋</div>
          <p className="text-gray-500">This section will contain detailed billing information and reports.</p>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;