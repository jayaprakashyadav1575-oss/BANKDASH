import axios from 'axios';

// Create Axios client
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Initial mock banking data based directly on Figma design
export const mockData = {
  user: {
    name: 'Charlene Reed',
    userName: 'charlenereed',
    email: 'charlenereed@gmail.com',
    role: 'Financial Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    dateOfBirth: '1990-01-25',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    currency: 'USD ($)',
    timeZone: '(GMT-12:00) International Date Line West',
    twoFactorAuth: true,
  },
  cards: [
    {
      id: 'c1',
      balance: 5756,
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      fullCardNumber: '3778 5432 9876 1234',
      bankName: 'DBL Bank',
      cardType: 'Secondary',
      variant: 'primary', // blue gradient
      status: 'Active',
    },
    {
      id: 'c2',
      balance: 5756,
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      fullCardNumber: '3778 9876 5432 1234',
      bankName: 'BRC Bank',
      cardType: 'Secondary',
      variant: 'white', // white card with border
      status: 'Active',
    },
    {
      id: 'c3',
      balance: 12450,
      cardHolder: 'Charlene Reed',
      validThru: '08/26',
      cardNumber: '4259 **** **** 8892',
      fullCardNumber: '4259 8892 1104 8892',
      bankName: 'ABM Bank',
      cardType: 'Platinum',
      variant: 'dark', // deep purple/navy
      status: 'Active',
    }
  ],
  transactions: [
    {
      id: 'tx-1',
      description: 'Deposit from my Card',
      date: '28 January 2021',
      type: 'card_deposit',
      category: 'Deposit',
      amount: -850,
      card: '*1234',
      status: 'Completed',
      iconType: 'card',
      iconBg: '#FFF5D9',
      iconColor: '#FFBB38',
    },
    {
      id: 'tx-2',
      description: 'Deposit Paypal',
      date: '25 January 2021',
      type: 'paypal',
      category: 'Deposit',
      amount: 2500,
      card: '*1234',
      status: 'Completed',
      iconType: 'paypal',
      iconBg: '#E7EDFF',
      iconColor: '#2D60FF',
    },
    {
      id: 'tx-3',
      description: 'Jemi Wilson',
      date: '21 January 2021',
      type: 'transfer_in',
      category: 'Transfer',
      amount: 5400,
      card: '*1234',
      status: 'Completed',
      iconType: 'user',
      iconBg: '#DCFAF8',
      iconColor: '#16DBCC',
    },
    {
      id: 'tx-4',
      description: 'Spotify Subscription',
      date: '15 January 2021',
      type: 'subscription',
      category: 'Entertainment',
      amount: -15,
      card: '*8892',
      status: 'Completed',
      iconType: 'card',
      iconBg: '#FFE5EC',
      iconColor: '#FF82AC',
    },
    {
      id: 'tx-5',
      description: 'Freepik Sales',
      date: '12 January 2021',
      type: 'income',
      category: 'Business',
      amount: 750,
      card: '*1234',
      status: 'Completed',
      iconType: 'paypal',
      iconBg: '#E7EDFF',
      iconColor: '#2D60FF',
    },
    {
      id: 'tx-6',
      description: 'Mobile Recharge',
      date: '08 January 2021',
      type: 'utility',
      category: 'Bill Expense',
      amount: -45,
      card: '*1234',
      status: 'Completed',
      iconType: 'card',
      iconBg: '#FFF5D9',
      iconColor: '#FFBB38',
    },
    {
      id: 'tx-7',
      description: 'Wilson Tech Consulting',
      date: '03 January 2021',
      type: 'income',
      category: 'Consulting',
      amount: 3200,
      card: '*8892',
      status: 'Completed',
      iconType: 'user',
      iconBg: '#DCFAF8',
      iconColor: '#16DBCC',
    }
  ],
  quickTransferContacts: [
    {
      id: 'ct-1',
      name: 'Livia Bator',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'ct-2',
      name: 'Randy Press',
      role: 'Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'ct-3',
      name: 'Workman',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'ct-4',
      name: 'Sofia Davis',
      role: 'Engineer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'ct-5',
      name: 'Michael Chen',
      role: 'Product',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
    }
  ],
  weeklyActivity: [
    { day: 'Sat', deposit: 480, withdraw: 240 },
    { day: 'Sun', deposit: 350, withdraw: 130 },
    { day: 'Mon', deposit: 320, withdraw: 270 },
    { day: 'Tue', deposit: 490, withdraw: 380 },
    { day: 'Wed', deposit: 150, withdraw: 230 },
    { day: 'Thu', deposit: 390, withdraw: 240 },
    { day: 'Fri', deposit: 400, withdraw: 330 },
  ],
  expenseStats: [
    { name: 'Entertainment', value: 30, color: '#343C6A' },
    { name: 'Bill Expense', value: 15, color: '#FC7900' },
    { name: 'Investment', value: 20, color: '#FA00FF' },
    { name: 'Others', value: 35, color: '#1814F3' },
  ],
  balanceHistory: [
    { month: 'Jul', balance: 120 },
    { month: 'Aug', balance: 340 },
    { month: 'Sep', balance: 240 },
    { month: 'Oct', balance: 480 },
    { month: 'Nov', balance: 780 },
    { month: 'Dec', balance: 220 },
    { month: 'Jan', balance: 580 },
  ],
  investments: [
    {
      id: 'inv-1',
      name: 'Apple Store',
      tag: 'E-commerce, Marketplace',
      amount: '$54,000',
      value: 54000,
      returnVal: '+16%',
      isPositive: true,
      icon: 'apple',
      iconBg: '#FFE5EC',
    },
    {
      id: 'inv-2',
      name: 'Samsung Mobile',
      tag: 'Technology, Hardware',
      amount: '$25,300',
      value: 25300,
      returnVal: '-4%',
      isPositive: false,
      icon: 'samsung',
      iconBg: '#E7EDFF',
    },
    {
      id: 'inv-3',
      name: 'Tesla Motors',
      tag: 'Electric Vehicles',
      amount: '$18,200',
      value: 18200,
      returnVal: '+25%',
      isPositive: true,
      icon: 'tesla',
      iconBg: '#FFF5D9',
    },
  ],
  trendingStocks: [
    { slNo: '01', name: 'Trivago', price: '$520', returnVal: '+5%', isPositive: true },
    { slNo: '02', name: 'Canon', price: '$480', returnVal: '+10%', isPositive: true },
    { slNo: '03', name: 'Uber Food', price: '$350', returnVal: '-3%', isPositive: false },
    { slNo: '04', name: 'Nokia', price: '$940', returnVal: '+2%', isPositive: true },
    { slNo: '05', name: 'Tiktok', price: '$670', returnVal: '+12%', isPositive: true },
  ],
  loans: [
    {
      id: 'LN-01',
      loanMoney: 100000,
      leftToRepay: 40500,
      duration: '8 Months',
      interestRate: '12%',
      installment: '$2,000 / month',
      type: 'Personal Loan',
    },
    {
      id: 'LN-02',
      loanMoney: 500000,
      leftToRepay: 250000,
      duration: '36 Months',
      interestRate: '10%',
      installment: '$8,000 / month',
      type: 'Corporate Loan',
    },
    {
      id: 'LN-03',
      loanMoney: 10000,
      leftToRepay: 2500,
      duration: '4 Months',
      interestRate: '12%',
      installment: '$1,500 / month',
      type: 'Business Loan',
    },
    {
      id: 'LN-04',
      loanMoney: 50000,
      leftToRepay: 18000,
      duration: '12 Months',
      interestRate: '9.5%',
      installment: '$3,200 / month',
      type: 'Custom Loan',
    },
  ],
  services: [
    {
      id: 'srv-1',
      title: 'Life Insurance',
      subtitle: 'Unlimited protection',
      description: 'Comprehensive financial protection for you and your family with fast claims processing and high payouts.',
      badge: 'Popular',
      color: '#2D60FF',
      icon: 'shield',
    },
    {
      id: 'srv-2',
      title: 'Shopping & Cashback',
      subtitle: 'Up to 15% cashback',
      description: 'Partner with over 5,000+ brands and stores worldwide. Receive automatic instant cashback on your BankDash card.',
      badge: 'Rewards',
      color: '#FFBB38',
      icon: 'shopping-bag',
    },
    {
      id: 'srv-3',
      title: 'Safety & Vault Storage',
      subtitle: 'Military-grade encryption',
      description: 'State-of-the-art secure digital safety vaults for documents, crypto keys, contracts, and financial records.',
      badge: 'Security',
      color: '#16DBCC',
      icon: 'lock',
    },
    {
      id: 'srv-4',
      title: 'Business Concierge',
      subtitle: '24/7 dedicated bankers',
      description: 'Direct priority phone line and dedicated wealth managers for private banking transactions.',
      badge: 'VIP',
      color: '#7952F5',
      icon: 'briefcase',
    },
  ],
  privileges: [
    {
      id: 'prv-1',
      title: 'Global Airport Lounge Access',
      tier: 'Platinum & Black Cardholders',
      desc: 'Complimentary VIP access to over 1,200 priority pass lounges worldwide.',
      claimed: true,
      points: 'Free with Platinum',
    },
    {
      id: 'prv-2',
      title: 'Zero International Exchange Fees',
      tier: 'All Accounts',
      desc: 'Spend anywhere in 150+ foreign currencies at mid-market rates with 0% markup.',
      claimed: true,
      points: 'Always Active',
    },
    {
      id: 'prv-3',
      title: 'Premium Concierge & Travel Booking',
      tier: 'Gold Tier +',
      desc: 'Exclusive discounts on five-star hotel suites, luxury car rentals, and Michelin-starred dining reservations.',
      claimed: false,
      points: 'Unlock at 5,000 pts',
    },
    {
      id: 'prv-4',
      title: 'Enhanced Cyber Fraud Insurance',
      tier: 'All Accounts',
      desc: '$1,000,000 zero-liability identity theft and unauthorized digital transaction reimbursement.',
      claimed: true,
      points: 'Included',
    },
  ]
};

// API service using Axios
export const api = {
  // Fetch initial dashboard and user data
  getDashboardData: async () => {
    // In a real backend, this would call apiClient.get('/dashboard')
    // We simulate API latency with a promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockData });
      }, 300);
    });
  },

  // Perform quick transfer
  sendQuickTransfer: async ({ contactId, amount }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!amount || amount <= 0) {
          reject(new Error('Please enter a valid amount'));
        } else {
          resolve({
            success: true,
            message: `Successfully transferred $${amount} to recipient!`,
            amount: Number(amount),
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
          });
        }
      }, 400);
    });
  },

  // Add new card
  addCard: async (newCard) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          card: {
            ...newCard,
            id: `c-${Date.now()}`,
            status: 'Active',
          }
        });
      }, 350);
    });
  },

  // Update profile
  updateProfile: async (profileData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: profileData,
          message: 'Profile settings updated successfully!',
        });
      }, 300);
    });
  },

  // Repay Loan
  repayLoan: async (loanId, amount) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Payment of $${amount} submitted for loan ${loanId}.`,
        });
      }, 400);
    });
  },
};

export default apiClient;
