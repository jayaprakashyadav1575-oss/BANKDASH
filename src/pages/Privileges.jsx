import React from 'react';
import {
  Award,
  Crown,
  Plane,
  ShieldCheck,
  Zap,
  Gift,
  CheckCircle,
} from 'lucide-react';
import { useBank } from '../context/BankContext';

export default function Privileges() {
  const { privileges, showToast } = useBank();

  const handleClaim = (privilege) => {
    showToast(`Privilege "${privilege.title}" accessed! Enjoy your member perk.`, 'success');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Tier Status Banner */}
      <div className="card-gradient-primary rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 text-white shadow-blue-glow flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] sm:text-xs font-semibold">
            <Crown className="w-3.5 h-3.5 text-yellow-300" />
            <span>VIP Platinum Tier Member</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Unlock Exclusive Financial Privileges
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            As a premier BankDash client, you gain worldwide access to bespoke luxury perks, zero-fee international corridors, and personalized concierge banking.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center w-full md:w-auto md:min-w-[190px] shrink-0">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 block">
            Reward Points
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block">
            18,450
          </span>
          <span className="text-xs text-emerald-300 font-semibold mt-1 inline-block">
            +1,200 this month
          </span>
        </div>
      </div>

      {/* Privileges Grid */}
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-[22px] font-bold text-bank-navy">
            Your Active & Available Privileges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {privileges.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-bank-border/70 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.claimed
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.points}
                  </span>
                </div>

                <span className="text-xs font-bold text-primary block mb-1">
                  {item.tier}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-bank-navy mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-bank-muted leading-relaxed mb-5 sm:mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium truncate">
                  {item.claimed ? 'Status: Active' : 'Status: Ready to Redeem'}
                </span>
                <button
                  onClick={() => handleClaim(item)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    item.claimed
                      ? 'bg-gray-100 text-bank-navy hover:bg-gray-200'
                      : 'bg-primary text-white hover:bg-primary-dark shadow-sm'
                  }`}
                >
                  {item.claimed ? 'View Voucher' : 'Redeem Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
