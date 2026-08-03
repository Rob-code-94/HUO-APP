import React from 'react';
import { Home, Search, PlusCircle, MessageSquare, User, Lock } from 'lucide-react';
import { MainTab, AccountType } from '../types';

interface BottomNavProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  accountType: AccountType;
  onOpenActionSheet: () => void;
  unreadMessagesCount: number;
  onOpenProModal: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  accountType,
  onOpenActionSheet,
  unreadMessagesCount,
  onOpenProModal,
}) => {
  const isConsumerLocked = accountType === 'consumer';

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-[#FFFFFF]/95 backdrop-blur-md border-2 border-[#000000] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-1.5 flex items-center justify-between">
      {/* Home */}
      <button
        onClick={() => setActiveTab('home')}
        className={`relative flex-1 flex flex-col items-center justify-center py-1.5 rounded-full transition-all ${
          activeTab === 'home'
            ? 'bg-[#000000] text-white font-bold'
            : 'text-[#666666] hover:text-black'
        }`}
        aria-label="Home Feed"
      >
        <Home className="w-5 h-5 stroke-[2]" />
        <span className="font-mono-code text-[9px] uppercase tracking-wider mt-0.5">Feed</span>
      </button>

      {/* Search / Discover */}
      <button
        onClick={() => {
          if (isConsumerLocked) {
            onOpenProModal();
          } else {
            setActiveTab('search');
          }
        }}
        className={`relative flex-1 flex flex-col items-center justify-center py-1.5 rounded-full transition-all ${
          activeTab === 'search'
            ? 'bg-[#000000] text-white font-bold'
            : 'text-[#666666] hover:text-black'
        }`}
        aria-label="Search Gigs & Talent"
      >
        <Search className="w-5 h-5 stroke-[2]" />
        <span className="font-mono-code text-[9px] uppercase tracking-wider mt-0.5">Discover</span>
        {isConsumerLocked && (
          <span className="absolute -top-1 -right-0.5 bg-[#C0C0C0] text-black rounded-full p-0.5">
            <Lock className="w-2.5 h-2.5" />
          </span>
        )}
      </button>

      {/* Floating Center Action Button (+) */}
      <button
        onClick={() => {
          if (isConsumerLocked) {
            onOpenProModal();
          } else {
            onOpenActionSheet();
          }
        }}
        className="relative flex items-center justify-center w-11 h-11 bg-[#000000] text-white rounded-full border border-black shadow-md hover:scale-105 active:scale-95 transition-all mx-1 shrink-0"
        aria-label="Create or Post"
      >
        <PlusCircle className="w-6 h-6 stroke-[2.2] text-[#FFB5AF]" />
        {isConsumerLocked && (
          <span className="absolute -top-1 -right-1 bg-[#C0C0C0] text-black rounded-full p-0.5 border border-black">
            <Lock className="w-2.5 h-2.5" />
          </span>
        )}
      </button>

      {/* Messages */}
      <button
        onClick={() => setActiveTab('messages')}
        className={`relative flex-1 flex flex-col items-center justify-center py-1.5 rounded-full transition-all ${
          activeTab === 'messages'
            ? 'bg-[#000000] text-white font-bold'
            : 'text-[#666666] hover:text-black'
        }`}
        aria-label="Direct Messages"
      >
        <MessageSquare className="w-5 h-5 stroke-[2]" />
        <span className="font-mono-code text-[9px] uppercase tracking-wider mt-0.5">DMs</span>
        {unreadMessagesCount > 0 && (
          <span className="absolute top-1 right-3 w-2 h-2 bg-[#FF3C75] rounded-full ring-2 ring-white" />
        )}
      </button>

      {/* Profile */}
      <button
        onClick={() => setActiveTab('profile')}
        className={`relative flex-1 flex flex-col items-center justify-center py-1.5 rounded-full transition-all ${
          activeTab === 'profile'
            ? 'bg-[#000000] text-white font-bold'
            : 'text-[#666666] hover:text-black'
        }`}
        aria-label="Profile"
      >
        <User className="w-5 h-5 stroke-[2]" />
        <span className="font-mono-code text-[9px] uppercase tracking-wider mt-0.5">Profile</span>
      </button>
    </div>
  );
};
