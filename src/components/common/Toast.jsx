import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useBank } from '../../context/BankContext';

export default function Toast() {
  const { toast, dismissToast } = useBank();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed top-4 sm:top-5 left-4 right-4 sm:left-auto sm:right-5 z-50 flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl shadow-xl border bg-white max-w-md"
          style={{
            borderColor:
              toast.type === 'error'
                ? '#FCA5A5'
                : toast.type === 'info'
                ? '#93C5FD'
                : '#86EFAC',
          }}
        >
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-blue-500 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          )}

          <div className="flex-1 text-sm font-medium text-bank-navy">
            {toast.message}
          </div>

          <button
            onClick={dismissToast}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
