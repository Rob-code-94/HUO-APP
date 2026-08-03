import React from 'react';
import { X, User, Settings as SettingsIcon, HelpCircle, LogOut, Sparkles, MapPin, BellRing, Bookmark, CheckSquare } from 'lucide-react';
import { AccountType } from '../../types';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  onOpenProModal: () => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  isOpen,
  onClose,
  accountType,
  setAccountType,
  onOpenProModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xs bg-[#FFFFFF] border-r-2 border-[#000000] h-full flex flex-col justify-between shadow-2xl p-5 font-sans overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#000000] pb-4">
            <div>
              <span className="font-impact text-2xl text-[#FF3C75] tracking-tight">HUO</span>
              <p className="font-mono-code text-[10px] text-[#666] uppercase">Columbus Creative Network</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* User Account Card */}
          <div className="bg-[#F7F7F5] border border-black rounded-xl p-3 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="User"
              className="w-10 h-10 rounded-full object-cover border border-black"
            />
            <div className="min-w-0">
              <h4 className="font-bold text-xs text-black truncate">Alex Rivera</h4>
              <p className="font-mono-code text-[10px] text-[#666] truncate">Director of Photography</p>
            </div>
          </div>

          {/* Quick Persona Switcher in Menu */}
          <div className="space-y-1.5 font-mono-code text-xs">
            <span className="text-[10px] uppercase text-[#888] font-bold block">Active Account Role</span>
            <div className="grid grid-cols-3 gap-1 bg-[#F7F7F5] border border-black p-1 rounded-lg text-[10px]">
              <button
                onClick={() => setAccountType('creative')}
                className={`py-1.5 rounded font-bold ${
                  accountType === 'creative' ? 'bg-black text-white' : 'text-black hover:bg-[#E9E9E6]'
                }`}
              >
                Creative
              </button>
              <button
                onClick={() => setAccountType('business')}
                className={`py-1.5 rounded font-bold ${
                  accountType === 'business' ? 'bg-black text-white' : 'text-black hover:bg-[#E9E9E6]'
                }`}
              >
                Business
              </button>
              <button
                onClick={() => setAccountType('consumer')}
                className={`py-1.5 rounded font-bold ${
                  accountType === 'consumer' ? 'bg-black text-white' : 'text-black hover:bg-[#E9E9E6]'
                }`}
              >
                Consumer
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="space-y-1 text-xs font-mono-code">
            <div className="text-[10px] uppercase text-[#888] font-bold pt-2 mb-1">Settings &amp; Support</div>
            
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F7F7F5] text-black">
              <User className="w-4 h-4" />
              <span>Account Information</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F7F7F5] text-black">
              <SettingsIcon className="w-4 h-4" />
              <span>Preferences &amp; Location</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F7F7F5] text-black">
              <HelpCircle className="w-4 h-4" />
              <span>Help &amp; Support</span>
            </button>

            <button 
              onClick={() => alert('Sign out simulation complete.')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FFF0F0] text-rose-600 font-bold"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>

        {/* Switch to Pro Upgrade Banner matching wireframe image! */}
        <div className="bg-[#000000] text-white border border-black rounded-2xl p-4 font-mono-code space-y-3 mt-6">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFB5AF]" />
            <h5 className="font-bold text-xs text-white">Switch to Pro</h5>
          </div>
          <p className="text-[11px] text-[#CCCCCC] font-sans leading-tight">
            Increase visibility and apply to unlimited jobs on Midwest Creative Network.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenProModal();
            }}
            className="w-full py-2 bg-[#FFB5AF] text-black font-mono-code text-xs font-bold rounded-xl border border-black hover:brightness-95 transition-all text-center"
          >
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};
