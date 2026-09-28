import React, { useState } from 'react';
import {
  CreditCard as CardIcon,
  Lock,
  ChevronDown,
  Apple,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import CreditCard from '../components/common/CreditCard';
import { useBank } from '../context/BankContext';

// Donut chart data for Card Expense Statistics matching reference image
const expenseDonutData = [
  { name: 'DBL Bank', value: 25, color: '#4C49ED' },
  { name: 'ABM Bank', value: 35, color: '#16DBCC' },
  { name: 'BRC Bank', value: 20, color: '#FF82AC' },
  { name: 'MCP Bank', value: 20, color: '#FFBB38' },
];

// Card List items matching reference image
const cardListData = [
  {
    id: 'cl-1',
    cardType: 'Secondary',
    bank: 'DBL Bank',
    cardNumber: '**** **** 5600',
    namainCard: 'William',
    iconBg: '#E7EDFF',
    iconColor: '#2D60FF',
  },
  {
    id: 'cl-2',
    cardType: 'Secondary',
    bank: 'BRC Bank',
    cardNumber: '**** **** 4300',
    namainCard: 'Michel',
    iconBg: '#FFE5EC',
    iconColor: '#FF82AC',
  },
  {
    id: 'cl-3',
    cardType: 'Secondary',
    bank: 'ABM Bank',
    cardNumber: '**** **** 7560',
    namainCard: 'Edward',
    iconBg: '#FFF5D9',
    iconColor: '#FFBB38',
  },
];

export default function CreditCards() {
  const { handleAddCard, showToast, isLoading } = useBank();

  // Form State for Add New Card
  const [cardType, setCardType] = useState('Classic');
  const [nameOnCard, setNameOnCard] = useState('My Cards');
  const [cardNumber, setCardNumber] = useState('**** **** **** ****');
  const [expirationDate, setExpirationDate] = useState('25 January 2025');

  const onAddCardSubmit = async (e) => {
    e.preventDefault();
    await handleAddCard({
      balance: 5756,
      cardHolder: nameOnCard || 'Eddy Cusuma',
      validThru: '12/28',
      cardNumber: cardNumber === '**** **** **** ****' ? '3778 **** **** 8892' : cardNumber,
      bankName: 'DBL Bank',
      cardType: cardType,
      variant: 'primary',
    });
  };

  const handleActionClick = (actionName) => {
    showToast(`${actionName} requested! Settings updated.`, 'info');
  };

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Top Section: My Cards (3 Cards) */}
      <div>
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
            My Cards
          </h2>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:-mx-0 sm:px-0">
          {/* Card 1: Vibrant Blue Gradient */}
          <div className="w-[275px] xs:w-[310px] sm:w-[340px] md:w-full shrink-0 snap-center">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="primary"
            />
          </div>

          {/* Card 2: Deep Indigo / Royal Blue Gradient */}
          <div className="w-[275px] xs:w-[310px] sm:w-[340px] md:w-full shrink-0 snap-center">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="dark"
            />
          </div>

          {/* Card 3: Pure White with Border */}
          <div className="w-[275px] xs:w-[310px] sm:w-[340px] md:w-full shrink-0 snap-center">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="white"
            />
          </div>
        </div>
      </div>

      {/* Middle Row: Card Expense Statistics & Card List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (4.2 cols): Card Expense Statistics Donut */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Card Expense Statistics
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card flex flex-col items-center justify-between min-h-[300px] sm:min-h-[340px]">
            {/* Donut Chart */}
            <div className="h-[190px] sm:h-[210px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseDonutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {expenseDonutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFFFF" strokeWidth={3} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend (2x2 Grid) matching reference image */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2.5 sm:gap-y-3 w-full px-2 sm:px-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#718EBF] font-normal truncate">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#4C49ED] shrink-0" />
                <span className="truncate">DBL Bank</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#718EBF] font-normal truncate">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF82AC] shrink-0" />
                <span className="truncate">BRC Bank</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#718EBF] font-normal truncate">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#16DBCC] shrink-0" />
                <span className="truncate">ABM Bank</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#718EBF] font-normal truncate">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFBB38] shrink-0" />
                <span className="truncate">MCP Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right (7.8 cols): Card List */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Card List
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {cardListData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-[#DFEAF2]/60 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    <CardIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="sm:hidden flex-1">
                    <span className="text-xs text-[#718EBF] block">{item.cardType}</span>
                    <span className="text-sm font-semibold text-[#232323] block">{item.bank}</span>
                  </div>
                </div>

                {/* Info Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1 text-left sm:px-2">
                  <div className="hidden sm:block">
                    <span className="text-xs text-[#718EBF] block">Card Type</span>
                    <span className="text-sm font-semibold text-[#232323] mt-0.5 block truncate">
                      {item.cardType}
                    </span>
                  </div>

                  <div className="hidden sm:block">
                    <span className="text-xs text-[#718EBF] block">Bank</span>
                    <span className="text-sm font-semibold text-[#232323] mt-0.5 block truncate">
                      {item.bank}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[#718EBF] block">Card Number</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#232323] mt-0.5 block font-mono truncate">
                      {item.cardNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[#718EBF] block">Namain Card</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#232323] mt-0.5 block truncate">
                      {item.namainCard}
                    </span>
                  </div>
                </div>

                {/* View Details Link */}
                <button
                  onClick={() => showToast(`Viewing details for ${item.bank} (${item.cardNumber})`, 'info')}
                  className="text-xs sm:text-sm font-semibold text-[#1814F3] hover:underline whitespace-nowrap self-end sm:self-center"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Add New Card & Card Setting */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (7.8 cols): Add New Card */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Add New Card
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-5 sm:p-8 border border-[#DFEAF2]/60 shadow-card">
            <p className="text-xs sm:text-sm text-[#718EBF] leading-relaxed mb-5 sm:mb-6 font-normal">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>

            <form onSubmit={onAddCardSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Card Type */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                    Card Type
                  </label>
                  <input
                    type="text"
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                    placeholder="Classic"
                    className="w-full h-11 sm:h-12 px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  />
                </div>

                {/* Name On Card */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    placeholder="My Cards"
                    className="w-full h-11 sm:h-12 px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="**** **** **** ****"
                    className="w-full h-11 sm:h-12 px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] font-mono focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  />
                </div>

                {/* Expiration Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                    Expiration Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="25 January 2025"
                      className="w-full h-11 sm:h-12 px-4 sm:px-5 pr-11 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                    />
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#718EBF] absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Add Card Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 sm:px-9 h-11 sm:h-12 rounded-[12px] sm:rounded-[15px] bg-[#1814F3] hover:bg-[#0A06D3] text-white font-semibold text-xs sm:text-sm transition-all shadow-blue-glow hover:shadow-lg disabled:opacity-50"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right (4.2 cols): Card Setting */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Card Setting
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card space-y-4 sm:space-y-5">
            {/* Setting 1: Block Card */}
            <div
              onClick={() => handleActionClick('Block Card')}
              className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer p-1 rounded-2xl hover:bg-gray-50/70 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF5D9] flex items-center justify-center shrink-0 text-[#FFBB38]">
                <CardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#232323]">
                  Block Card
                </h4>
                <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5">
                  Instantly block your card
                </p>
              </div>
            </div>

            {/* Setting 2: Change Pin Code */}
            <div
              onClick={() => handleActionClick('Change Pin Code')}
              className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer p-1 rounded-2xl hover:bg-gray-50/70 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E7EDFF] flex items-center justify-center shrink-0 text-[#2D60FF]">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#232323]">
                  Change Pin Code
                </h4>
                <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5">
                  Choose another pin code
                </p>
              </div>
            </div>

            {/* Setting 3: Add to Google Pay */}
            <div
              onClick={() => handleActionClick('Add to Google Pay')}
              className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer p-1 rounded-2xl hover:bg-gray-50/70 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFE5EC] flex items-center justify-center shrink-0 text-[#FF82AC]">
                {/* Google 'G' icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.5 12.25c0-.8-.07-1.55-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#FF82AC"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#FF82AC"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                    fill="#FF82AC"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#FF82AC"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#232323]">
                  Add to Google Pay
                </h4>
                <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5">
                  Withdraw without any card
                </p>
              </div>
            </div>

            {/* Setting 4: Add to Apple Pay */}
            <div
              onClick={() => handleActionClick('Add to Apple Pay')}
              className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer p-1 rounded-2xl hover:bg-gray-50/70 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#DCFAF8] flex items-center justify-center shrink-0 text-[#16DBCC]">
                <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#232323]">
                  Add to Apple Pay
                </h4>
                <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5">
                  Withdraw without any card
                </p>
              </div>
            </div>

            {/* Setting 5: Add to Apple Store */}
            <div
              onClick={() => handleActionClick('Add to Apple Store')}
              className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer p-1 rounded-2xl hover:bg-gray-50/70 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#DCFAF8] flex items-center justify-center shrink-0 text-[#16DBCC]">
                <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#232323]">
                  Add to Apple Store
                </h4>
                <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5">
                  Withdraw without any card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
