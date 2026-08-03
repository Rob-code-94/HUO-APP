import React from 'react';

export const WireframeKitView: React.FC = () => {
  return (
    <div className="bg-[#E9E9E6] text-[#1A1A1A] font-mono-code p-4 sm:p-8 rounded-2xl border-2 border-black space-y-12 overflow-x-auto">
      {/* Kit Banner */}
      <div className="border-b-2 border-black pb-4 space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
            HUO — WIREFRAME BLUEPRINT KIT / V1
          </h1>
          <span className="text-xs bg-[#FF3C75] text-white px-2 py-0.5 rounded font-bold">
            STAGE 00 - 05
          </span>
        </div>
        <p className="text-xs text-[#555] font-mono-code">
          Low-fidelity structural wires · Greyscale · Pink flags (<span className="text-[#FF3C75] font-bold">▲</span>) highlight product decisions from the Midwest creative network bible.
        </p>
      </div>

      {/* STAGE 0: ONBOARDING GATE */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs border border-black px-2 py-0.5 font-bold">00</span>
          <h2 className="text-sm uppercase font-bold tracking-wider">Beta Gate → Welcome</h2>
        </div>

        <div className="flex flex-wrap gap-6 items-start">
          {/* Splash */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Splash</div>
            <div className="w-[230px] h-[460px] bg-black border-2 border-black flex flex-col items-center justify-center text-center p-4">
              <span className="font-impact text-4xl text-[#FF3C75] tracking-tight">HUO</span>
              <span className="text-[9px] uppercase tracking-widest text-[#888] mt-2">creative network</span>
            </div>
          </div>

          {/* Invite Code */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Invite Code</div>
            <div className="w-[230px] h-[460px] bg-white border-2 border-black flex flex-col p-4 justify-between">
              <div className="space-y-3">
                <span className="text-[9px] text-[#666] uppercase block">Huo — Creative Network</span>
                <div className="text-xs font-bold">You're invited.</div>
                <div className="text-[9px] text-[#888] uppercase">Enter beta code</div>
                <div className="border border-black h-8 bg-[#F7F7F5]" />
                <div className="border border-black bg-black text-white text-[10px] uppercase text-center py-2 font-bold">
                  Continue
                </div>
              </div>
              <div className="text-[9px] text-[#666] text-center underline">No code? Join waitlist →</div>
            </div>
          </div>

          {/* Welcome */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Welcome to Huo</div>
            <div className="w-[230px] h-[460px] bg-white border-2 border-black flex flex-col items-center justify-center p-4 text-center space-y-4">
              <span className="font-impact text-2xl text-[#FF3C75]">HUO</span>
              <div className="text-xs font-bold">Welcome to Huo</div>
              <div className="w-full bg-[#E5E5E2] h-2 rounded" />
              <div className="w-3/4 bg-[#E5E5E2] h-2 rounded" />
              <div className="w-full border border-black bg-black text-white text-[10px] uppercase py-2 font-bold">
                Get started
              </div>
            </div>
          </div>

          {/* Annotations */}
          <div className="w-[260px] text-xs font-mono-code space-y-2 bg-[#F7F7F5] border border-black p-3 rounded-xl">
            <span className="font-bold text-[#FF3C75] text-[10px] block uppercase">Stage 0 Decisions</span>
            <ul className="space-y-1.5 text-[11px] text-[#333] leading-relaxed">
              <li><span className="text-[#FF3C75] font-bold">▲</span> Gate order: invite code validates → Welcome → Login/Signup.</li>
              <li>Beta code screen doubles as brand intro — first thing an invited creative sees.</li>
              <li>Waitlist link for anyone without a code, low-emphasis at bottom.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STAGE 1: SIGNUP & ACCOUNT TYPE */}
      <div className="space-y-4 pt-6 border-t border-black">
        <div className="flex items-center gap-3">
          <span className="text-xs border border-black px-2 py-0.5 font-bold">01</span>
          <h2 className="text-sm uppercase font-bold tracking-wider">Signup → Account Type → Profile Setup</h2>
        </div>

        <div className="flex flex-wrap gap-6 items-start">
          {/* Account Type Selector Wire */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Account Type</div>
            <div className="w-[230px] h-[460px] bg-white border-2 border-black p-4 flex flex-col space-y-3">
              <span className="text-[9px] text-[#888] uppercase">Step 3 / 5</span>
              <div className="text-xs font-bold">How will you use Huo?</div>

              <div className="border border-black p-2.5 bg-[#F7F7F5]">
                <div className="text-[10px] font-bold">Creative</div>
                <div className="text-[8px] text-[#666]">showcase work, find gigs</div>
              </div>

              <div className="border border-black p-2.5 bg-[#F7F7F5]">
                <div className="text-[10px] font-bold">Business</div>
                <div className="text-[8px] text-[#666]">find &amp; hire creative talent</div>
              </div>

              <div className="border border-black p-2.5 bg-[#F7F7F5]">
                <div className="text-[10px] font-bold">Consumer</div>
                <div className="text-[8px] text-[#666]">discover local creativity</div>
              </div>
            </div>
          </div>

          {/* Skill Tags */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Skill Tags</div>
            <div className="w-[230px] h-[460px] bg-white border-2 border-black p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] text-[#888] uppercase">Step 5 / 5</span>
                <div className="text-xs font-bold">Pick your categories</div>
                <div className="flex flex-wrap gap-1">
                  <span className="border border-black bg-black text-white text-[8px] px-2 py-0.5 rounded-full">Photo</span>
                  <span className="border border-black text-[8px] px-2 py-0.5 rounded-full">Video</span>
                  <span className="border border-black bg-black text-white text-[8px] px-2 py-0.5 rounded-full">Music</span>
                  <span className="border border-black text-[8px] px-2 py-0.5 rounded-full">Design</span>
                  <span className="border border-black text-[8px] px-2 py-0.5 rounded-full">Styling</span>
                  <span className="border border-black text-[8px] px-2 py-0.5 rounded-full">Other...</span>
                </div>
              </div>
              <div className="border border-black bg-black text-white text-[10px] uppercase text-center py-2 font-bold">
                Finish
              </div>
            </div>
          </div>

          <div className="w-[260px] text-xs font-mono-code space-y-2 bg-[#F7F7F5] border border-black p-3 rounded-xl">
            <span className="font-bold text-[#FF3C75] text-[10px] block uppercase">Stage 1 Decisions</span>
            <ul className="space-y-1.5 text-[11px] text-[#333] leading-relaxed">
              <li><span className="text-[#FF3C75] font-bold">▲</span> Verification sits right after basics, with email/phone fallback.</li>
              <li><span className="text-[#FF3C75] font-bold">▲</span> Tags are multi-select and include an open "Other" tag for uncommon creative disciplines.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STAGE 2: HOME FEED TOGGLE */}
      <div className="space-y-4 pt-6 border-t border-black">
        <div className="flex items-center gap-3">
          <span className="text-xs border border-black px-2 py-0.5 font-bold">02</span>
          <h2 className="text-sm uppercase font-bold tracking-wider">Home — Feed Toggle (Portfolio vs Community)</h2>
        </div>

        <div className="flex flex-wrap gap-6 items-start">
          {/* Home Wireframe */}
          <div className="w-[230px]">
            <div className="text-[11px] text-[#333] mb-1 font-bold">Home — Portfolio Feed</div>
            <div className="w-[230px] h-[460px] bg-white border-2 border-black flex flex-col justify-between">
              <div>
                <div className="p-2 border-b border-black flex justify-between items-center text-[10px]">
                  <span className="font-impact text-[#FF3C75]">HUO</span>
                  <span>🔔</span>
                </div>
                <div className="flex border-b border-black text-[9px] text-center font-bold">
                  <div className="flex-1 py-1.5 bg-black text-white">Portfolio</div>
                  <div className="flex-1 py-1.5 text-[#888]">Community</div>
                </div>
                <div className="p-2 space-y-2">
                  <div className="border border-black p-1 space-y-1">
                    <div className="h-2 bg-[#DCDCD8] w-1/2" />
                    <div className="h-16 placeholder-wire border border-black" />
                  </div>
                </div>
              </div>
              <div className="border-t border-black h-10 flex justify-around items-center text-[9px]">
                <span>🏠</span><span>🔍</span><span>(+)</span><span>💬</span><span>👤</span>
              </div>
            </div>
          </div>

          <div className="w-[260px] text-xs font-mono-code space-y-2 bg-[#F7F7F5] border border-black p-3 rounded-xl">
            <span className="font-bold text-[#FF3C75] text-[10px] block uppercase">Stage 2 Decisions</span>
            <ul className="space-y-1.5 text-[11px] text-[#333] leading-relaxed">
              <li>Portfolio feed = work/BTS posts; Community feed = text + mixers + equipment questions.</li>
              <li>Consumer persona gets same toggle for Pinterest-style discovery.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
