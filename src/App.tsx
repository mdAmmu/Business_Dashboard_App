import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import StockManagement from './pages/StockManagement';
import PaymentPage from './pages/PaymentPage';
import DriverDetails from './pages/DriverDetails';
import BillDetails from './pages/BillDetails';

export type Page = 'dashboard' | 'stock' | 'payments' | 'drivers' | 'bills';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'stock':
        return <StockManagement />;
      case 'payments':
        return <PaymentPage />;
      case 'drivers':
        return <DriverDetails />;
      case 'bills':
        return <BillDetails />;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'Dashboard';
      case 'stock':
        return 'Stock Management';
      case 'payments':
        return 'Payment';
      case 'drivers':
        return 'Driver Detail';
      case 'bills':
        return 'Bill Details';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          title={getPageTitle()} 
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;