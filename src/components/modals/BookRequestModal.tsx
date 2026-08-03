import React, { useState } from 'react';
import { X, Calendar, DollarSign, Send, CheckCircle2 } from 'lucide-react';

interface BookRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
}

export const BookRequestModal: React.FC<BookRequestModalProps> = ({
  isOpen,
  onClose,
  recipientName,
}) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [date, setDate] = useState('Aug 25, 2026');
  const [budget, setBudget] = useState('$1,500');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#000000] pb-3">
          <div>
            <span className="font-mono-code text-[10px] uppercase text-[#888888]">
              Direct Hire &amp; Booking
            </span>
            <h3 className="font-impact text-xl tracking-wide">Request Project with {recipientName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 font-mono-code">
            <CheckCircle2 className="w-12 h-12 text-[#000000] mx-auto text-emerald-600" />
            <h4 className="font-bold text-sm">Booking Request Sent!</h4>
            <p className="text-xs text-[#555] font-sans">
              {recipientName} has been notified in Direct Messages. You will receive a response shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <div>
              <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
                Project Name
              </label>
              <input
                type="text"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="e.g. Brand Commercial Video Shoot"
                className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono-code">
              <div>
                <label className="text-[10px] uppercase text-[#666666] block mb-1">Target Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#666666] block mb-1">Offered Budget ($)</label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
                Scope &amp; Deliverables Note
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Details regarding location, expected hours, equipment needed..."
                className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
              />
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 border border-black rounded-xl font-mono-code text-xs hover:bg-[#F7F7F5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-[#000000] text-white rounded-xl font-mono-code text-xs font-bold border border-black hover:bg-[#222] flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-[#FFB5AF]" />
                <span>Send Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
