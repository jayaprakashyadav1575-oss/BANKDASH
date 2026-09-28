import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  ArrowLeftRight,
  User,
  LineChart,
  CreditCard as CardIcon,
  HandCoins,
  Wrench,
  Lightbulb,
  Settings as GearIcon,
  X,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
  { name: 'Accounts', path: '/accounts', icon: User },
  { name: 'Investments', path: '/investments', icon: LineChart },
  { name: 'Credit Cards', path: '/credit-cards', icon: CardIcon },
  { name: 'Loans', path: '/loans', icon: HandCoins },
  { name: 'Services', path: '/services', icon: Wrench },
  { name: 'My Privileges', path: '/privileges', icon: Lightbulb },
  { name: 'Setting', path: '/setting', icon: GearIcon },
];

export default function Sidebar({ isOpen, onClose }) {
  // Prevent background scrolling when mobile sidebar drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[250px] bg-white border-r border-[#E6EFF5] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand / Logo */}
        <div className="h-[84px] px-8 flex items-center justify-between border-b border-[#E6EFF5]/60">
          <div className="flex items-center gap-3">
            {/* BankDash Credit Card Logo Icon */}
            <div className="w-9 h-9 rounded-xl bg-[#1814F3] flex items-center justify-center text-white shadow-sm shrink-0">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                <rect width="22" height="18" rx="4" fill="#1814F3" />
                <rect x="2" y="3" width="18" height="12" rx="2" stroke="white" strokeWidth="1.8" />
                <rect x="5" y="7" width="4" height="4" rx="1" fill="white" />
                <line x1="12" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="12" y1="11" x2="15" y2="11" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-extrabold text-[24px] tracking-tight text-[#343C6A] font-sans">
              BankDash.
            </span>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `relative flex items-center gap-5 px-8 py-3.5 text-base font-medium transition-all duration-200 group ${
                        isActive
                          ? 'text-[#1814F3] font-bold'
                          : 'text-[#B1B1B1] hover:text-[#343C6A]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active vertical left bar */}
                        {isActive && (
                          <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1814F3] rounded-r-md" />
                        )}

                        <Icon
                          className={`w-[22px] h-[22px] transition-colors ${
                            isActive
                              ? 'text-[#1814F3] fill-[#1814F3]'
                              : 'text-[#B1B1B1] group-hover:text-[#343C6A]'
                          }`}
                        />
                        <span className="truncate">{item.name}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
