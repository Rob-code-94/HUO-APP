import React from 'react';
import { Search, Briefcase, FileText, ImagePlus, Users, MessageSquare, X } from 'lucide-react';

interface ActionSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPostGig: () => void;
  onOpenShowcase: () => void;
  onSelectSearch: () => void;
}

export const ActionSheetModal: React.FC<ActionSheetModalProps> = ({
  isOpen,
  onClose,
  onOpenPostGig,
  onOpenShowcase,
  onSelectSearch,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FFFFFF] border-2 border-[#000000] rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar on mobile */}
        <div className="w-12 h-1 bg-[#C0C0C0] rounded-full mx-auto sm:hidden" />

        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono-code text-[10px] uppercase text-[#888888] tracking-widest">
              Create / Action
            </span>
            <h3 className="font-impact text-xl tracking-wide">What would you like to do?</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5] transition-colors"
          >
            <X className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Action list */}
        <div className="space-y-2.5 font-sans">
          <button
            onClick={() => {
              onClose();
              onSelectSearch();
            }}
            className="w-full flex items-center gap-3.5 p-3.5 border border-[#000000] rounded-xl hover:bg-[#F7F7F5] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-black flex items-center justify-center group-hover:bg-[#FFB5AF] transition-colors">
              <Search className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-mono-code text-xs font-bold text-black">Start a search</div>
              <div className="text-xs text-[#666666]">Discover specific talent, models, or creative work</div>
            </div>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPostGig();
            }}
            className="w-full flex items-center gap-3.5 p-3.5 border border-[#000000] rounded-xl hover:bg-[#F7F7F5] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-black flex items-center justify-center group-hover:bg-[#FFB5AF] transition-colors">
              <Briefcase className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-mono-code text-xs font-bold text-black">Post a job / Gig</div>
              <div className="text-xs text-[#666666]">Find your perfect crew fit or cast models</div>
            </div>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenShowcase();
            }}
            className="w-full flex items-center gap-3.5 p-3.5 border border-[#000000] rounded-xl hover:bg-[#F7F7F5] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-black flex items-center justify-center group-hover:bg-[#FFB5AF] transition-colors">
              <ImagePlus className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-mono-code text-xs font-bold text-black">Upload a project / Showcase work</div>
              <div className="text-xs text-[#666666]">Display your work in live feed &amp; tag collaborators</div>
            </div>
          </button>

          <button
            onClick={() => {
              alert('Invoice tool preview: Huo Pro allows generating verified PDF invoices directly to client DMs!');
              onClose();
            }}
            className="w-full flex items-center gap-3.5 p-3.5 border border-[#000000] rounded-xl hover:bg-[#F7F7F5] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-black flex items-center justify-center group-hover:bg-[#FFB5AF] transition-colors">
              <FileText className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs font-bold text-black">Create an invoice</span>
                <span className="font-mono-code text-[9px] bg-[#FF3C75] text-white px-1.5 py-0.2 rounded">
                  NEW
                </span>
              </div>
              <div className="text-xs text-[#666666]">Get paid directly from direct messages</div>
            </div>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPostGig();
            }}
            className="w-full flex items-center gap-3.5 p-3.5 border border-[#000000] rounded-xl hover:bg-[#F7F7F5] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-black flex items-center justify-center group-hover:bg-[#FFB5AF] transition-colors">
              <Users className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-mono-code text-xs font-bold text-black">Build a team</div>
              <div className="text-xs text-[#666666]">Assemble full production crews in Columbus</div>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#000000] text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
