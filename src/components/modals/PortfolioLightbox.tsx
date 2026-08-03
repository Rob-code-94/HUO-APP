import React from 'react';
import { X, Heart, MessageCircle, Bookmark, Share2, Camera, UserCheck } from 'lucide-react';
import { PostItem } from '../../types';

interface PortfolioLightboxProps {
  post: PostItem | null;
  onClose: () => void;
  onOpenMessageWithUser: (userName: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  post,
  onClose,
  onOpenMessageWithUser,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/80 text-white hover:bg-black transition-colors border border-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Media Stage */}
        <div className="md:col-span-7 bg-[#121212] flex items-center justify-center p-2 min-h-[300px] md:min-h-[500px]">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
            />
          ) : (
            <div className="p-8 text-center text-white font-mono-code text-xs">
              <p className="text-lg font-bold font-sans mb-2">{post.caption}</p>
              <span className="text-[#888]">{post.category}</span>
            </div>
          )}
        </div>

        {/* Right Info & Conversation Sidebar */}
        <div className="md:col-span-5 p-5 flex flex-col justify-between space-y-4 bg-white overflow-y-auto">
          {/* Author Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#000000] pb-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-black"
              />
              <div>
                <h4 className="font-bold text-sm text-black">{post.author.name}</h4>
                <p className="font-mono-code text-[11px] text-[#666666]">{post.author.role}</p>
                <p className="font-mono-code text-[10px] text-[#888]">{post.author.location}</p>
              </div>
            </div>

            {/* Caption & Category */}
            <div className="space-y-2">
              <span className="inline-block font-mono-code text-[9px] uppercase tracking-wider bg-[#FFB5AF] text-black px-2 py-0.5 rounded border border-black font-bold">
                {post.category}
              </span>
              <p className="text-xs text-black leading-relaxed font-sans">{post.caption}</p>
            </div>

            {/* Camera Gear Info */}
            {post.cameraGear && (
              <div className="flex items-center gap-2 font-mono-code text-[10px] bg-[#F7F7F5] p-2 rounded-lg border border-black text-[#444]">
                <Camera className="w-3.5 h-3.5 text-[#FF3C75] shrink-0" />
                <span>Gear: {post.cameraGear}</span>
              </div>
            )}

            {/* Collaborators List */}
            {post.collaborators && post.collaborators.length > 0 && (
              <div className="space-y-1.5 font-mono-code text-[10px] bg-[#F7F7F5] p-2.5 rounded-lg border border-black">
                <span className="text-[#888] uppercase block font-bold">Collaborators On Set</span>
                <div className="space-y-1">
                  {post.collaborators.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-black">
                      <span className="font-bold">{c.name} ({c.handle})</span>
                      <span className="text-[#666]">{c.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct CTA */}
          <div className="space-y-3 pt-3 border-t border-[#000000]">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 font-bold text-black hover:text-[#FF3C75]">
                  <Heart className="w-4 h-4 fill-[#FF3C75] text-[#FF3C75]" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-[#666]">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.commentsCount}</span>
                </button>
              </div>
              <button className="p-1 hover:text-[#FF3C75]">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenMessageWithUser(post.author.name);
              }}
              className="w-full py-2.5 bg-black text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-[#FFB5AF]" />
              <span>Connect / Message Creator</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
