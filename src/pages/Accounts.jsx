import React from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  Wrench,
  User,
  Apple,
  Gamepad2,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CreditCard from '../components/common/CreditCard';
import { useBank } from '../context/BankContext';

// Debit & Credit weekly chart data matching reference image
const debitCreditData = [
  { day: 'Sat', debit: 220, credit: 380 },
  { day: 'Sun', debit: 130, credit: 280 },
  { day: 'Mon', debit: 180, credit: 240 },
  { day: 'Tue', debit: 390, credit: 200 },
  { day: 'Wed', debit: 230, credit: 350 },
  { day: 'Thu', debit: 260, credit: 160 },
  { day: 'Fri', debit: 310, credit: 360 },
];

export default function Accounts() {
  const { cards } = useBank();

  // Custom Tooltip for Debit & Credit chart
  const CustomDebitCreditTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-[#DFEAF2] text-xs">
          <p className="font-semibold text-[#343C6A] mb-1">{label}</p>
          <p className="text-[#1814F3] font-medium">Debit: ${payload[0]?.value}</p>
          <p className="text-[#FCAA0B] font-medium">Credit: ${payload[1]?.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Top Row: 4 Metric Cards (2x2 on mobile matching Figma Accounts for Mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7">
        {/* Card 1: My Balance */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#FFF5D9] flex items-center justify-center shrink-0">
            {/* Money sack SVG */}
            <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2v2M9 4h6l2 4H7l2-4zm-3 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 4.4-2.7 8-6 8s-6-3.6-6-8z"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11v4M10.5 12.5h3"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">My Balance</p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $12,750
            </h3>
          </div>
        </div>

        {/* Card 2: Income */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
            {/* Income hand with coin SVG */}
            <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v4M10 5h4M2 13h4l3 3h5l4-4h4"
                stroke="#2D60FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="7" r="3" stroke="#2D60FF" strokeWidth="2" />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">Income</p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $5,600
            </h3>
          </div>
        </div>

        {/* Card 3: Expense */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#FFE5EC] flex items-center justify-center shrink-0">
            {/* Receipt calculator SVG */}
            <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="3" width="16" height="18" rx="2" stroke="#FF82AC" strokeWidth="2" />
              <line x1="8" y1="7" x2="16" y2="7" stroke="#FF82AC" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="11" x2="16" y2="11" stroke="#FF82AC" strokeWidth="2" strokeLinecap="round" />
              <circle cx="9" cy="16" r="1" fill="#FF82AC" />
              <circle cx="15" cy="16" r="1" fill="#FF82AC" />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">Expense</p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $3,460
            </h3>
          </div>
        </div>

        {/* Card 4: Total Saving */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
            {/* Piggy bank SVG */}
            <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 11c0-4-3-7-7-7a7 7 0 00-7 7c0 2 .8 3.8 2 5v2h2v-1.5c1 .3 2 .5 3 .5s2-.2 3-.5V18h2v-2c1.2-1.2 2-3 2-5z"
                stroke="#16DBCC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 7v2" stroke="#16DBCC" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">Total Saving</p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $7,920
            </h3>
          </div>
        </div>
      </div>

      {/* Middle Row: Last Transaction (Left) & My Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (8 cols): Last Transaction */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4 h-7 sm:h-8">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Last Transaction
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-3.5 sm:p-5 border border-[#DFEAF2]/60 shadow-card flex flex-col justify-between h-[216px] sm:h-[235px]">
            {/* Row 1: Spotify Subscription */}
            <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-2xl hover:bg-gray-50/70 transition-colors gap-2 xs:gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0 text-[#16DBCC]">
                  <RefreshCw className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm sm:text-base font-semibold text-[#232323] truncate">
                    Spotify Subscription
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">25 Jan 2021</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 sm:gap-6 md:gap-10 text-xs sm:text-sm shrink-0">
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[60px]">Shopping</span>
                <span className="hidden md:inline-block text-[#718EBF] font-normal min-w-[70px]">1234 ****</span>
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[70px]">Pending</span>
                <span className="font-semibold text-[#FE5C73] min-w-[50px] sm:min-w-[60px] text-right whitespace-nowrap">
                  -$150
                </span>
              </div>
            </div>

            {/* Row 2: Mobile Service */}
            <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-2xl hover:bg-gray-50/70 transition-colors gap-2 xs:gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0 text-[#2D60FF]">
                  <Wrench className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm sm:text-base font-semibold text-[#232323] truncate">
                    Mobile Service
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">25 Jan 2021</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 sm:gap-6 md:gap-10 text-xs sm:text-sm shrink-0">
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[60px]">Service</span>
                <span className="hidden md:inline-block text-[#718EBF] font-normal min-w-[70px]">1234 ****</span>
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[70px]">Completed</span>
                <span className="font-semibold text-[#FE5C73] min-w-[50px] sm:min-w-[60px] text-right whitespace-nowrap">
                  -$340
                </span>
              </div>
            </div>

            {/* Row 3: Emilly Wilson */}
            <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-2xl hover:bg-gray-50/70 transition-colors gap-2 xs:gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFE5EC] flex items-center justify-center shrink-0 text-[#FF82AC]">
                  <User className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm sm:text-base font-semibold text-[#232323] truncate">
                    Emilly Wilson
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">25 Jan 2021</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 sm:gap-6 md:gap-10 text-xs sm:text-sm shrink-0">
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[60px]">Transfer</span>
                <span className="hidden md:inline-block text-[#718EBF] font-normal min-w-[70px]">1234 ****</span>
                <span className="hidden sm:inline-block text-[#718EBF] font-normal min-w-[70px]">Completed</span>
                <span className="font-semibold text-[#16DBCC] min-w-[50px] sm:min-w-[60px] text-right whitespace-nowrap">
                  +$780
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right (4 cols): My Card */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4 h-7 sm:h-8">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              My Card
            </h2>
            <Link
              to="/credit-cards"
              className="text-sm sm:text-base font-semibold text-[#343C6A] hover:text-[#1814F3] transition-colors"
            >
              See All
            </Link>
          </div>

          <div>
            <CreditCard
              balance={cards[0]?.balance || 5756}
              cardHolder={cards[0]?.cardHolder || 'Eddy Cusuma'}
              validThru={cards[0]?.validThru || '12/22'}
              cardNumber={cards[0]?.cardNumber || '3778 **** **** 1234'}
              variant="primary"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row: Debit & Credit Overview (Left) & Invoices Sent (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (8 cols): Debit & Credit Overview */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Debit & Credit Overview
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-7 border border-[#DFEAF2]/60 shadow-card">
            {/* Top Info & Legend */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
              <p className="text-xs sm:text-sm text-[#718EBF]">
                <strong className="text-[#343C6A] font-bold text-sm sm:text-base">$7,560</strong> Debited &{' '}
                <strong className="text-[#343C6A] font-bold text-sm sm:text-base">$5,420</strong> Credited in this Week
              </p>

              {/* Legend: Debit in Blue, Credit in Orange dot */}
              <div className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-[#718EBF]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm bg-[#1814F3]" />
                  <span>Debit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FCAA0B]" />
                  <span>Credit</span>
                </div>
              </div>
            </div>

            {/* Bar Chart matching reference image */}
            <div className="h-[220px] sm:h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={debitCreditData}
                  barGap={8}
                  margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                >
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12, fontWeight: 400 }}
                  />
                  <Tooltip content={<CustomDebitCreditTooltip />} />
                  <Bar
                    dataKey="debit"
                    fill="#1814F3"
                    radius={[8, 8, 8, 8]}
                    barSize={16}
                  />
                  <Bar
                    dataKey="credit"
                    fill="#FCAA0B"
                    radius={[8, 8, 8, 8]}
                    barSize={16}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right (4 cols): Invoices Sent */}
        <div className="lg:col-span-4">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Invoices Sent
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card space-y-4 sm:space-y-5">
            {/* Item 1: Apple Store */}
            <div className="flex items-center justify-between group hover:bg-gray-50/70 p-1.5 rounded-2xl transition-colors gap-2.5">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#DCFAF8] flex items-center justify-center shrink-0 text-[#16DBCC]">
                  <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm font-semibold text-[#232323] truncate">
                    Apple Store
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">5h ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-[#718EBF] shrink-0">$450</span>
            </div>

            {/* Item 2: Michael */}
            <div className="flex items-center justify-between group hover:bg-gray-50/70 p-1.5 rounded-2xl transition-colors gap-2.5">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF5D9] flex items-center justify-center shrink-0 text-[#FFBB38]">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm font-semibold text-[#232323] truncate">
                    Michael
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">2 days ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-[#718EBF] shrink-0">$160</span>
            </div>

            {/* Item 3: Playstation */}
            <div className="flex items-center justify-between group hover:bg-gray-50/70 p-1.5 rounded-2xl transition-colors gap-2.5">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E7EDFF] flex items-center justify-center shrink-0 text-[#2D60FF]">
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm font-semibold text-[#232323] truncate">
                    Playstation
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">5 days ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-[#718EBF] shrink-0">$1085</span>
            </div>

            {/* Item 4: William */}
            <div className="flex items-center justify-between group hover:bg-gray-50/70 p-1.5 rounded-2xl transition-colors gap-2.5">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFE5EC] flex items-center justify-center shrink-0 text-[#FF82AC]">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm font-semibold text-[#232323] truncate">
                    William
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">10 days ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-[#718EBF] shrink-0">$90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
