import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share2, MapPin, Sparkles, Filter, Camera, UserPlus } from 'lucide-react';
import { PostItem, FeedType, AccountType } from '../../types';

interface HomeScreenProps {
  posts: PostItem[];
  onSelectPost: (post: PostItem) => void;
  onLikePost: (postId: string) => void;
  onSavePost: (postId: string) => void;
  accountType: AccountType;
  onOpenShowcase: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  posts,
  onSelectPost,
  onLikePost,
  onSavePost,
  accountType,
  onOpenShowcase,
}) => {
  const [activeFeedTab, setActiveFeedTab] = useState<FeedType>('portfolio');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = posts.filter((post) => {
    if (post.feedType !== activeFeedTab) return false;
    if (selectedCity !== 'All' && !post.author.location.includes(selectedCity)) return false;
    if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-4 pb-24 md:pb-8">
      {/* Feed Toggle Header */}
      <div className="bg-[#FFFFFF] border border-black rounded-2xl p-3 shadow-sm space-y-3">
        {/* Feed Tab Toggle (Portfolio vs Community) */}
        <div className="flex border-2 border-black rounded-xl p-0.5 bg-[#F7F7F5] font-mono-code text-xs">
          <button
            onClick={() => setActiveFeedTab('portfolio')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              activeFeedTab === 'portfolio'
                ? 'bg-black text-white shadow-sm'
                : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Portfolio Feed (Work &amp; BTS)
          </button>
          <button
            onClick={() => setActiveFeedTab('community')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              activeFeedTab === 'community'
                ? 'bg-black text-white shadow-sm'
                : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Community Feed (Mixers &amp; Questions)
          </button>
        </div>

        {/* Filters: Cities + Categories */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono-code text-[11px]">
          {/* City Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[#888] uppercase text-[10px] shrink-0">City:</span>
            {['All', 'Columbus', 'Cleveland', 'Cincinnati'].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-2.5 py-1 rounded-full border border-black shrink-0 transition-all ${
                  selectedCity === city
                    ? 'bg-[#FFB5AF] text-black font-bold'
                    : 'bg-[#F7F7F5] text-[#555] hover:bg-white'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Share Work Action trigger */}
          <button
            onClick={onOpenShowcase}
            className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full font-bold hover:bg-[#222] transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#FFB5AF]" />
            <span>Post to Feed</span>
          </button>
        </div>
      </div>

      {/* Posts Feed Grid */}
      {activeFeedTab === 'portfolio' ? (
        /* 2-Column Masonry Style Grid for Portfolio */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Image & Header */}
              <div>
                {/* Author Header */}
                <div className="p-3 border-b border-[#000000] flex items-center justify-between bg-[#F7F7F5]">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-black shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-black truncate">{post.author.name}</div>
                      <div className="font-mono-code text-[9px] text-[#666] truncate">
                        {post.author.role} · {post.author.location.split('·')[0]}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono-code text-[9px] text-[#888]">{post.timeAgo}</span>
                </div>

                {/* Media Image */}
                {post.imageUrl && (
                  <div
                    onClick={() => onSelectPost(post)}
                    className="relative cursor-pointer overflow-hidden bg-black aspect-[4/3]"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 left-2 font-mono-code text-[9px] bg-black/80 text-white px-2 py-0.5 rounded border border-white/30 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                )}

                {/* Caption */}
                <div className="p-3 space-y-2">
                  <p className="text-xs text-black font-sans line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  {post.cameraGear && (
                    <div className="flex items-center gap-1 font-mono-code text-[10px] text-[#666]">
                      <Camera className="w-3 h-3 text-[#FF3C75]" />
                      <span className="truncate">{post.cameraGear}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 border-t border-[#000000] bg-[#F7F7F5] flex items-center justify-between text-xs font-mono-code">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onLikePost(post.id)}
                    className={`flex items-center gap-1 font-bold ${
                      post.isLiked ? 'text-[#FF3C75]' : 'text-black hover:text-[#FF3C75]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-[#FF3C75]' : ''}`} />
                    <span>{post.likes}</span>
                  </button>

                  <button
                    onClick={() => onSelectPost(post)}
                    className="flex items-center gap-1 text-[#666] hover:text-black"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.commentsCount}</span>
                  </button>
                </div>

                <button
                  onClick={() => onSavePost(post.id)}
                  className={`p-1 rounded ${
                    post.isSaved ? 'text-[#FF3C75]' : 'text-black hover:text-[#FF3C75]'
                  }`}
                  title="Bookmark to Saved tab"
                >
                  <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-[#FF3C75]' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Single Stream for Community Feed */
        <div className="space-y-3 max-w-2xl mx-auto">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between border-b border-[#000000] pb-2.5">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-black"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-black">{post.author.name}</h4>
                    <p className="font-mono-code text-[10px] text-[#666]">
                      {post.author.role} · {post.author.location}
                    </p>
                  </div>
                </div>
                <span className="font-mono-code text-[9px] bg-[#FFB5AF] text-black px-2 py-0.5 rounded border border-black font-bold">
                  {post.category}
                </span>
              </div>

              <p className="text-xs text-black font-sans leading-relaxed">{post.caption}</p>

              {post.imageUrl && (
                <img
                  onClick={() => onSelectPost(post)}
                  src={post.imageUrl}
                  alt="post"
                  className="w-full h-48 object-cover rounded-xl border border-black cursor-pointer"
                />
              )}

              <div className="flex items-center justify-between pt-2 border-t border-[#000000] font-mono-code text-xs">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onLikePost(post.id)}
                    className="flex items-center gap-1 font-bold text-black"
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-[#FF3C75] text-[#FF3C75]' : ''}`} />
                    <span>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => onSelectPost(post)}
                    className="flex items-center gap-1 text-[#666]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.commentsCount} replies</span>
                  </button>
                </div>

                <button
                  onClick={() => onSavePost(post.id)}
                  className="text-black hover:text-[#FF3C75]"
                >
                  <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-[#FF3C75] text-[#FF3C75]' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
