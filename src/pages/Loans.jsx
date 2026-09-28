import React, { useState } from 'react';
import {
  User,
  Briefcase,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import { useBank } from '../context/BankContext';

// Exact loans data matching the reference image
const loansTableData = [
  {
    slNo: '01.',
    loanMoney: '$100,000',
    leftToRepay: '$40,500',
    duration: '8 Months',
    interestRate: '12%',
    installment: '$2,000 / month',
    isActive: true,
  },
  {
    slNo: '02.',
    loanMoney: '$500,000',
    leftToRepay: '$250,000',
    duration: '36 Months',
    interestRate: '10%',
    installment: '$8,000 / month',
    isActive: false,
  },
  {
    slNo: '03.',
    loanMoney: '$900,000',
    leftToRepay: '$40,500',
    duration: '12 Months',
    interestRate: '12%',
    installment: '$5,000 / month',
    isActive: false,
  },
  {
    slNo: '04.',
    loanMoney: '$50,000',
    leftToRepay: '$40,500',
    duration: '25 Months',
    interestRate: '5%',
    installment: '$2,000 / month',
    isActive: false,
  },
  {
    slNo: '05.',
    loanMoney: '$50,000',
    leftToRepay: '$40,500',
    duration: '5 Months',
    interestRate: '16%',
    installment: '$10,000 / month',
    isActive: false,
  },
  {
    slNo: '06.',
    loanMoney: '$80,000',
    leftToRepay: '$25,500',
    duration: '14 Months',
    interestRate: '8%',
    installment: '$2,000 / month',
    isActive: false,
  },
  {
    slNo: '07.',
    loanMoney: '$12,000',
    leftToRepay: '$5,500',
    duration: '9 Months',
    interestRate: '13%',
    installment: '$500 / month',
    isActive: false,
  },
  {
    slNo: '08.',
    loanMoney: '$160,000',
    leftToRepay: '$100,800',
    duration: '3 Months',
    interestRate: '12%',
    installment: '$900 / month',
    isActive: false,
  },
];

export default function Loans() {
  const { showToast } = useBank();
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [repayAmount, setRepayAmount] = useState('2000');

  const handleRepayClick = (loan) => {
    setSelectedLoan(loan);
  };

  const handleConfirmRepayment = (e) => {
    e.preventDefault();
    showToast(`Payment of $${repayAmount} submitted for Loan ${selectedLoan.slNo}`, 'success');
    setSelectedLoan(null);
  };

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Top Row: 4 Metric Cards (2x2 on mobile matching Figma Loans for Mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7">
        {/* Card 1: Personal Loans */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
            <User className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#2D60FF]" />
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Personal Loans
            </p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $50,000
            </h3>
          </div>
        </div>

        {/* Card 2: Corporate Loans */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#FFF5D9] flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#FFBB38]" />
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Corporate Loans
            </p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $100,000
            </h3>
          </div>
        </div>

        {/* Card 3: Business Loans */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#FFE5EC] flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#FF82AC]" />
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Business Loans
            </p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $500,000
            </h3>
          </div>
        </div>

        {/* Card 4: Custom Loans */}
        <div className="bg-white rounded-[20px] sm:rounded-[25px] p-3.5 sm:p-5 lg:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-2.5 xs:gap-3.5 sm:gap-5 min-w-0">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-[#16DBCC]" />
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[10px] xs:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Custom Loans
            </p>
            <h3 className="text-base xs:text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              Choose Money
            </h3>
          </div>
        </div>
      </div>

      {/* Main Section: Active Loans Overview Table */}
      <div>
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
            Active Loans Overview
          </h2>
        </div>

        <div className="bg-white rounded-[22px] sm:rounded-[25px] border border-[#DFEAF2]/60 shadow-card p-3.5 sm:p-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs sm:text-sm text-[#718EBF] font-medium border-b border-[#F4F5F7]">
                  <th className="hidden sm:table-cell pb-4 pl-2 font-medium">SL No</th>
                  <th className="pb-4 pl-1 sm:pl-0 font-medium">Loan Money</th>
                  <th className="pb-4 font-medium">Left to repay</th>
                  <th className="hidden sm:table-cell pb-4 font-medium">Duration</th>
                  <th className="hidden sm:table-cell pb-4 font-medium">Interest rate</th>
                  <th className="hidden sm:table-cell pb-4 font-medium">Installment</th>
                  <th className="pb-4 pr-1 sm:pr-2 text-right font-medium">Repay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F5F7] text-xs sm:text-sm">
                {loansTableData.map((loan) => (
                  <tr key={loan.slNo} className="hover:bg-gray-50/50 transition-colors">
                    <td className="hidden sm:table-cell py-4 pl-2 text-[#232323] font-normal">
                      {loan.slNo}
                    </td>
                    <td className="py-4 pl-1 sm:pl-0 text-[#232323] font-normal whitespace-nowrap">
                      {loan.loanMoney}
                    </td>
                    <td className="py-4 text-[#232323] font-normal whitespace-nowrap">
                      {loan.leftToRepay}
                    </td>
                    <td className="hidden sm:table-cell py-4 text-[#232323] font-normal whitespace-nowrap">
                      {loan.duration}
                    </td>
                    <td className="hidden sm:table-cell py-4 text-[#232323] font-normal whitespace-nowrap">
                      {loan.interestRate}
                    </td>
                    <td className="hidden sm:table-cell py-4 text-[#232323] font-normal whitespace-nowrap">
                      {loan.installment}
                    </td>
                    <td className="py-4 pr-1 sm:pr-2 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleRepayClick(loan)}
                        className={`px-4 sm:px-7 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                          loan.isActive
                            ? 'border-[#1814F3] text-[#1814F3] hover:bg-[#1814F3] hover:text-white'
                            : 'border-[#718EBF]/50 text-[#232323] hover:border-[#1814F3] hover:text-[#1814F3]'
                        }`}
                      >
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* Footer Totals Row matching reference image */}
              <tfoot>
                <tr className="border-t border-[#F4F5F7] text-xs sm:text-sm font-semibold text-[#FE5C73]">
                  <td className="hidden sm:table-cell pt-4 pl-2">Total</td>
                  <td className="pt-4 pl-1 sm:pl-0 whitespace-nowrap">
                    <span className="sm:hidden text-[#718EBF] mr-1">Total: </span>$125,0000
                  </td>
                  <td className="pt-4 whitespace-nowrap">$750,000</td>
                  <td className="hidden sm:table-cell pt-4"></td>
                  <td className="hidden sm:table-cell pt-4"></td>
                  <td className="hidden sm:table-cell pt-4 whitespace-nowrap">$50,000 / month</td>
                  <td className="pt-4 pr-1 sm:pr-2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Repay Modal Popup */}
      {selectedLoan && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#DFEAF2] animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-[#343C6A] mb-2">
              Loan Repayment ({selectedLoan.slNo})
            </h3>
            <p className="text-sm text-[#718EBF] mb-6">
              Enter the amount you would like to repay towards loan balance of {selectedLoan.leftToRepay}.
            </p>

            <form onSubmit={handleConfirmRepayment} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#343C6A] mb-1.5">
                  Repayment Amount ($)
                </label>
                <input
                  type="number"
                  min="10"
                  step="10"
                  value={repayAmount}
                  onChange={(e) => setRepayAmount(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-[#F5F7FA] border border-[#DFEAF2] font-semibold text-[#343C6A] focus:outline-none focus:ring-2 focus:ring-[#1814F3]/20"
                  required
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedLoan(null)}
                  className="flex-1 h-11 rounded-xl border border-[#DFEAF2] text-[#343C6A] font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 rounded-xl bg-[#1814F3] hover:bg-[#0A06D3] text-white font-semibold text-sm transition-colors"
                >
                  Confirm Repay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
