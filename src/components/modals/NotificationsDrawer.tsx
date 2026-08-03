import React, { useState } from 'react';
import { X, Check, UserPlus, Heart, MessageCircle, Briefcase, Bell } from 'lucide-react';
import { NotificationItem } from '../../types';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onAcceptConnect: (id: string) => void;
  onDeclineConnect: (id: string) => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onAcceptConnect,
  onDeclineConnect,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'requests'>('all');

  if (!isOpen) return null;

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === 'requests') return n.type === 'connect_request';
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm bg-[#FFFFFF] border-l-2 border-[#000000] h-full flex flex-col shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#000000] flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#FF3C75]" />
            <h3 className="font-impact text-lg tracking-wide">Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs: All vs Requests */}
        <div className="flex border-b border-[#000000] font-mono-code text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2.5 text-center font-bold border-b-2 transition-all ${
              activeTab === 'all'
                ? 'border-[#FF3C75] text-black bg-white'
                : 'border-transparent text-[#666666] bg-[#F7F7F5]'
            }`}
          >
            All Updates ({notifications.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 py-2.5 text-center font-bold border-b-2 transition-all ${
              activeTab === 'requests'
                ? 'border-[#FF3C75] text-black bg-white'
                : 'border-transparent text-[#666666] bg-[#F7F7F5]'
            }`}
          >
            Requests ({notifications.filter((n) => n.type === 'connect_request').length})
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="py-12 text-center text-[#888] font-mono-code text-xs space-y-2">
              <p>No notifications in this tab</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-3 border border-black rounded-xl space-y-2 transition-all ${
                  notif.unread ? 'bg-[#FFF8F7] border-black' : 'bg-white'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <img
                    src={notif.actor.avatar}
                    alt={notif.actor.name}
                    className="w-9 h-9 rounded-full object-cover border border-black shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-black">
                      <span className="font-bold">{notif.actor.name}</span>{' '}
                      <span className="text-[#333]">{notif.message}</span>
                    </div>
                    <div className="font-mono-code text-[10px] text-[#888] mt-0.5">
                      {notif.timeAgo}
                    </div>
                  </div>

                  {notif.targetPostImage && (
                    <img
                      src={notif.targetPostImage}
                      alt="target"
                      className="w-9 h-9 rounded-md object-cover border border-black shrink-0"
                    />
                  )}
                </div>

                {/* Inline Accept / Decline for Connect Requests */}
                {notif.type === 'connect_request' && (
                  <div className="flex gap-2 pt-1 font-mono-code text-[11px] pl-11">
                    <button
                      onClick={() => onAcceptConnect(notif.id)}
                      className="flex-1 py-1 bg-black text-white font-bold rounded-lg border border-black hover:bg-[#222]"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => onDeclineConnect(notif.id)}
                      className="flex-1 py-1 bg-white text-black rounded-lg border border-black hover:bg-[#F7F7F5]"
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
