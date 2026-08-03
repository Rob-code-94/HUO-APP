import React from 'react';

export const DesignTokensView: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-black rounded-2xl p-6 space-y-8 font-sans">
      {/* Header */}
      <div className="border-b-2 border-black pb-4">
        <span className="font-mono-code text-[10px] uppercase text-[#FF3C75] font-bold tracking-widest block">
          HUO DESIGN SYSTEM / TOKEN SPEC
        </span>
        <h1 className="font-impact text-2xl text-black tracking-wide mt-0.5">Visual Design Tokens &amp; Components</h1>
        <p className="text-xs text-[#555] font-mono-code mt-1">
          Reference system for colors, typography, spacing, wireframe textures, and button states.
        </p>
      </div>

      {/* Color Palette */}
      <div className="space-y-3">
        <h3 className="font-mono-code text-xs font-bold uppercase text-black border-b border-black pb-1">
          01. Brand Color Palette
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code text-xs">
          {/* Coral / Accent */}
          <div className="border border-black rounded-xl overflow-hidden">
            <div className="h-16 bg-[#FFB5AF] border-b border-black flex items-center justify-center font-bold">
              #FFB5AF
            </div>
            <div className="p-2.5 bg-white text-[11px]">
              <div className="font-bold">Coral Accent</div>
              <div className="text-[9px] text-[#666]">Primary CTAs &amp; highlights</div>
            </div>
          </div>

          {/* Hot Pink */}
          <div className="border border-black rounded-xl overflow-hidden">
            <div className="h-16 bg-[#FF3C75] text-white border-b border-black flex items-center justify-center font-bold">
              #FF3C75
            </div>
            <div className="p-2.5 bg-white text-[11px]">
              <div className="font-bold">Hot Pink Flag</div>
              <div className="text-[9px] text-[#666]">Pro badge &amp; alerts</div>
            </div>
          </div>

          {/* Black */}
          <div className="border border-black rounded-xl overflow-hidden">
            <div className="h-16 bg-[#000000] text-white border-b border-black flex items-center justify-center font-bold">
              #000000
            </div>
            <div className="p-2.5 bg-white text-[11px]">
              <div className="font-bold">Deep Black</div>
              <div className="text-[9px] text-[#666]">Text, borders, primary buttons</div>
            </div>
          </div>

          {/* Paper White */}
          <div className="border border-black rounded-xl overflow-hidden">
            <div className="h-16 bg-[#F7F7F5] border-b border-black flex items-center justify-center font-bold">
              #F7F7F5
            </div>
            <div className="p-2.5 bg-white text-[11px]">
              <div className="font-bold">Paper Warm Background</div>
              <div className="text-[9px] text-[#666]">Base canvas &amp; cards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-3">
        <h3 className="font-mono-code text-xs font-bold uppercase text-black border-b border-black pb-1">
          02. Typography Pairings
        </h3>

        <div className="space-y-4 border border-black rounded-xl p-4 bg-[#F7F7F5]">
          <div>
            <span className="font-mono-code text-[10px] text-[#888] uppercase block">Display Heading · Anton / Impact</span>
            <div className="font-impact text-3xl text-black">HUO COLUMBUS CREATIVE NETWORK</div>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-[#888] uppercase block">Monospace Code / UI Labels · JetBrains Mono / Courier New</span>
            <div className="font-mono-code text-xs text-black uppercase font-bold tracking-widest">
              [STAGE 02] // LOCAL FEED · COLUMBUS, OH · 2026
            </div>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-[#888] uppercase block">Body Copy · Plus Jakarta Sans</span>
            <div className="font-sans text-xs text-black leading-relaxed">
              The professional network for creative talent in the Midwest — Instagram feed + Fiverr marketplace + LinkedIn networking for photographers, videographers, models, and directors.
            </div>
          </div>
        </div>
      </div>

      {/* Button & Input States */}
      <div className="space-y-3">
        <h3 className="font-mono-code text-xs font-bold uppercase text-black border-b border-black pb-1">
          03. Button &amp; Control States
        </h3>

        <div className="flex flex-wrap gap-3 font-mono-code text-xs">
          <button className="px-5 py-2.5 bg-black text-white font-bold rounded-xl border border-black">
            Primary Black
          </button>
          <button className="px-5 py-2.5 bg-[#FFB5AF] text-black font-bold rounded-xl border border-black">
            Coral Accent CTA
          </button>
          <button className="px-5 py-2.5 bg-white text-black font-bold rounded-xl border border-black">
            Secondary Outline
          </button>
          <span className="px-3 py-1.5 bg-[#FF3C75] text-white font-bold rounded-full text-[10px]">
            Huo Pro Badge
          </span>
        </div>
      </div>
    </div>
  );
};
