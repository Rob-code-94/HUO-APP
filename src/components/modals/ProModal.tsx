import React from 'react';
import { X, Sparkles, Check, Lock, ShieldCheck, Zap } from 'lucide-react';

interface ProModalProps {
  isOpen: boolean;
  onClose: () => void;
  appFreeApplicationsLeft: number;
}

export const ProModal: React.FC<ProModalProps> = ({
  isOpen,
  onClose,
  appFreeApplicationsLeft,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#000000] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF3C75]" />
            <h3 className="font-impact text-2xl tracking-wide">HUO PRO</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Upgrade Banner */}
        <div className="bg-[#000000] text-white rounded-xl p-4 font-mono-code space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Sparkles className="w-24 h-24 text-white" />
          </div>
          <span className="text-[10px] uppercase text-[#FFB5AF] tracking-wider block font-bold">
            Midwest Creative Network Pass
          </span>
          <h4 className="text-base font-bold text-white font-sans">
            Apply to unlimited jobs &amp; stand out with less competition.
          </h4>
          <p className="text-[11px] text-[#CCCCCC] font-sans">
            Free tier includes 3 lifetime applications/connection requests. Upgrade to Pro to unlock unlimited marketplace access across Columbus, Cleveland &amp; Cincinnati.
          </p>
        </div>

        {/* Tier Comparison Table */}
        <div className="grid grid-cols-2 gap-3 font-sans text-xs">
          {/* Free Tier Card */}
          <div className="border border-[#C0C0C0] rounded-xl p-4 bg-[#F7F7F5] space-y-3">
            <div>
              <div className="font-mono-code text-[10px] uppercase text-[#666666]">Free Plan</div>
              <div className="font-impact text-xl mt-0.5">$0 / mo</div>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-1.5 text-[#555]">
                <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span>3 Lifetime Applications ({appFreeApplicationsLeft} remaining)</span>
              </div>
              <div className="flex items-start gap-1.5 text-[#555]">
                <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span>Basic Profile &amp; Portfolio</span>
              </div>
              <div className="flex items-start gap-1.5 text-[#888] line-through">
                <Lock className="w-3.5 h-3.5 text-[#888] shrink-0 mt-0.5" />
                <span>Pro Verified Badge</span>
              </div>
              <div className="flex items-start gap-1.5 text-[#888] line-through">
                <Lock className="w-3.5 h-3.5 text-[#888] shrink-0 mt-0.5" />
                <span>Direct Client Invoices</span>
              </div>
            </div>
          </div>

          {/* Pro Tier Card */}
          <div className="border-2 border-[#000000] rounded-xl p-4 bg-[#FFFFFF] space-y-3 relative shadow-md">
            <span className="absolute -top-2.5 right-3 bg-[#FF3C75] text-white font-mono-code text-[9px] font-bold px-2 py-0.5 rounded-full border border-black">
              RECOMMENDED
            </span>
            <div>
              <div className="font-mono-code text-[10px] uppercase text-[#FF3C75] font-bold">Huo Pro</div>
              <div className="font-impact text-xl mt-0.5">$19 / mo</div>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-1.5 font-semibold text-black">
                <Check className="w-3.5 h-3.5 text-[#FF3C75] shrink-0 mt-0.5 stroke-[3]" />
                <span>Unlimited Job &amp; Casting Applications</span>
              </div>
              <div className="flex items-start gap-1.5 font-semibold text-black">
                <Check className="w-3.5 h-3.5 text-[#FF3C75] shrink-0 mt-0.5 stroke-[3]" />
                <span>Priority Talent Search Positioning</span>
              </div>
              <div className="flex items-start gap-1.5 font-semibold text-black">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF3C75] shrink-0 mt-0.5 stroke-[3]" />
                <span>Verified Pro Badge</span>
              </div>
              <div className="flex items-start gap-1.5 font-semibold text-black">
                <Zap className="w-3.5 h-3.5 text-[#FF3C75] shrink-0 mt-0.5 stroke-[3]" />
                <span>Instant Invoicing &amp; Direct Booking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              alert('Pro Subscription Simulation: Your account has been upgraded to Huo Pro! Unlimited applications unlocked.');
              onClose();
            }}
            className="w-full py-3.5 bg-[#FFB5AF] text-black font-mono-code text-xs font-bold rounded-xl border-2 border-black hover:brightness-95 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            <span>Unlock Huo Pro ($19/mo)</span>
          </button>
          <p className="text-[10px] font-mono-code text-[#666666] text-center">
            UI Wireframe simulation · No actual charge will occur
          </p>
        </div>
      </div>
    </div>
  );
};
