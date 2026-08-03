import React from 'react';
import { Home, Search, Briefcase, MessageSquare, User, Plus, Sparkles, Shield, Lock } from 'lucide-react';
import { MainTab, AccountType } from '../types';

interface DesktopNavProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  accountType: AccountType;
  onOpenActionSheet: () => void;
  onOpenProModal: () => void;
  unreadMessagesCount: number;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  activeTab,
  setActiveTab,
  accountType,
  onOpenActionSheet,
  onOpenProModal,
  unreadMessagesCount,
}) => {
  const isConsumer = accountType === 'consumer';

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-[#000000] bg-[#FFFFFF] p-5 h-[calc(100vh-57px)] sticky top-[57px] shrink-0 justify-between">
      <div className="space-y-6">
        {/* Navigation Section */}
        <div>
          <div className="font-mono-code text-[10px] uppercase text-[#888888] tracking-widest px-3 mb-3">
            Main Navigation
          </div>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'home'
                  ? 'bg-[#000000] text-white font-semibold shadow-sm'
                  : 'text-black hover:bg-[#F7F7F5]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Live Local Feed</span>
            </button>

            <button
              onClick={() => {
                if (isConsumer) {
                  onOpenProModal();
                } else {
                  setActiveTab('search');
                }
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'search'
                  ? 'bg-[#000000] text-white font-semibold shadow-sm'
                  : 'text-black hover:bg-[#F7F7F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4" />
                <span>Talent &amp; Search</span>
              </div>
              {isConsumer && <Lock className="w-3.5 h-3.5 text-[#888]" />}
            </button>

            <button
              onClick={() => setActiveTab('jobboard')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'jobboard'
                  ? 'bg-[#000000] text-white font-semibold shadow-sm'
                  : 'text-black hover:bg-[#F7F7F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4" />
                <span>Job Marketplace</span>
              </div>
              <span className="font-mono-code text-[9px] bg-[#FFB5AF] text-black px-1.5 py-0.5 rounded border border-black">
                Gigs
              </span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'messages'
                  ? 'bg-[#000000] text-white font-semibold shadow-sm'
                  : 'text-black hover:bg-[#F7F7F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" />
                <span>Messages &amp; Booking</span>
              </div>
              {unreadMessagesCount > 0 && (
                <span className="w-2 h-2 bg-[#FF3C75] rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#000000] text-white font-semibold shadow-sm'
                  : 'text-black hover:bg-[#F7F7F5]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile &amp; Work</span>
            </button>
          </nav>
        </div>

        {/* Primary Action Button */}
        <div>
          <button
            onClick={() => {
              if (isConsumer) {
                onOpenProModal();
              } else {
                onOpenActionSheet();
              }
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#000000] hover:bg-[#222222] text-white font-mono-code text-xs font-bold rounded-lg border border-black shadow-sm transition-all"
          >
            <Plus className="w-4 h-4 text-[#FFB5AF]" />
            <span>{isConsumer ? 'Upgrade to Post' : 'Create & Post'}</span>
          </button>
        </div>
      </div>

      {/* Pro Membership Banner */}
      <div className="bg-[#F7F7F5] border border-[#000000] rounded-xl p-4 font-mono-code text-xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-bold">
            <Sparkles className="w-4 h-4 text-[#FF3C75]" />
            <span>Huo Pro</span>
          </div>
          <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded">
            $19/mo
          </span>
        </div>
        <p className="text-[11px] text-[#555] font-sans leading-tight">
          Apply to unlimited gigs, client invoices &amp; verified badge.
        </p>
        <button
          onClick={onOpenProModal}
          className="w-full text-center py-1.5 bg-[#FFB5AF] text-black font-mono-code text-[11px] font-bold border border-black rounded hover:brightness-95 transition-all"
        >
          View Plans
        </button>
      </div>
    </aside>
  );
};
