import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconBg = '#FFF5D9',
  iconColor = '#FFBB38',
  badgeText,
  badgeType = 'positive',
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-bank-border/70 shadow-card flex items-center gap-3 sm:gap-4 transition-all duration-300 ${className}`}
    >
      {/* Icon Circle */}
      <div
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {Icon && <Icon className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: iconColor }} />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-normal text-bank-muted truncate mb-0.5 sm:mb-1">
          {title}
        </p>
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <h3 className="text-lg sm:text-2xl font-bold text-bank-navy tracking-tight truncate">
            {value}
          </h3>
          {badgeText && (
            <span
              className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 rounded-full ${
                badgeType === 'positive'
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {badgeText}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
