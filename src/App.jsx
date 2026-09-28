import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BankProvider } from './context/BankContext';
import MainLayout from './components/layout/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Privileges from './pages/Privileges';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BankProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Navigate to="/" replace />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="investments" element={<Investments />} />
            <Route path="credit-cards" element={<CreditCards />} />
            <Route path="loans" element={<Loans />} />
            <Route path="services" element={<Services />} />
            <Route path="privileges" element={<Privileges />} />
            <Route path="setting" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BankProvider>
  );
}
