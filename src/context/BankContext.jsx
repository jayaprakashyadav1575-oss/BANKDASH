import React, { createContext, useContext, useState } from 'react';
import { api, mockData } from '../services/api';

const BankContext = createContext(null);

export const BankProvider = ({ children }) => {
  const [user, setUser] = useState(mockData.user);
  const [cards, setCards] = useState(mockData.cards);
  const [transactions, setTransactions] = useState(mockData.transactions);
  const [contacts, setContacts] = useState(mockData.quickTransferContacts);
  const [loans, setLoans] = useState(mockData.loans);
  const [investments, setInvestments] = useState(mockData.investments);
  const [services, setServices] = useState(mockData.services);
  const [privileges, setPrivileges] = useState(mockData.privileges);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Transfer Received', text: 'You received $2,500 from Paypal', time: '10m ago', unread: true },
    { id: 2, title: 'Card Alert', text: 'Spotify auto-renewal payment successful', time: '2h ago', unread: true },
    { id: 3, title: 'Security', text: 'New login detected from San Jose, CA', time: '1d ago', unread: false },
  ]);
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' | 'info' }
  const [isLoading, setIsLoading] = useState(false);

  // Show auto-dismissing toast
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const dismissToast = () => setToast(null);

  // Send quick transfer
  const handleQuickTransfer = async (contactId, amount) => {
    try {
      setIsLoading(true);
      const res = await api.sendQuickTransfer({ contactId, amount });
      const contact = contacts.find((c) => c.id === contactId) || contacts[0];

      // Update primary card balance
      setCards((prevCards) =>
        prevCards.map((c, i) =>
          i === 0 ? { ...c, balance: Math.max(0, c.balance - Number(amount)) } : c
        )
      );

      // Add to transactions
      const newTx = {
        id: `tx-${Date.now()}`,
        description: `Transfer to ${contact.name}`,
        date: res.date,
        type: 'transfer_out',
        category: 'Transfer',
        amount: -Number(amount),
        card: '*1234',
        status: 'Completed',
        iconType: 'user',
        iconBg: '#FFE5EC',
        iconColor: '#FF82AC',
      };
      setTransactions((prev) => [newTx, ...prev]);

      showToast(`Sent $${amount} to ${contact.name} successfully!`, 'success');
      return true;
    } catch (err) {
      showToast(err.message || 'Transfer failed', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Add new card
  const handleAddCard = async (newCard) => {
    try {
      setIsLoading(true);
      const res = await api.addCard(newCard);
      setCards((prev) => [...prev, res.card]);
      showToast('New credit card added successfully!', 'success');
      return true;
    } catch (err) {
      showToast('Failed to add card', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update profile
  const handleUpdateProfile = async (profileData) => {
    try {
      setIsLoading(true);
      const res = await api.updateProfile(profileData);
      setUser((prev) => ({ ...prev, ...profileData }));
      showToast(res.message || 'Profile saved!', 'success');
      return true;
    } catch (err) {
      showToast('Failed to update profile', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Repay loan
  const handleRepayLoan = async (loanId, amount) => {
    try {
      setIsLoading(true);
      await api.repayLoan(loanId, amount);
      setLoans((prev) =>
        prev.map((l) =>
          l.id === loanId
            ? { ...l, leftToRepay: Math.max(0, l.leftToRepay - amount) }
            : l
        )
      );
      showToast(`Repayment of $${amount} applied to ${loanId}`, 'success');
    } catch (err) {
      showToast('Repayment failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BankContext.Provider
      value={{
        user,
        cards,
        transactions,
        contacts,
        loans,
        investments,
        services,
        privileges,
        searchQuery,
        setSearchQuery,
        notifications,
        setNotifications,
        toast,
        showToast,
        dismissToast,
        handleQuickTransfer,
        handleAddCard,
        handleUpdateProfile,
        handleRepayLoan,
        isLoading,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
};
