import React from 'react';
import {
  Briefcase,
  TrendingUp,
  User,
} from 'lucide-react';
import { useBank } from '../context/BankContext';

// 6 bank services list items matching the reference image exactly
const bankServicesData = [
  {
    id: 'bs-1',
    title: 'Business loans',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'loan',
    iconBg: '#FFE5EC',
    iconColor: '#FF82AC',
    isActive: false,
  },
  {
    id: 'bs-2',
    title: 'Checking accounts',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'briefcase',
    iconBg: '#FFF5D9',
    iconColor: '#FFBB38',
    isActive: false,
  },
  {
    id: 'bs-3',
    title: 'Savings accounts',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'growth',
    iconBg: '#FFE5EC',
    iconColor: '#FF82AC',
    isActive: true, // Row 3 has active blue button in reference image!
  },
  {
    id: 'bs-4',
    title: 'Debit and credit cards',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'user',
    iconBg: '#E7EDFF',
    iconColor: '#2D60FF',
    isActive: false,
  },
  {
    id: 'bs-5',
    title: 'Life Insurance',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'shield',
    iconBg: '#DCFAF8',
    iconColor: '#16DBCC',
    isActive: false,
  },
  {
    id: 'bs-6',
    title: 'Business loans',
    subtitle: 'It is a long established',
    col2Title: 'Lorem Ipsum',
    col2Sub: 'Many publishing',
    col3Title: 'Lorem Ipsum',
    col3Sub: 'Many publishing',
    col4Title: 'Lorem Ipsum',
    col4Sub: 'Many publishing',
    iconType: 'loan',
    iconBg: '#FFE5EC',
    iconColor: '#FF82AC',
    isActive: false,
  },
];

export default function Services() {
  const { showToast } = useBank();

  const handleViewDetails = (service) => {
    showToast(`Viewing details for ${service.title}`, 'info');
  };

  return (
    <div className="space-y-7">
      {/* Top Row: 3 Highlight Cards (Horizontal peek carousel on mobile matching Figma) */}
      <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
        {/* Card 1: Life Insurance */}
        <div className="w-[240px] xs:w-[270px] sm:w-[300px] md:w-full shrink-0 snap-center bg-white rounded-[22px] sm:rounded-[25px] p-5 sm:p-6 lg:p-7 border border-[#DFEAF2]/60 shadow-card flex items-center gap-4 sm:gap-5">
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
            {/* Shield with Cross SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"
                stroke="#2D60FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8v8M8 12h8"
                stroke="#2D60FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-[#232323] truncate">
              Life Insurance
            </h3>
            <p className="text-xs text-[#718EBF] mt-1 font-normal truncate">
              Unlimited protection
            </p>
          </div>
        </div>

        {/* Card 2: Shopping */}
        <div className="w-[240px] xs:w-[270px] sm:w-[300px] md:w-full shrink-0 snap-center bg-white rounded-[22px] sm:rounded-[25px] p-5 sm:p-6 lg:p-7 border border-[#DFEAF2]/60 shadow-card flex items-center gap-4 sm:gap-5">
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] rounded-full bg-[#FFF5D9] flex items-center justify-center shrink-0">
            {/* Shopping Bag SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 10a4 4 0 01-8 0"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-[#232323] truncate">
              Shopping
            </h3>
            <p className="text-xs text-[#718EBF] mt-1 font-normal truncate">
              Buy. Think. Grow.
            </p>
          </div>
        </div>

        {/* Card 3: Safety */}
        <div className="w-[240px] xs:w-[270px] sm:w-[300px] md:w-full shrink-0 snap-center bg-white rounded-[22px] sm:rounded-[25px] p-5 sm:p-6 lg:p-7 border border-[#DFEAF2]/60 shadow-card flex items-center gap-4 sm:gap-5">
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
            {/* Shield with Checkmark SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"
                stroke="#16DBCC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="#16DBCC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-[#232323] truncate">
              Safety
            </h3>
            <p className="text-xs text-[#718EBF] mt-1 font-normal truncate">
              We are your allies
            </p>
          </div>
        </div>
      </div>

      {/* Main Section: Bank Services List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#343C6A]">
            Bank Services List
          </h2>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {bankServicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-[#DFEAF2]/60 shadow-card flex items-center justify-between gap-3 sm:gap-4 hover:shadow-md transition-shadow"
            >
              {/* Left: Icon Box + Title */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 sm:flex-initial sm:min-w-[200px] lg:min-w-[220px]">
                <div
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.iconBg }}
                >
                  {item.iconType === 'loan' ? (
                    /* Loan hand with coin SVG */
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3v4M10 5h4M2 13h4l3 3h5l4-4h4"
                        stroke={item.iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="7" r="3" stroke={item.iconColor} strokeWidth="2" />
                    </svg>
                  ) : item.iconType === 'briefcase' ? (
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.iconColor }} />
                  ) : item.iconType === 'growth' ? (
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.iconColor }} />
                  ) : item.iconType === 'user' ? (
                    <User className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.iconColor }} />
                  ) : (
                    /* Shield SVG */
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"
                        stroke={item.iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke={item.iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#232323] truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#718EBF] mt-0.5 font-normal truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Center Columns (Hidden on mobile matching Figma Services for Mobile) */}
              <div className="hidden md:grid grid-cols-3 gap-4 sm:gap-6 flex-1 text-left px-2 sm:px-6">
                <div className="min-w-0">
                  <h5 className="text-sm font-semibold text-[#232323] truncate">
                    {item.col2Title}
                  </h5>
                  <p className="text-xs text-[#718EBF] mt-0.5 font-normal truncate">
                    {item.col2Sub}
                  </p>
                </div>

                <div className="min-w-0">
                  <h5 className="text-sm font-semibold text-[#232323] truncate">
                    {item.col3Title}
                  </h5>
                  <p className="text-xs text-[#718EBF] mt-0.5 font-normal truncate">
                    {item.col3Sub}
                  </p>
                </div>

                <div className="min-w-0">
                  <h5 className="text-sm font-semibold text-[#232323] truncate">
                    {item.col4Title}
                  </h5>
                  <p className="text-xs text-[#718EBF] mt-0.5 font-normal truncate">
                    {item.col4Sub}
                  </p>
                </div>
              </div>

              {/* Right: View Details Button */}
              <div className="shrink-0 self-center">
                <button
                  onClick={() => handleViewDetails(item)}
                  className={`px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full border text-xs font-semibold transition-all whitespace-nowrap ${
                    item.isActive
                      ? 'border-[#1814F3] text-[#1814F3] hover:bg-[#1814F3] hover:text-white'
                      : 'border-[#718EBF]/50 text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3]'
                  }`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
