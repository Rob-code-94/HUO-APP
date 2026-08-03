import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const FlowMapView: React.FC = () => {
  const nodes = [
    {
      stage: 'Stage 00',
      title: 'Beta Gate & Onboarding',
      items: ['Splash screen', 'Invite Code validation', 'Welcome manifesto card', '5-step signup wizard'],
    },
    {
      stage: 'Stage 01',
      title: 'Persona & Role Selection',
      items: ['Creative Freelancer', 'Business / Agency', 'Consumer Client', 'Skill tag picker'],
    },
    {
      stage: 'Stage 02',
      title: 'Live Local Feed',
      items: ['Portfolio (Work/BTS)', 'Community (Mixers/Q&A)', 'City filter (Columbus/CLE/CIN)', 'Lightbox viewer'],
    },
    {
      stage: 'Stage 03',
      title: 'Discover & Search',
      items: ['Talent search', 'Spotlight Producers', 'Marketplace Gigs', 'Agency profiles'],
    },
    {
      stage: 'Stage 04',
      title: 'Job & Casting Board',
      items: ['Gig listings', 'Free allowance tracker (3 max)', 'Casting & Comp card flow', 'Pro lock sheet'],
    },
    {
      stage: 'Stage 05',
      title: 'DMs & Direct Booking',
      items: ['Filtered DM list', 'Chat stream', 'Formal proposal cards', 'Direct project booking request'],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] border-2 border-black rounded-2xl p-6 space-y-6 font-sans">
      <div className="border-b-2 border-black pb-4">
        <span className="font-mono-code text-[10px] uppercase text-[#FF3C75] font-bold tracking-widest block">
          HUO SITEMAP ARCHITECTURE
        </span>
        <h1 className="font-impact text-2xl text-black tracking-wide mt-0.5">Interactive Flow &amp; Navigation Tree</h1>
        <p className="text-xs text-[#555] font-mono-code mt-1">
          Complete structural map from Stage 0 Beta Gate to Stage 5 Booking &amp; Messaging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono-code text-xs">
        {nodes.map((node, index) => (
          <div key={index} className="bg-[#F7F7F5] border-2 border-black rounded-xl p-4 space-y-3 relative">
            <div className="flex items-center justify-between border-b border-black pb-2">
              <span className="text-[10px] uppercase bg-black text-white px-2 py-0.5 rounded font-bold">
                {node.stage}
              </span>
              <Sparkles className="w-4 h-4 text-[#FF3C75]" />
            </div>

            <h3 className="font-bold text-sm text-black font-sans">{node.title}</h3>

            <ul className="space-y-1.5 text-[11px] text-[#444] font-sans">
              {node.items.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3C75] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
