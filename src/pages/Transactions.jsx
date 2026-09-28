import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowDown } from 'lucide-react';
import CreditCard from '../components/common/CreditCard';
import { useBank } from '../context/BankContext';

// Monthly expense data matching the reference image bar chart
const expenseBars = [
  { month: 'Aug', value: 65, color: '#EDF0F7' },
  { month: 'Sep', value: 90, color: '#EDF0F7' },
  { month: 'Oct', value: 48, color: '#EDF0F7' },
  { month: 'Nov', value: 35, color: '#EDF0F7' },
  { month: 'Dec', value: 100, color: '#16DBCC', label: '$12,500', isHighlight: true },
  { month: 'Jan', value: 70, color: '#EDF0F7' },
];

// Exact transactions list matching the reference image
const allTransactionsData = [
  {
    id: 'tx-1',
    description: 'Spotify Subscription',
    transactionId: '#12548796',
    type: 'Shopping',
    card: '1234 ****',
    date: '28 Jan, 12.30 AM',
    amount: -2500,
    isExpense: true,
  },
  {
    id: 'tx-2',
    description: 'Freepik Sales',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '25 Jan, 10.40 PM',
    amount: 750,
    isExpense: false,
  },
  {
    id: 'tx-3',
    description: 'Mobile Service',
    transactionId: '#12548796',
    type: 'Service',
    card: '1234 ****',
    date: '20 Jan, 10.40 PM',
    amount: -150,
    isExpense: true,
  },
  {
    id: 'tx-4',
    description: 'Wilson',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '15 Jan, 03.29 PM',
    amount: -1050,
    isExpense: true,
  },
  {
    id: 'tx-5',
    description: 'Emilly',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '14 Jan, 10.40 PM',
    amount: 840,
    isExpense: false,
  },
  // Additional items for page 2, 3, 4
  {
    id: 'tx-6',
    description: 'Playstation Network',
    transactionId: '#12548797',
    type: 'Entertainment',
    card: '1234 ****',
    date: '12 Jan, 08.15 PM',
    amount: -120,
    isExpense: true,
  },
  {
    id: 'tx-7',
    description: 'Envato Marketplace',
    transactionId: '#12548798',
    type: 'Transfer',
    card: '1234 ****',
    date: '10 Jan, 04.20 PM',
    amount: 1450,
    isExpense: false,
  },
  {
    id: 'tx-8',
    description: 'Apple Cloud Storage',
    transactionId: '#12548799',
    type: 'Service',
    card: '1234 ****',
    date: '08 Jan, 11.00 AM',
    amount: -30,
    isExpense: true,
  },
  {
    id: 'tx-9',
    description: 'Design Consultancy',
    transactionId: '#12548800',
    type: 'Income',
    card: '1234 ****',
    date: '05 Jan, 02.45 PM',
    amount: 3200,
    isExpense: false,
  },
  {
    id: 'tx-10',
    description: 'Amazon AWS Hosting',
    transactionId: '#12548801',
    type: 'Service',
    card: '1234 ****',
    date: '02 Jan, 09.30 AM',
    amount: -450,
    isExpense: true,
  },
];

