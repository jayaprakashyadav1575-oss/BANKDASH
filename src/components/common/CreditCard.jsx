import React from 'react';
import { motion } from 'framer-motion';
import chipWhite from '../../assets/chip_white.png';
import chipBlack from '../../assets/chip_black.png';
import bankLogo from '../../assets/bank-logo.svg';
import bankLogoAlt from '../../assets/bank-logo-alt.svg';

export default function CreditCard({
  balance = 5756,
  cardHolder = 'Eddy Cusuma',
  validThru = '12/22',
  cardNumber = '3778 **** **** 1234',
  variant = 'primary', // 'primary' | 'white' | 'dark'
  className = '',
}) {
  const isPrimary = variant === 'primary';
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  const formatBalance = (val) => {
    return Number(val).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative w-full h-[216px] sm:h-[235px] rounded-[25px] overflow-hidden flex flex-col justify-between transition-shadow duration-300 ${
        isPrimary
          ? 'text-white shadow-card'
          : isDark
          ? 'card-gradient-dark text-white shadow-lg'
          : 'bg-white text-bank-navy border border-[#DFEAF2] shadow-card'
      } ${className}`}
      style={{
        background: isPrimary
          ? 'linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)'
          : isDark
          ? 'linear-gradient(107.38deg, #0A06F4 0%, #4C49ED 100%)'
          : isWhite
          ? '#FFFFFF'
          : undefined,
      }}
    >
      {/* Top Section: Balance & Chip */}
      <div className="p-5 sm:p-6 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <span
              className={`text-[11px] sm:text-xs font-normal tracking-wide block ${
                isWhite ? 'text-[#718EBF]' : 'text-white/80'
              }`}
            >
              Balance
            </span>
            <span
              className={`text-lg sm:text-[20px] font-bold tracking-tight mt-0.5 block ${
                isWhite ? 'text-[#343C6A]' : 'text-white'
              }`}
            >
              {formatBalance(balance)}
            </span>
          </div>

          {/* Authentic Figma Chip Asset */}
          <img
            src={isWhite ? chipBlack : chipWhite}
            alt="EMV Chip"
            className="w-[34px] sm:w-[35px] h-auto shrink-0 select-none"
            draggable={false}
          />
        </div>

        {/* Cardholder & Expiry Row */}
        <div className="flex items-center gap-6 sm:gap-14 mt-4 sm:mt-5">
          <div className="min-w-0">
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-wider block font-normal ${
                isWhite ? 'text-[#718EBF]' : 'text-white/70'
              }`}
            >
              CARD HOLDER
            </span>
            <span
              className={`text-xs sm:text-[15px] font-semibold tracking-wide mt-0.5 block truncate max-w-[130px] sm:max-w-[170px] ${
                isWhite ? 'text-[#343C6A]' : 'text-white'
              }`}
            >
              {cardHolder}
            </span>
          </div>

          <div className="shrink-0">
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-wider block font-normal ${
                isWhite ? 'text-[#718EBF]' : 'text-white/70'
              }`}
            >
              VALID THRU
            </span>
            <span
              className={`text-xs sm:text-[15px] font-semibold tracking-wide mt-0.5 block ${
                isWhite ? 'text-[#343C6A]' : 'text-white'
              }`}
            >
              {validThru}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar: Card Number & Dual Mastercard Circles */}
      <div
        className={`px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-2 ${
          isWhite
            ? 'border-t border-[#DFEAF2] bg-white'
            : 'bg-gradient-to-b from-white/15 to-transparent'
        }`}
      >
        <span
          className={`font-semibold tracking-[0.06em] text-sm xs:text-base sm:text-[20px] font-sans truncate ${
            isWhite ? 'text-[#343C6A]' : 'text-white'
          }`}
        >
          {cardNumber}
        </span>

        {/* Authentic Figma Bank Logo Asset */}
        <img
          src={isWhite ? bankLogoAlt : bankLogo}
          alt="Mastercard Logo"
          className="w-[44px] h-[30px] shrink-0 select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
