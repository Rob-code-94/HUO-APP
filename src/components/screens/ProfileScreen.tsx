import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, Lock, Bookmark, CheckCircle2, ShieldCheck, Mail, MessageSquare, Award } from 'lucide-react';
import { UserProfile, AccountType } from '../../types';

interface ProfileScreenProps {
  user: UserProfile;
  accountType: AccountType;
  onOpenProModal: () => void;
  onOpenMessageWithUser: (userName: string) => void;
  isOwnProfile?: boolean;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  user,
  accountType,
  onOpenProModal,
  onOpenMessageWithUser,
  isOwnProfile = true,
}) => {
  const [profileTab, setProfileTab] = useState<'portfolio' | 'saved' | 'hiring'>('portfolio');

  const isModel = user.measurements !== undefined;
  const isConsumer = user.accountType === 'consumer';
  const isBusiness = user.accountType === 'business';

  return (
    <div className="space-y-5 pb-24 md:pb-8">
      {/* Cover Banner & Profile Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-sm">
        {/* Banner */}
        <div className="relative h-32 sm:h-44 bg-black">
          {user.coverImage ? (
            <img src={user.coverImage} alt="cover" className="w-full h-full object-cover opacity-85" />
          ) : (
            <div className="w-full h-full bg-[#121212] wireframe-grid" />
          )}

          {user.isPro && (
            <span className="absolute top-3 right-3 bg-[#FFB5AF] text-black font-mono-code text-[10px] font-bold px-2 py-0.5 rounded-full border border-black shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-black" />
              <span>PRO VERIFIED</span>
            </span>
          )}
        </div>

        {/* Info Header */}
        <div className="p-4 sm:p-6 space-y-4 relative">
          <div className="flex flex-wrap items-end justify-between gap-3 -mt-12 sm:-mt-16">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md bg-white"
              />
            </div>

            {/* Actions for other user's profile */}
            {!isOwnProfile && (
              <div className="flex gap-2 font-mono-code text-xs">
                <button
                  onClick={() => onOpenMessageWithUser(user.name)}
                  className="px-4 py-2 bg-black text-white font-bold rounded-xl border border-black hover:bg-[#222]"
                >
                  Connect &amp; Message
                </button>
              </div>
            )}
          </div>

          {/* Name & Title */}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-impact text-2xl text-black tracking-wide">{user.name}</h2>
              <span className="font-mono-code text-[11px] text-[#666]">{user.handle}</span>
            </div>
            <p className="font-mono-code text-xs font-bold text-[#FF3C75]">{user.title}</p>
            <p className="font-mono-code text-[11px] text-[#888] flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" />
              <span>{user.location}</span>
            </p>
          </div>

          {/* Bio */}
          <p className="text-xs text-[#333] font-sans leading-relaxed">{user.bio}</p>

          {/* Reputation Block (Completed Projects & Response Rate - No follower counts) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono-code text-xs pt-1">
            <div className="bg-[#F7F7F5] border border-black rounded-xl p-2.5 text-center">
              <span className="text-[9px] uppercase text-[#888] block">Completed Work</span>
              <span className="font-bold text-black text-sm">{user.completedProjects} Projects</span>
            </div>

            <div className="bg-[#F7F7F5] border border-black rounded-xl p-2.5 text-center">
              <span className="text-[9px] uppercase text-[#888] block">Response Rate</span>
              <span className="font-bold text-black text-sm">{user.responseRate}</span>
            </div>

            <div className="bg-[#F7F7F5] border border-black rounded-xl p-2.5 text-center col-span-2 sm:col-span-1">
              <span className="text-[9px] uppercase text-[#888] block">Status</span>
              <span className="font-bold text-[#FF3C75] text-xs truncate block">{user.availability}</span>
            </div>
          </div>

          {/* Model Measurements Comp Card (Model Profile specific) */}
          {isModel && user.measurements && (
            <div className="bg-[#F7F7F5] border-2 border-black rounded-xl p-3 font-mono-code space-y-2">
              <div className="flex items-center justify-between border-b border-black pb-1.5">
                <span className="text-xs font-bold uppercase text-black">Comp Card Measurements</span>
                <span className="text-[10px] text-[#888]">Model Specs</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 text-[11px] text-center font-bold text-black">
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Height</span>
                  {user.measurements.height}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Bust</span>
                  {user.measurements.bust}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Waist</span>
                  {user.measurements.waist}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Hips</span>
                  {user.measurements.hips}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Shoe</span>
                  {user.measurements.shoe}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Eyes</span>
                  {user.measurements.eyes}
                </div>
                <div className="bg-white p-1.5 border border-black rounded">
                  <span className="text-[8px] uppercase text-[#888] block font-normal">Hair</span>
                  {user.measurements.hair}
                </div>
              </div>
            </div>
          )}

          {/* Gear List for Creatives */}
          {user.gear && user.gear.length > 0 && (
            <div className="space-y-1.5 font-mono-code text-xs">
              <span className="text-[10px] uppercase text-[#888] font-bold block">Production Equipment</span>
              <div className="flex flex-wrap gap-1.5">
                {user.gear.map((item, idx) => (
                  <span key={idx} className="bg-[#F7F7F5] border border-black px-2.5 py-1 rounded-lg text-[11px]">
                    📹 {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Consumer Profile Upgrade Banner */}
      {isConsumer && (
        <div className="bg-[#FFFFFF] border-2 border-black rounded-2xl p-5 text-center space-y-3 font-mono-code shadow-sm">
          <Lock className="w-8 h-8 text-[#FF3C75] mx-auto" />
          <h3 className="font-bold text-sm text-black">Unlock Full Portfolio &amp; Bio Features</h3>
          <p className="text-xs text-[#555] font-sans max-w-sm mx-auto">
            Upgrade your Consumer profile to Huo Pro to add portfolio media, custom tags, and post open gig opportunities.
          </p>
          <button
            onClick={onOpenProModal}
            className="py-2.5 px-6 bg-[#FFB5AF] text-black font-bold rounded-xl border border-black hover:brightness-95"
          >
            Upgrade to Pro ($19/mo)
          </button>
        </div>
      )}

      {/* Portfolio Grid Tabs */}
      <div className="bg-[#FFFFFF] border border-black rounded-2xl p-3 shadow-sm space-y-3">
        <div className="flex border-2 border-black rounded-xl p-0.5 bg-[#F7F7F5] font-mono-code text-xs">
          <button
            onClick={() => setProfileTab('portfolio')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              profileTab === 'portfolio' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Portfolio Media ({user.portfolioImages.length})
          </button>

          <button
            onClick={() => setProfileTab('saved')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              profileTab === 'saved' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Saved Bookmarks ({user.savedImages ? user.savedImages.length : 0})
          </button>

          {isBusiness && (
            <button
              onClick={() => setProfileTab('hiring')}
              className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
                profileTab === 'hiring' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
              }`}
            >
              Active Hiring ({user.activeHiringJobs ? user.activeHiringJobs.length : 0})
            </button>
          )}
        </div>

        {/* Grid Images */}
        {profileTab === 'portfolio' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {user.portfolioImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-black bg-black group">
                <img src={img} alt="work" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        )}

        {profileTab === 'saved' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {user.savedImages && user.savedImages.length > 0 ? (
              user.savedImages.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-black bg-black">
                  <img src={img} alt="saved" className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <div className="col-span-3 py-10 text-center font-mono-code text-xs text-[#888]">
                No saved posts yet. Bookmarks from feed appear here.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
