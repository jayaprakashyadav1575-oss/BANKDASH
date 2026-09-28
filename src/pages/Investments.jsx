import React from 'react';
import {
  Apple,
  RefreshCw,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Data for Yearly Total Investment (with orange line & hollow circle points)
const yearlyInvestmentData = [
  { year: '2016', investment: 5000 },
  { year: '2017', investment: 23000 },
  { year: '2018', investment: 16000 },
  { year: '2019', investment: 37000 },
  { year: '2020', investment: 20000 },
  { year: '2021', investment: 29000 },
];

// Data for Monthly Revenue (smooth curved teal spline line)
const monthlyRevenueData = [
  { year: '2016', revenue: 12000 },
  { year: '', revenue: 18000 },
  { year: '2017', revenue: 13000 },
  { year: '', revenue: 26000 },
  { year: '2018', revenue: 31000 },
  { year: '', revenue: 25000 },
  { year: '2019', revenue: 20000 },
  { year: '', revenue: 27000 },
  { year: '2020', revenue: 22000 },
  { year: '', revenue: 14000 },
  { year: '2021', revenue: 34000 },
];

// 3 Investment rows
const myInvestmentsList = [
  {
    id: 'inv-1',
    name: 'Apple Store',
    category: 'E-commerce, Marketplace',
    amount: '$54,000',
    returnVal: '+16%',
    isPositive: true,
    icon: 'apple',
    iconBg: '#FFE5EC',
    iconColor: '#FF82AC',
  },
  {
    id: 'inv-2',
    name: 'Samsung Mobile',
    category: 'E-commerce, Marketplace',
    amount: '$25,300',
    returnVal: '-4%',
    isPositive: false,
    icon: 'google',
    iconBg: '#E7EDFF',
    iconColor: '#2D60FF',
  },
  {
    id: 'inv-3',
    name: 'Tesla Motors',
    category: 'Electric Vehicles',
    amount: '$8,200',
    returnVal: '+25%',
    isPositive: true,
    icon: 'tesla',
    iconBg: '#FFF5D9',
    iconColor: '#FFBB38',
  },
];

// Trending stock table data
const trendingStockData = [
  { slNo: '01.', name: 'Trivago', price: '$520', returnVal: '+5%', isPositive: true },
  { slNo: '02.', name: 'Canon', price: '$480', returnVal: '+10%', isPositive: true },
  { slNo: '03.', name: 'Uber Food', price: '$350', returnVal: '-3%', isPositive: false },
  { slNo: '04.', name: 'Nokia', price: '$940', returnVal: '+2%', isPositive: true },
  { slNo: '05.', name: 'Tiktok', price: '$670', returnVal: '-12%', isPositive: false },
];

export default function Investments() {
  // Custom Dot for Yearly Total Investment (hollow with orange border)
  const CustomInvestmentDot = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="#FFFFFF"
        stroke="#FCAA0B"
        strokeWidth={3}
      />
    );
  };

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Top Row: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-7">
        {/* Card 1: Total Invested Amount */}
        <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-3.5 sm:gap-5 min-w-0">
          <div className="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
            {/* Money sack SVG */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2v2M9 4h6l2 4H7l2-4zm-3 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 4.4-2.7 8-6 8s-6-3.6-6-8z"
                stroke="#16DBCC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11v4M10.5 12.5h3"
                stroke="#16DBCC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[11px] sm:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Total Invested Amount
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              $150,000
            </h3>
          </div>
        </div>

        {/* Card 2: Number of Investments */}
        <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-3.5 sm:gap-5 min-w-0">
          <div className="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full bg-[#FFE5EC] flex items-center justify-center shrink-0">
            {/* Pie chart percentage SVG */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#FF82AC" strokeWidth="2" />
              <path d="M12 3v9h9" stroke="#FF82AC" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[11px] sm:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Number of Investments
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              1,250
            </h3>
          </div>
        </div>

        {/* Card 3: Rate of Return */}
        <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card flex items-center gap-3.5 sm:gap-5 min-w-0 sm:col-span-2 md:col-span-1">
          <div className="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
            <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D60FF]" />
          </div>
          <div className="min-w-0 truncate">
            <p className="text-[11px] sm:text-xs text-[#718EBF] font-normal mb-0.5 sm:mb-1 truncate">
              Rate of Return
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#232323] tracking-tight truncate">
              +5.80%
            </h3>
          </div>
        </div>
      </div>

      {/* Middle Row: Yearly Total Investment & Monthly Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (6 cols): Yearly Total Investment */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Yearly Total Investment
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card">
            <div className="h-[220px] sm:h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={yearlyInvestmentData}
                  margin={{ top: 15, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="#EDF0F7"
                  />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                  />
                  <YAxis
                    domain={[0, 40000]}
                    ticks={[0, 10000, 20000, 30000, 40000]}
                    tickFormatter={(val) => `$${val.toLocaleString()}`}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Investment']}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #DFEAF2' }}
                  />
                  <Line
                    type="linear"
                    dataKey="investment"
                    stroke="#FCAA0B"
                    strokeWidth={3}
                    dot={<CustomInvestmentDot />}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right (6 cols): Monthly Revenue */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Monthly Revenue
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card">
            <div className="h-[220px] sm:h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyRevenueData}
                  margin={{ top: 15, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="#EDF0F7"
                  />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                  />
                  <YAxis
                    domain={[0, 40000]}
                    ticks={[0, 10000, 20000, 30000, 40000]}
                    tickFormatter={(val) => `$${val.toLocaleString()}`}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Revenue']}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #DFEAF2' }}
                  />
                  <Line
                    type="natural"
                    dataKey="revenue"
                    stroke="#16DBCC"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: My Investment & Trending Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
        {/* Left (7 cols): My Investment */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              My Investment
            </h2>
          </div>

          {/* 3 Investment Cards */}
          {myInvestmentsList.map((inv) => (
            <div
              key={inv.id}
              className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-[#DFEAF2]/60 shadow-card flex items-center justify-between gap-3 hover:shadow-md transition-shadow"
            >
              {/* Left: Icon & Name */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: inv.iconBg }}
                >
                  {inv.icon === 'apple' ? (
                    <Apple className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF82AC]" />
                  ) : inv.icon === 'google' ? (
                    /* Google 'G' Icon */
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.5 12.25c0-.8-.07-1.55-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#2D60FF"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#2D60FF"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                        fill="#2D60FF"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#2D60FF"
                      />
                    </svg>
                  ) : (
                    /* Tesla 'T' Icon */
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5.5c2.8 0 5.8.7 8 2.2l.8-2.2C17.8 4 14.8 3.5 12 3.5S6.2 4 3.2 5.5l.8 2.2c2.2-1.5 5.2-2.2 8-2.2zM12 9c1.6 0 3.3.4 4.8 1.2l.6-1.8C15.8 7.5 13.8 7 12 7S8.2 7.5 6.6 8.4l.6 1.8C8.7 9.4 10.4 9 12 9zm-1 3.5h2v8h-2v-8z"
                        fill="#FFBB38"
                      />
                    </svg>
                  )}
                </div>
                <div className="min-w-0 truncate">
                  <h4 className="text-sm sm:text-base font-bold text-[#232323] truncate">
                    {inv.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#718EBF] mt-0.5 truncate">
                    {inv.category}
                  </p>
                </div>
              </div>

              {/* Center: Envestment Value */}
              <div className="text-left hidden sm:block">
                <span className="text-sm sm:text-base font-semibold text-[#232323] block">
                  {inv.amount}
                </span>
                <span className="text-[11px] sm:text-xs text-[#718EBF] block mt-0.5">
                  Envestment Value
                </span>
              </div>

              {/* Right: Return Value */}
              <div className="text-right shrink-0">
                <span
                  className={`text-sm sm:text-base font-semibold block ${
                    inv.isPositive ? 'text-[#16DBCC]' : 'text-[#FE5C73]'
                  }`}
                >
                  {inv.returnVal}
                </span>
                <span className="text-[11px] sm:text-xs text-[#718EBF] block mt-0.5">
                  Return Value
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right (5 cols): Trending Stock */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-3.5 sm:mb-4">
            <h2 className="text-lg xs:text-xl sm:text-[22px] font-bold text-[#343C6A]">
              Trending Stock
            </h2>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2]/60 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs sm:text-sm text-[#718EBF] font-medium border-b border-[#F4F5F7]">
                    <th className="pb-3.5 pl-1 font-medium">SL No</th>
                    <th className="pb-3.5 font-medium">Name</th>
                    <th className="pb-3.5 font-medium">Price</th>
                    <th className="pb-3.5 pr-1 text-right font-medium">Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F5F7] text-xs sm:text-sm">
                  {trendingStockData.map((stock) => (
                    <tr key={stock.slNo} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 pl-1 text-[#718EBF] font-normal">
                        {stock.slNo}
                      </td>
                      <td className="py-3.5 font-medium text-[#232323]">
                        {stock.name}
                      </td>
                      <td className="py-3.5 text-[#718EBF] font-normal">
                        {stock.price}
                      </td>
                      <td className="py-3.5 pr-1 text-right font-semibold">
                        <span className={stock.isPositive ? 'text-[#16DBCC]' : 'text-[#FE5C73]'}>
                          {stock.returnVal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
