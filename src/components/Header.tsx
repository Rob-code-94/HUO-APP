import React from 'react';
import { Bell, Sliders, Sparkles, UserCheck, Shield, Eye, Smartphone, LayoutGrid, Palette, GitFork, Code } from 'lucide-react';
import { AppViewMode, AccountType } from '../types';

interface HeaderProps {
  viewMode: AppViewMode;
  setViewMode: (mode: AppViewMode) => void;
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  unreadNotifications: number;
  onOpenNotifications: () => void;
  onOpenSettings: () => void;
  onOpenOnboarding: () => void;
  onOpenProModal: () => void;
  appFreeApplicationsLeft: number;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  accountType,
  setAccountType,
  unreadNotifications,
  onOpenNotifications,
  onOpenSettings,
  onOpenOnboarding,
  onOpenProModal,
  appFreeApplicationsLeft,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFFFF] border-b border-[#000000] text-black">
      {/* Top Banner & Control Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => setViewMode('app')} 
            className="cursor-pointer flex items-center gap-2 group"
          >
            <span className="font-impact text-2xl tracking-tighter text-[#FF3C75] group-hover:opacity-90 transition-opacity">
              HUO
            </span>
            <span className="hidden sm:inline-block font-mono-code text-[10px] uppercase tracking-wider text-[#666] border-l border-[#C0C0C0] pl-2 py-0.5">
              Columbus Creative Network
            </span>
          </div>

          {/* Account Persona Selector */}
          <div className="hidden md:flex items-center gap-1 bg-[#F7F7F5] border border-[#000000] rounded-full p-0.5 text-xs font-mono-code">
            <span className="text-[10px] text-[#666] px-2 uppercase">Persona:</span>
            <button
              onClick={() => setAccountType('creative')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                accountType === 'creative'
                  ? 'bg-[#000000] text-white font-semibold'
                  : 'text-black hover:bg-[#E9E9E6]'
              }`}
            >
              Creative
            </button>
            <button
              onClick={() => setAccountType('business')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                accountType === 'business'
                  ? 'bg-[#000000] text-white font-semibold'
                  : 'text-black hover:bg-[#E9E9E6]'
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setAccountType('consumer')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                accountType === 'consumer'
                  ? 'bg-[#000000] text-white font-semibold'
                  : 'text-black hover:bg-[#E9E9E6]'
              }`}
            >
              Consumer
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Pro Pill */}
          <button
            onClick={onOpenProModal}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#FFB5AF] text-black border border-[#000000] rounded-full font-mono-code text-[11px] font-bold hover:brightness-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Huo Pro</span>
            <span className="bg-black text-white px-1.5 py-0.2 text-[9px] rounded-full">
              {appFreeApplicationsLeft > 0 ? `${appFreeApplicationsLeft}/3 Left` : 'PRO'}
            </span>
          </button>

          {/* Onboarding Wizard Launch */}
          <button
            onClick={onOpenOnboarding}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1 bg-[#F7F7F5] text-black border border-[#000000] rounded-full font-mono-code text-[11px] hover:bg-[#E9E9E6] transition-all"
            title="Launch Welcome & Beta Gate Wizard"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Gate Wizard</span>
          </button>

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-full border border-[#000000] bg-[#FFFFFF] hover:bg-[#F7F7F5] transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-black" />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#FF3C75] rounded-full ring-2 ring-white" />
            )}
          </button>

          {/* Settings Hamburger */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-full border border-[#000000] bg-[#FFFFFF] hover:bg-[#F7F7F5] transition-colors"
            aria-label="Settings"
          >
            <Sliders className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* View Mode Navigation Tabs */}
      <div className="bg-[#F7F7F5] border-t border-[#000000] overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-w-max text-xs font-mono-code">
          <div className="flex items-center">
            <button
              onClick={() => setViewMode('app')}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors font-medium ${
                viewMode === 'app'
                  ? 'border-[#FF3C75] text-[#000000] font-bold bg-[#FFFFFF]'
                  : 'border-transparent text-[#666666] hover:text-black'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive App</span>
            </button>

            <button
              onClick={() => setViewMode('wireframes')}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors font-medium ${
                viewMode === 'wireframes'
                  ? 'border-[#FF3C75] text-[#000000] font-bold bg-[#FFFFFF]'
                  : 'border-transparent text-[#666666] hover:text-black'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Wireframe Board</span>
              <span className="text-[9px] bg-[#FF3C75] text-white px-1 rounded">v1</span>
            </button>

            <button
              onClick={() => setViewMode('tokens')}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors font-medium ${
                viewMode === 'tokens'
                  ? 'border-[#FF3C75] text-[#000000] font-bold bg-[#FFFFFF]'
                  : 'border-transparent text-[#666666] hover:text-black'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Design Tokens & UI Kit</span>
            </button>

            <button
              onClick={() => setViewMode('flow')}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors font-medium ${
                viewMode === 'flow'
                  ? 'border-[#FF3C75] text-[#000000] font-bold bg-[#FFFFFF]'
                  : 'border-transparent text-[#666666] hover:text-black'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Sitemap Flow</span>
            </button>

            <button
              onClick={() => setViewMode('devnotes')}
              className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors font-medium ${
                viewMode === 'devnotes'
                  ? 'border-[#FF3C75] text-[#000000] font-bold bg-[#FFFFFF]'
                  : 'border-transparent text-[#666666] hover:text-black'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Developer Notes</span>
            </button>
          </div>

          {/* Persona switcher pill on mobile */}
          <div className="flex md:hidden items-center gap-1 py-1 pr-2">
            <span className="text-[10px] text-[#888]">Role:</span>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value as AccountType)}
              className="bg-white border border-[#000000] text-[11px] rounded px-1.5 py-0.5 font-mono-code font-semibold"
            >
              <option value="creative">Creative</option>
              <option value="business">Business</option>
              <option value="consumer">Consumer</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
