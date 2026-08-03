import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AccountType } from '../../types';

interface SplashWelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteSignup: (accountType: AccountType) => void;
}

export const SplashWelcomeModal: React.FC<SplashWelcomeModalProps> = ({
  isOpen,
  onClose,
  onCompleteSignup,
}) => {
  const [stage, setStage] = useState<'splash' | 'invite' | 'welcome' | 'signup'>('invite');
  const [inviteCode, setInviteCode] = useState('COLUMBUS2026');
  const [signupStep, setSignupStep] = useState(1);
  const [selectedType, setSelectedType] = useState<AccountType>('creative');
  const [selectedTags, setSelectedTags] = useState<string[]>(['Photo', 'Music', 'Styling']);

  if (!isOpen) return null;

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl p-6 font-sans space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STAGE: INVITE CODE */}
        {stage === 'invite' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="font-mono-code text-[10px] uppercase text-[#888888] tracking-widest block">
                Stage 00 · Beta Gate
              </span>
              <h2 className="font-impact text-3xl tracking-tight text-black mt-1">You're invited.</h2>
              <p className="text-xs text-[#555] font-sans mt-1">
                Enter your Columbus Creative Network invite code to enter the private beta.
              </p>
            </div>

            <div className="space-y-2 font-mono-code">
              <label className="text-[10px] uppercase text-[#666] block">Beta Code</label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="COLUMBUS2026"
                className="w-full p-3 bg-[#F7F7F5] border-2 border-black rounded-xl text-sm font-bold uppercase tracking-wider text-black focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
              />
            </div>

            <button
              onClick={() => setStage('welcome')}
              className="w-full py-3.5 bg-[#000000] text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors flex items-center justify-center gap-2"
            >
              <span>Validate Code</span>
              <ArrowRight className="w-4 h-4 text-[#FFB5AF]" />
            </button>

            <div className="text-center font-mono-code text-[11px] text-[#666]">
              No code? <button onClick={() => alert('Waitlist registered! We issue invites weekly to Columbus creatives.')} className="underline font-bold text-black hover:text-[#FF3C75]">Join waitlist →</button>
            </div>
          </div>
        )}

        {/* STAGE: WELCOME */}
        {stage === 'welcome' && (
          <div className="space-y-6 pt-2 text-center">
            <div>
              <span className="font-impact text-4xl text-[#FF3C75] tracking-tight block">HUO</span>
              <h2 className="font-mono-code text-base font-bold text-black mt-2">Welcome to Huo</h2>
            </div>

            <div className="bg-[#F7F7F5] border border-black rounded-xl p-4 font-sans text-xs text-[#333] leading-relaxed space-y-2">
              <p className="font-semibold text-black">
                "Creating a platform where anyone can hire creative talent, and any creative professional can find work, collaborators, crew members, and opportunities."
              </p>
              <p className="font-mono-code text-[10px] text-[#888] uppercase">Columbus · Cleveland · Cincinnati</p>
            </div>

            <button
              onClick={() => setStage('signup')}
              className="w-full py-3.5 bg-[#000000] text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors"
            >
              Get Started / Sign Up
            </button>
          </div>
        )}

        {/* STAGE: SIGNUP 5-STEP WIZARD */}
        {stage === 'signup' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#000000] pb-2 font-mono-code">
              <span className="text-[10px] uppercase text-[#888]">
                Signup Wizard · Step {signupStep} / 5
              </span>
              <span className="text-[10px] bg-[#FFB5AF] text-black px-1.5 py-0.5 rounded font-bold">
                {signupStep === 1 && 'Basics'}
                {signupStep === 2 && 'Verification'}
                {signupStep === 3 && 'Account Type'}
                {signupStep === 4 && 'Profile'}
                {signupStep === 5 && 'Skills'}
              </span>
            </div>

            {/* STEP 1: BASICS */}
            {signupStep === 1 && (
              <div className="space-y-3 font-sans text-xs">
                <h3 className="font-mono-code font-bold text-sm text-black">Create your account</h3>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Full Name</label>
                  <input type="text" defaultValue="Alex Rivera" className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Email</label>
                  <input type="email" defaultValue="alex@columbuscreatives.com" className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Phone</label>
                  <input type="tel" defaultValue="(614) 555-0192" className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <button
                  onClick={() => setSignupStep(2)}
                  className="w-full py-3 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] mt-2"
                >
                  Next: Verify
                </button>
              </div>
            )}

            {/* STEP 2: VERIFY */}
            {signupStep === 2 && (
              <div className="space-y-4 font-sans text-xs text-center">
                <h3 className="font-mono-code font-bold text-sm text-black">Verify it's you</h3>
                <p className="text-xs text-[#666]">Enter the 6-digit security code sent to your email.</p>
                <div className="flex justify-center gap-2 font-mono-code">
                  {['6', '1', '4', '8', '2', '0'].map((digit, idx) => (
                    <div key={idx} className="w-10 h-12 border-2 border-black rounded-xl flex items-center justify-center font-bold text-lg bg-[#F7F7F5]">
                      {digit}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSignupStep(3)}
                  className="w-full py-3 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222]"
                >
                  Verify &amp; Continue
                </button>
              </div>
            )}

            {/* STEP 3: ACCOUNT TYPE */}
            {signupStep === 3 && (
              <div className="space-y-3 font-sans text-xs">
                <h3 className="font-mono-code font-bold text-sm text-black">How will you use Huo?</h3>
                
                <button
                  onClick={() => setSelectedType('creative')}
                  className={`w-full p-3.5 border-2 rounded-xl text-left transition-all ${
                    selectedType === 'creative' ? 'border-[#000000] bg-[#FFF8F7]' : 'border-[#C0C0C0] bg-white'
                  }`}
                >
                  <div className="font-mono-code font-bold text-xs text-black">Creative Talent / Freelancer</div>
                  <div className="text-[#666] text-xs mt-0.5">Showcase work, find gigs, collaborate with crew</div>
                </button>

                <button
                  onClick={() => setSelectedType('business')}
                  className={`w-full p-3.5 border-2 rounded-xl text-left transition-all ${
                    selectedType === 'business' ? 'border-[#000000] bg-[#FFF8F7]' : 'border-[#C0C0C0] bg-white'
                  }`}
                >
                  <div className="font-mono-code font-bold text-xs text-black">Business / Production Agency</div>
                  <div className="text-[#666] text-xs mt-0.5">Post jobs, hire talent &amp; cast models</div>
                </button>

                <button
                  onClick={() => setSelectedType('consumer')}
                  className={`w-full p-3.5 border-2 rounded-xl text-left transition-all ${
                    selectedType === 'consumer' ? 'border-[#000000] bg-[#FFF8F7]' : 'border-[#C0C0C0] bg-white'
                  }`}
                >
                  <div className="font-mono-code font-bold text-xs text-black">Consumer / Local Client</div>
                  <div className="text-[#666] text-xs mt-0.5">Discover local creativity, request private hires</div>
                </button>

                <button
                  onClick={() => setSignupStep(4)}
                  className="w-full py-3 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] mt-2"
                >
                  Next: Setup Profile
                </button>
              </div>
            )}

            {/* STEP 4: PROFILE */}
            {signupStep === 4 && (
              <div className="space-y-3 font-sans text-xs">
                <h3 className="font-mono-code font-bold text-sm text-black">Tell us about yourself</h3>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Title / Primary Role</label>
                  <input type="text" defaultValue="Director of Photography" className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Bio</label>
                  <textarea rows={2} defaultValue="Midwest cinematographer based in Columbus, OH." className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <div>
                  <label className="font-mono-code text-[10px] uppercase text-[#666] block mb-1">Location</label>
                  <input type="text" defaultValue="Columbus, OH" className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl" />
                </div>
                <button
                  onClick={() => setSignupStep(5)}
                  className="w-full py-3 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] mt-1"
                >
                  Next: Categories
                </button>
              </div>
            )}

            {/* STEP 5: SKILLS */}
            {signupStep === 5 && (
              <div className="space-y-4 font-sans text-xs">
                <h3 className="font-mono-code font-bold text-sm text-black">Pick your categories</h3>
                <p className="text-xs text-[#666]">Select all creative disciplines that apply to you:</p>

                <div className="flex flex-wrap gap-2 font-mono-code">
                  {['Photo', 'Video', 'Music', 'Design', 'Writing', 'Styling', 'Set Build', 'Colorist', 'Casting', 'Other...'].map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`py-1.5 px-3 rounded-full border border-black text-xs transition-all ${
                          isSelected ? 'bg-black text-white font-bold' : 'bg-[#F7F7F5] text-black'
                        }`}
                      >
                        {tag} {isSelected ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => {
                    onCompleteSignup(selectedType);
                    onClose();
                  }}
                  className="w-full py-3.5 bg-[#FFB5AF] text-black font-mono-code text-xs font-bold rounded-xl border-2 border-black hover:brightness-95 transition-all mt-3"
                >
                  Complete Setup &amp; Enter Huo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