export default function Transactions() {
  const { cards, searchQuery, showToast } = useBank();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'income' | 'expense'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter transactions based on tab and search
  const filteredList = useMemo(() => {
    return allTransactionsData.filter((item) => {
      // Tab filter
      if (activeTab === 'income' && item.amount < 0) return false;
      if (activeTab === 'expense' && item.amount > 0) return false;

      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          item.description.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.transactionId.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage) || 1;
  const paginatedList = filteredList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = (tx) => {
    showToast(`Receipt for ${tx.description} downloaded successfully!`, 'success');
  };

  return (
    <div className="space-y-7">
      {/* Top Row: My Cards & My Expense */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        {/* Left Column (8 cols): My Cards */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 h-7 sm:h-8">
            <h2 className="text-xl sm:text-[22px] font-bold text-[#343C6A]">
              My Cards
            </h2>
            <Link
              to="/credit-cards"
              className="text-base font-semibold text-[#343C6A] hover:text-[#1814F3] transition-colors"
            >
              + Add Card
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {cards.slice(0, 2).map((card, idx) => (
              <div key={card.id} className="w-[275px] xs:w-[310px] sm:w-[340px] md:w-full shrink-0 snap-center">
                <CreditCard
                  balance={card.balance}
                  cardHolder={card.cardHolder}
                  validThru={card.validThru}
                  cardNumber={card.cardNumber}
                  variant={card.variant || (idx === 0 ? 'primary' : 'white')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (4 cols): My Expense */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 h-7 sm:h-8">
            <h2 className="text-xl sm:text-[22px] font-bold text-[#343C6A]">
              My Expense
            </h2>
          </div>

          <div className="bg-white rounded-[25px] p-5 sm:p-6 border border-[#DFEAF2]/60 shadow-card flex flex-col justify-between h-[216px] sm:h-[235px]">
            {/* Custom Bar Chart matching reference image */}
            <div className="h-[180px] w-full flex items-end justify-between gap-2 sm:gap-3 px-1 sm:px-2 pt-6">
              {expenseBars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  {/* Highlight Label for Dec ($12,500) */}
                  {bar.isHighlight && (
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#343C6A] mb-1.5 tracking-tight whitespace-nowrap">
                      {bar.label}
                    </span>
                  )}

                  {/* Bar */}
                  <div
                    className="w-full max-w-[28px] sm:max-w-[32px] rounded-[8px] sm:rounded-[10px] transition-all duration-300"
                    style={{
                      height: `${bar.value}%`,
                      backgroundColor: bar.color,
                    }}
                  />

                  {/* Month Label */}
                  <span className="text-[11px] sm:text-xs font-normal text-[#718EBF] mt-2 block">
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Section: Recent Transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#343C6A]">
            Recent Transactions
          </h2>
        </div>

        {/* Tabs: All Transactions, Income, Expense */}
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10 border-b border-[#E6EFF5] mb-5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => { setActiveTab('all'); setCurrentPage(1); }}
            className={`pb-3 text-sm sm:text-base font-semibold whitespace-nowrap transition-all relative ${
              activeTab === 'all'
                ? 'text-[#1814F3]'
                : 'text-[#718EBF] hover:text-[#343C6A]'
            }`}
          >
            All Transactions
            {activeTab === 'all' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
            )}
          </button>

          <button
            onClick={() => { setActiveTab('income'); setCurrentPage(1); }}
            className={`pb-3 text-sm sm:text-base font-semibold whitespace-nowrap transition-all relative ${
              activeTab === 'income'
                ? 'text-[#1814F3]'
                : 'text-[#718EBF] hover:text-[#343C6A]'
            }`}
          >
            Income
            {activeTab === 'income' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
            )}
          </button>

          <button
            onClick={() => { setActiveTab('expense'); setCurrentPage(1); }}
            className={`pb-3 text-sm sm:text-base font-semibold whitespace-nowrap transition-all relative ${
              activeTab === 'expense'
                ? 'text-[#1814F3]'
                : 'text-[#718EBF] hover:text-[#343C6A]'
            }`}
          >
            Expense
            {activeTab === 'expense' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
            )}
          </button>
        </div>

        {/* Desktop / Tablet Transactions Table Container */}
        <div className="hidden md:block bg-white rounded-[25px] border border-[#DFEAF2]/60 shadow-card p-4 sm:p-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#F4F5F7] text-sm text-[#718EBF] font-medium">
                  <th className="pb-4 pl-2 font-medium">Description</th>
                  <th className="pb-4 font-medium">Transaction ID</th>
                  <th className="pb-4 font-medium">Type</th>
                  <th className="pb-4 font-medium">Card</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Amount</th>
                  <th className="pb-4 pr-2 text-center font-medium">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F5F7]/80 text-sm">
                {paginatedList.length > 0 ? (
                  paginatedList.map((tx) => {
                    const isPositive = tx.amount > 0;
                    return (
                      <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                        {/* Description with Arrow Circle */}
                        <td className="py-4 pl-2">
                          <div className="flex items-center gap-3.5">
                            {/* Circle with straight arrow */}
                            <div className="w-8 h-8 rounded-full border border-[#718EBF]/40 flex items-center justify-center shrink-0 text-[#718EBF]">
                              {isPositive ? (
                                <ArrowDown className="w-4 h-4 stroke-[2.2]" />
                              ) : (
                                <ArrowUp className="w-4 h-4 stroke-[2.2]" />
                              )}
                            </div>
                            <span className="font-medium text-[#232323] whitespace-nowrap">
                              {tx.description}
                            </span>
                          </div>
                        </td>

                        {/* Transaction ID */}
                        <td className="py-4 text-[#718EBF] whitespace-nowrap">
                          {tx.transactionId}
                        </td>

                        {/* Type */}
                        <td className="py-4 text-[#232323] whitespace-nowrap">
                          {tx.type}
                        </td>

                        {/* Card */}
                        <td className="py-4 text-[#232323] whitespace-nowrap">
                          {tx.card}
                        </td>

                        {/* Date */}
                        <td className="py-4 text-[#718EBF] whitespace-nowrap">
                          {tx.date}
                        </td>

                        {/* Amount */}
                        <td className="py-4 font-semibold whitespace-nowrap">
                          <span className={isPositive ? 'text-[#16DBCC]' : 'text-[#FE5C73]'}>
                            {isPositive
                              ? `+$${tx.amount.toLocaleString()}`
                              : `-$${Math.abs(tx.amount).toLocaleString()}`}
                          </span>
                        </td>

                        {/* Download Receipt Button */}
                        <td className="py-4 pr-2 text-center whitespace-nowrap">
                          <button
                            onClick={() => handleDownload(tx)}
                            className="px-6 py-1.5 rounded-full border border-[#123288] text-[#123288] hover:bg-[#123288] hover:text-white text-xs font-medium transition-all"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#718EBF]">
                      No transactions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View (< md): Stacked clean list matching Transaction for Mobile Figma */}
        <div className="md:hidden space-y-3">
          {paginatedList.length > 0 ? (
            paginatedList.map((tx) => {
              const isPositive = tx.amount > 0;
              return (
                <div
                  key={tx.id}
                  className="bg-white rounded-[20px] p-3.5 sm:p-4 border border-[#DFEAF2]/60 shadow-card flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-9 h-9 rounded-full border border-[#718EBF]/40 flex items-center justify-center shrink-0 text-[#718EBF]">
                      {isPositive ? (
                        <ArrowDown className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <ArrowUp className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-[#232323] truncate">
                        {tx.description}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#718EBF] mt-0.5">
                        <span>{tx.date}</span>
                        <span>•</span>
                        <span>{tx.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <span
                      className={`text-sm font-semibold whitespace-nowrap ${
                        isPositive ? 'text-[#16DBCC]' : 'text-[#FE5C73]'
                      }`}
                    >
                      {isPositive
                        ? `+$${tx.amount.toLocaleString()}`
                        : `-$${Math.abs(tx.amount).toLocaleString()}`}
                    </span>
                    <button
                      onClick={() => handleDownload(tx)}
                      className="text-[11px] text-[#1814F3] font-medium hover:underline mt-1"
                    >
                      Receipt
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-[20px] p-8 text-center text-[#718EBF] text-sm">
              No transactions found.
            </div>
          )}
        </div>

        {/* Pagination aligned bottom-right on desktop/tablet, centered on mobile */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 mt-6 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 text-[#1814F3] hover:underline disabled:opacity-40 disabled:hover:no-underline transition-all px-1 py-1"
          >
            <span>&lt; Previous</span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] sm:rounded-[10px] font-bold text-xs sm:text-sm transition-all flex items-center justify-center ${
                  currentPage === num
                    ? 'bg-[#1814F3] text-white shadow-sm'
                    : 'text-[#1814F3] hover:bg-blue-50'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
            disabled={currentPage === 4}
            className="flex items-center gap-1 text-[#1814F3] hover:underline disabled:opacity-40 disabled:hover:no-underline transition-all px-1 py-1"
          >
            <span>Next &gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
