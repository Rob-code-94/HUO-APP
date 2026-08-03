import React from 'react';
import { Code2, Terminal, FileCode, Check, Copy } from 'lucide-react';

export const DevNotesView: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-black rounded-2xl p-6 space-y-6 font-mono-code text-xs">
      <div className="border-b-2 border-black pb-4">
        <span className="font-mono-code text-[10px] uppercase text-[#FF3C75] font-bold tracking-widest block">
          DEVELOPER HANDOFF GUIDE
        </span>
        <h1 className="font-impact text-2xl text-black tracking-wide mt-0.5">Next.js &amp; Tailwind CSS Integration Notes</h1>
        <p className="text-xs text-[#555] font-sans mt-1">
          Detailed technical handoff notes for transitioning this UI prototype to production backend services.
        </p>
      </div>

      <div className="space-y-4 font-sans">
        <div className="bg-[#F7F7F5] border border-black rounded-xl p-4 space-y-2">
          <h3 className="font-mono-code text-xs font-bold uppercase text-black">01. Component Architecture</h3>
          <p className="text-xs text-[#333] leading-relaxed">
            All screens are organized into modular, client-side React components inside <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">/src/components/screens</code>. They consume typed data models from <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">/src/types/index.ts</code>.
          </p>
        </div>

        <div className="bg-[#F7F7F5] border border-black rounded-xl p-4 space-y-2">
          <h3 className="font-mono-code text-xs font-bold uppercase text-black">02. State &amp; Persona Management</h3>
          <p className="text-xs text-[#333] leading-relaxed">
            The top-level <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">App.tsx</code> manages account persona context (<code className="font-bold">creative</code>, <code className="font-bold">business</code>, <code className="font-bold">consumer</code>) and updates navigation rules dynamically (e.g., locking Consumer search &amp; applications behind Pro modals).
          </p>
        </div>

        <div className="bg-[#F7F7F5] border border-black rounded-xl p-4 space-y-2">
          <h3 className="font-mono-code text-xs font-bold uppercase text-black">03. Production Database Mapping</h3>
          <p className="text-xs text-[#333] leading-relaxed">
            When migrating to PostgreSQL or Firebase Firestore, map <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">UserProfile</code> to the users table with JSONB columns for <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">measurements</code> and array columns for <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">skills</code> and <code className="bg-white border border-black px-1 py-0.5 rounded text-[10px]">gear</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
