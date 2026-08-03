import React, { useState } from 'react';
import { Send, CheckCircle2, DollarSign, Calendar, Sparkles, UserCheck, Search } from 'lucide-react';
import { DirectMessage, ChatMessage } from '../../types';

interface MessagesScreenProps {
  messagesList: DirectMessage[];
  chatHistory: ChatMessage[];
  onSendMessage: (text: string) => void;
  onOpenBookModal: (recipientName: string) => void;
}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({
  messagesList,
  chatHistory,
  onSendMessage,
  onOpenBookModal,
}) => {
  const [selectedDm, setSelectedDm] = useState<DirectMessage>(messagesList[0]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'hiring' | 'applying' | 'networking'>('all');
  const [inputText, setInputText] = useState('');

  const filteredDms = messagesList.filter((dm) => {
    if (activeFilter === 'all') return true;
    return dm.category === activeFilter;
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 min-h-[560px] pb-20 md:pb-0 font-sans">
      {/* Left Conversations Sidebar */}
      <div className="md:col-span-5 border-r-2 border-[#000000] flex flex-col bg-[#F7F7F5]">
        {/* Header */}
        <div className="p-3.5 border-b border-[#000000] space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-impact text-xl text-black">Messages</h3>
            <span className="font-mono-code text-[10px] bg-[#FFB5AF] text-black px-2 py-0.5 rounded border border-black font-bold">
              Columbus DMs
            </span>
          </div>

          {/* Category Chips */}
          <div className="flex gap-1 overflow-x-auto font-mono-code text-[10px] scrollbar-none">
            {['all', 'hiring', 'applying', 'networking'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as any)}
                className={`px-2.5 py-1 rounded-full border border-black capitalize font-bold shrink-0 ${
                  activeFilter === cat ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#E9E9E6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#000000]/10">
          {filteredDms.map((dm) => {
            const isSelected = selectedDm.id === dm.id;
            return (
              <div
                key={dm.id}
                onClick={() => setSelectedDm(dm)}
                className={`p-3 flex items-center gap-3 cursor-pointer transition-colors ${
                  isSelected ? 'bg-[#FFFFFF] border-l-4 border-l-[#FF3C75]' : 'hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="relative">
                  <img
                    src={dm.participant.avatar}
                    alt={dm.participant.name}
                    className="w-10 h-10 rounded-full object-cover border border-black"
                  />
                  {dm.participant.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-black truncate">{dm.participant.name}</h4>
                    <span className="font-mono-code text-[9px] text-[#888]">{dm.timeAgo}</span>
                  </div>
                  <p className="text-[11px] text-[#666] truncate mt-0.5">{dm.lastMessage}</p>
                </div>

                {dm.unreadCount > 0 && (
                  <span className="w-2 h-2 bg-[#FF3C75] rounded-full shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Conversation View */}
      <div className="md:col-span-7 flex flex-col justify-between bg-white h-full">
        {/* Chat Partner Header with Book CTA */}
        <div className="p-3 border-b border-[#000000] flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2.5">
            <img
              src={selectedDm.participant.avatar}
              alt={selectedDm.participant.name}
              className="w-9 h-9 rounded-full object-cover border border-black"
            />
            <div>
              <h4 className="font-bold text-xs text-black">{selectedDm.participant.name}</h4>
              <p className="font-mono-code text-[10px] text-[#666]">{selectedDm.participant.role}</p>
            </div>
          </div>

          <button
            onClick={() => onOpenBookModal(selectedDm.participant.name)}
            className="px-3 py-1.5 bg-[#FFB5AF] text-black font-mono-code text-[11px] font-bold rounded-xl border border-black hover:brightness-95 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Book / Request Project</span>
          </button>
        </div>

        {/* Message Stream */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3 font-sans text-xs">
          {chatHistory.map((msg) => {
            const isMe = msg.senderId === 'usr-alex';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl border border-black ${
                    isMe
                      ? 'bg-[#000000] text-white rounded-br-none'
                      : 'bg-[#F7F7F5] text-black rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>

                  {/* Proposal Card embedded in chat */}
                  {msg.isProposal && msg.proposalDetails && (
                    <div className="mt-2 p-2.5 bg-white text-black rounded-xl border border-black font-mono-code text-[11px] space-y-1.5 shadow-sm">
                      <span className="font-bold uppercase text-[9px] text-[#FF3C75] block">Formal Gig Proposal</span>
                      <div className="font-bold text-xs">{msg.proposalDetails.title}</div>
                      <div className="flex justify-between text-[10px] text-[#555]">
                        <span>Budget: {msg.proposalDetails.amount}</span>
                        <span>{msg.proposalDetails.date}</span>
                      </div>
                      <button
                        onClick={() => onOpenBookModal(selectedDm.participant.name)}
                        className="w-full py-1.5 bg-[#000000] text-white font-bold rounded-lg border border-black text-center"
                      >
                        Accept &amp; Confirm Booking
                      </button>
                    </div>
                  )}
                </div>

                <span className="font-mono-code text-[9px] text-[#888] mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}
        </div>

        {/* Message Input Bar */}
        <form onSubmit={handleSend} className="p-3 border-t border-[#000000] bg-[#F7F7F5] flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Message ${selectedDm.participant.name}...`}
            className="flex-1 p-2.5 bg-white border border-black rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors flex items-center gap-1"
          >
            <Send className="w-3.5 h-3.5 text-[#FFB5AF]" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
