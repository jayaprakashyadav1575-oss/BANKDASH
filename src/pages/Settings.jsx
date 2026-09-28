import React, { useState } from 'react';
import { Pencil, ChevronDown } from 'lucide-react';
import { useBank } from '../context/BankContext';

export default function Settings() {
  const { handleUpdateProfile, showToast, isLoading } = useBank();
  const [activeTab, setActiveTab] = useState('profile'); // Default to Edit Profile (Setting Page 1)

  // Edit Profile Form State matching reference image
  const [profileData, setProfileData] = useState({
    name: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '••••••••••',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
  });

  // Preferences State matching Setting Page 2 reference image
  const [preferences, setPreferences] = useState({
    currency: 'USD',
    timeZone: '(GMT-12:00) International Date Line West',
    notifDigitalCurrency: true, // ON (#16DBCC)
    notifMerchantOrders: false,  // OFF (#DFEAF2)
    notifRecommendations: true,  // ON (#16DBCC)
  });

  // Security State matching Setting Page 3 reference image
  const [security, setSecurity] = useState({
    twoFactor: true, // ON (#16DBCC)
    currentPassword: '••••••••••',
    newPassword: '••••••••••',
  });

  // Handle local image upload
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileData({ ...profileData, avatar: url });
      showToast('Avatar updated successfully!', 'success');
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    await handleUpdateProfile(profileData);
  };

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    showToast('Preferences saved successfully!', 'success');
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    showToast('Security settings saved successfully!', 'success');
  };

  return (
    <div className="bg-white rounded-[20px] sm:rounded-[25px] p-4 sm:p-7 md:p-9 border border-[#DFEAF2]/60 shadow-card">
      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-5 sm:gap-8 md:gap-10 border-b border-[#E6EFF5] mb-6 sm:mb-8 md:mb-9 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 text-sm sm:text-base font-semibold transition-all relative whitespace-nowrap ${
            activeTab === 'profile'
              ? 'text-[#1814F3]'
              : 'text-[#718EBF] hover:text-[#343C6A]'
          }`}
        >
          Edit Profile
          {activeTab === 'profile' && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('preferences')}
          className={`pb-3 text-sm sm:text-base font-semibold transition-all relative whitespace-nowrap ${
            activeTab === 'preferences'
              ? 'text-[#1814F3]'
              : 'text-[#718EBF] hover:text-[#343C6A]'
          }`}
        >
          Preferences
          {activeTab === 'preferences' && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`pb-3 text-sm sm:text-base font-semibold transition-all relative whitespace-nowrap ${
            activeTab === 'security'
              ? 'text-[#1814F3]'
              : 'text-[#718EBF] hover:text-[#343C6A]'
          }`}
        >
          Security
          {activeTab === 'security' && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-sm" />
          )}
        </button>
      </div>

      {/* Tab 1: Edit Profile (Setting Page 1) */}
      {activeTab === 'profile' && (
        <form onSubmit={handleProfileSubmit}>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Avatar with Pencil button */}
            <div className="flex flex-col items-center shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full object-cover shadow-sm"
                />
                <label className="absolute bottom-0 right-0 sm:right-1 w-7 h-7 sm:w-[32px] sm:h-[32px] rounded-full bg-[#1814F3] hover:bg-[#0A06D3] text-white flex items-center justify-center cursor-pointer shadow-md ring-2 ring-white transition-colors">
                  <Pencil className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* 2-Column Input Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-7 gap-y-4 sm:gap-y-5 w-full">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  value={profileData.userName}
                  onChange={(e) => setProfileData({ ...profileData, userName: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={profileData.password}
                  onChange={(e) => setProfileData({ ...profileData, password: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                    className="w-full h-11 sm:h-[50px] px-4 sm:px-5 pr-10 sm:pr-11 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                  />
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#718EBF] absolute right-3.5 sm:right-4 top-3.5 sm:top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Present Address
                </label>
                <input
                  type="text"
                  value={profileData.presentAddress}
                  onChange={(e) => setProfileData({ ...profileData, presentAddress: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Permanent Address
                </label>
                <input
                  type="text"
                  value={profileData.permanentAddress}
                  onChange={(e) => setProfileData({ ...profileData, permanentAddress: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={profileData.city}
                  onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  value={profileData.postalCode}
                  onChange={(e) => setProfileData({ ...profileData, postalCode: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={profileData.country}
                  onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6 sm:mt-7">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-[190px] h-11 sm:h-[50px] rounded-[12px] sm:rounded-[15px] bg-[#1814F3] hover:bg-[#0A06D3] text-white font-semibold text-xs sm:text-sm transition-all shadow-blue-glow hover:shadow-lg disabled:opacity-50 flex items-center justify-center"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: Preferences (Setting Page 2) */}
      {activeTab === 'preferences' && (
        <form onSubmit={handlePreferencesSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-7 gap-y-4 sm:gap-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                Currency
              </label>
              <input
                type="text"
                value={preferences.currency}
                onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
                className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                Time Zone
              </label>
              <input
                type="text"
                value={preferences.timeZone}
                onChange={(e) => setPreferences({ ...preferences, timeZone: e.target.value })}
                className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
              />
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-base font-bold text-[#343C6A] mb-4 sm:mb-5">
              Notification
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setPreferences({
                      ...preferences,
                      notifDigitalCurrency: !preferences.notifDigitalCurrency,
                    })
                  }
                  className={`w-[52px] sm:w-[56px] h-[28px] sm:h-[30px] rounded-full transition-colors relative focus:outline-none shrink-0 ${
                    preferences.notifDigitalCurrency ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]'
                  }`}
                >
                  <span
                    className={`w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full bg-white shadow-sm transform transition-transform block absolute top-[4px] ${
                      preferences.notifDigitalCurrency ? 'translate-x-[28px] sm:translate-x-[30px]' : 'translate-x-[4px]'
                    }`}
                  />
                </button>
                <span className="text-xs sm:text-sm font-medium text-[#718EBF]">
                  I send or receive digital currency
                </span>
              </div>

              <div className="flex items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setPreferences({
                      ...preferences,
                      notifMerchantOrders: !preferences.notifMerchantOrders,
                    })
                  }
                  className={`w-[52px] sm:w-[56px] h-[28px] sm:h-[30px] rounded-full transition-colors relative focus:outline-none shrink-0 ${
                    preferences.notifMerchantOrders ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]'
                  }`}
                >
                  <span
                    className={`w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full bg-white shadow-sm transform transition-transform block absolute top-[4px] ${
                      preferences.notifMerchantOrders ? 'translate-x-[28px] sm:translate-x-[30px]' : 'translate-x-[4px]'
                    }`}
                  />
                </button>
                <span className="text-xs sm:text-sm font-medium text-[#718EBF]">
                  I receive merchant order
                </span>
              </div>

              <div className="flex items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setPreferences({
                      ...preferences,
                      notifRecommendations: !preferences.notifRecommendations,
                    })
                  }
                  className={`w-[52px] sm:w-[56px] h-[28px] sm:h-[30px] rounded-full transition-colors relative focus:outline-none shrink-0 ${
                    preferences.notifRecommendations ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]'
                  }`}
                >
                  <span
                    className={`w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full bg-white shadow-sm transform transition-transform block absolute top-[4px] ${
                      preferences.notifRecommendations ? 'translate-x-[28px] sm:translate-x-[30px]' : 'translate-x-[4px]'
                    }`}
                  />
                </button>
                <span className="text-xs sm:text-sm font-medium text-[#718EBF]">
                  There are recommendation for my account
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <button
              type="submit"
              className="w-full sm:w-[190px] h-11 sm:h-[50px] rounded-[12px] sm:rounded-[15px] bg-[#1814F3] hover:bg-[#0A06D3] text-white font-semibold text-xs sm:text-sm transition-all shadow-blue-glow hover:shadow-lg flex items-center justify-center"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Tab 3: Security (Setting Page 3) matching reference image exactly */}
      {activeTab === 'security' && (
        <form onSubmit={handleSecuritySubmit} className="space-y-6">
          {/* Two-factor Authentication */}
          <div>
            <h4 className="text-base font-bold text-[#343C6A] mb-4">
              Two-factor Authentication
            </h4>

            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Toggle switch in #16DBCC teal */}
              <button
                type="button"
                onClick={() => setSecurity({ ...security, twoFactor: !security.twoFactor })}
                className={`w-[52px] sm:w-[56px] h-[28px] sm:h-[30px] rounded-full transition-colors relative focus:outline-none shrink-0 ${
                  security.twoFactor ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]'
                }`}
              >
                <span
                  className={`w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full bg-white shadow-sm transform transition-transform block absolute top-[4px] ${
                    security.twoFactor ? 'translate-x-[28px] sm:translate-x-[30px]' : 'translate-x-[4px]'
                  }`}
                />
              </button>
              <span className="text-xs sm:text-sm font-medium text-[#718EBF]">
                Enable or disable two factor authentication
              </span>
            </div>
          </div>

          {/* Change Password */}
          <div className="pt-2">
            <h4 className="text-base font-bold text-[#343C6A] mb-4">
              Change Password
            </h4>

            <div className="space-y-4 max-w-[480px]">
              {/* Current Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={security.currentPassword}
                  onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                  placeholder="**********"
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#232323] mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={security.newPassword}
                  onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                  placeholder="**********"
                  className="w-full h-11 sm:h-[50px] px-4 sm:px-5 rounded-[12px] sm:rounded-[15px] border border-[#DFEAF2] text-xs sm:text-sm text-[#718EBF] focus:outline-none focus:border-[#1814F3] focus:text-[#232323] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Bottom Right: Save Button */}
          <div className="flex justify-end pt-5">
            <button
              type="submit"
              className="w-full sm:w-[190px] h-11 sm:h-[50px] rounded-[12px] sm:rounded-[15px] bg-[#1814F3] hover:bg-[#0A06D3] text-white font-semibold text-xs sm:text-sm transition-all shadow-blue-glow hover:shadow-lg flex items-center justify-center"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
