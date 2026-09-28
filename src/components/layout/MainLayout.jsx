import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import Toast from '../common/Toast';
import { Search } from 'lucide-react';
import { useBank } from '../../context/BankContext';

export default function MainLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useBank();

  return (
    <div className="min-h-screen bg-bank-bg flex flex-col antialiased">
      {/* Global Toast */}
      <Toast />

      {/* Sidebar */}
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-[250px] flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
        {/* Header */}
        <Header onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />

        {/* Mobile Full-Width Search Input Bar directly beneath header */}
        <div className="md:hidden px-4 py-2.5 bg-white border-b border-[#E6EFF5]">
          <div className="relative flex items-center">
            <Search className="w-4.5 h-4.5 text-[#718EBF] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for something"
              className="w-full h-11 rounded-full bg-[#F5F7FA] text-sm text-[#343C6A] placeholder:text-[#8BA3CB] focus:outline-none focus:ring-2 focus:ring-[#1814F3]/20"
              style={{ paddingLeft: '42px', paddingRight: searchQuery ? '36px' : '16px' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <span className="text-xs font-bold text-[#718EBF]">✕</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Route Pages with Framer Motion Transition */}
        <main className="flex-1 px-4 py-5 sm:p-6 lg:p-8 xl:p-9 max-w-[1600px] w-full mx-auto overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
