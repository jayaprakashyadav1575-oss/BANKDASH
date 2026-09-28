import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Settings, Bell, Menu, X, Clock } from 'lucide-react';
import { useBank } from '../../context/BankContext';

const titleMap = {
  '/': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/privileges': 'My Privileges',
  '/setting': 'Setting',
};

export default function Header({ onOpenMobileSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, searchQuery, setSearchQuery, notifications, setNotifications } = useBank();
  const [showNotifications, setShowNotifications] = useState(false);

  const currentTitle = titleMap[location.pathname] || 'Overview';
  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <header className="h-[70px] sm:h-[75px] md:h-[84px] bg-white border-b border-[#E6EFF5] px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between sticky top-0 z-30 w-full">
      {/* Mobile Top Header: Hamburger on Left, Centered Title, Notifications + Avatar on Right */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* Left: Hamburger */}
        <button
          onClick={onOpenMobileSidebar}
          className="p-2 -ml-1 text-[#343C6A] hover:bg-gray-100 rounded-xl transition-colors shrink-0"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Center: Title */}
        <h1 className="text-lg sm:text-xl font-bold text-[#343C6A] tracking-tight text-center truncate px-2 max-w-[180px] xs:max-w-[240px]">
          {currentTitle}
        </h1>

        {/* Right: Notifications & Avatar */}
        <div className="flex items-center gap-1.5 xs:gap-2.5 shrink-0">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-9 h-9 rounded-full bg-[#F5F7FA] hover:bg-gray-100 flex items-center justify-center text-[#FE5C73] transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-4.5 h-4.5" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FE5C73] rounded-full ring-2 ring-white" />
              )}
            </button>

            {/* Mobile Notifications Dropdown */}
            {showNotifications && (
              <div className="fixed sm:absolute right-3 sm:right-0 top-[72px] sm:top-full mt-1 w-[calc(100vw-24px)] sm:w-80 max-w-[340px] bg-white rounded-2xl shadow-xl border border-[#DFEAF2] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-3.5 border-b border-[#DFEAF2] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#343C6A] text-xs">Notifications</h4>
                    <p className="text-[11px] text-[#718EBF]">{unreadCount} unread alerts</p>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-medium text-[#1814F3] hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 hover:bg-gray-50 transition-colors flex items-start gap-2.5 ${
                        n.unread ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1814F3] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#343C6A] truncate">
                          {n.title}
                        </p>
                        <p className="text-[11px] text-[#718EBF] mt-0.5 line-clamp-2">
                          {n.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/setting')}
            className="shrink-0 focus:outline-none"
            title={`${user.name} Profile`}
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
              alt={user.name}
              className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full object-cover shadow-sm ring-1 ring-black/5"
            />
          </button>
        </div>
      </div>

      {/* Desktop / Tablet Header */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left: Page Title + Hamburger for Tablet (lg:hidden) */}
        <div className="flex items-center gap-2.5 lg:gap-4 min-w-0">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 text-[#343C6A] hover:bg-gray-100 rounded-xl transition-colors shrink-0"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#343C6A] tracking-tight truncate">
            {currentTitle}
          </h1>
        </div>

        {/* Right: Search + Settings + Bell + Avatar */}
        <div className="flex items-center gap-2.5 md:gap-3.5 lg:gap-7 shrink-0">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <Search className="w-4.5 h-4.5 text-[#718EBF] absolute left-4 lg:left-5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for something"
              className="w-[150px] md:w-[190px] xl:w-[255px] h-[44px] lg:h-[50px] rounded-full bg-[#F5F7FA] text-xs lg:text-sm text-[#343C6A] placeholder:text-[#8BA3CB] focus:outline-none focus:ring-2 focus:ring-[#1814F3]/20 transition-all"
              style={{ paddingLeft: '44px', paddingRight: searchQuery ? '32px' : '14px' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Settings button */}
          <button
            onClick={() => navigate('/setting')}
            className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#F5F7FA] hover:bg-gray-100 flex items-center justify-center text-[#718EBF] hover:text-[#1814F3] transition-colors shrink-0"
            title="Settings"
          >
            <Settings className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Notification Bell */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#F5F7FA] hover:bg-gray-100 flex items-center justify-center text-[#FE5C73] transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
              {unreadCount > 0 && (
                <span className="absolute top-2.5 right-2.5 lg:top-3.5 lg:right-3.5 w-2.5 h-2.5 bg-[#FE5C73] rounded-full ring-2 ring-white" />
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#DFEAF2] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-4 border-b border-[#DFEAF2] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#343C6A] text-sm">Notifications</h4>
                    <p className="text-xs text-[#718EBF]">{unreadCount} unread alerts</p>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-medium text-[#1814F3] hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3.5 hover:bg-gray-50 transition-colors flex items-start gap-3 ${
                        n.unread ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1814F3] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#343C6A] truncate">
                          {n.title}
                        </p>
                        <p className="text-xs text-[#718EBF] mt-0.5 line-clamp-2">
                          {n.text}
                        </p>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {n.time}
                        </span>
                      </div>
                      {n.unread && (
                        <span className="w-2 h-2 rounded-full bg-[#1814F3] shrink-0 mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar */}
          <button
            onClick={() => navigate('/setting')}
            className="flex items-center group cursor-pointer focus:outline-none shrink-0"
            title={`${user.name} Profile`}
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
              alt={user.name}
              className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full object-cover shadow-sm ring-1 ring-black/5"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
