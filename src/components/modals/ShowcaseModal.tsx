import React, { useState } from 'react';
import { X, ImagePlus, Sparkles, Tag } from 'lucide-react';
import { PostItem, FeedType } from '../../types';

interface ShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: PostItem) => void;
}

export const ShowcaseModal: React.FC<ShowcaseModalProps> = ({
  isOpen,
  onClose,
  onAddPost,
}) => {
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('Film / Video');
  const [feedType, setFeedType] = useState<FeedType>('portfolio');
  const [selectedImg, setSelectedImg] = useState(
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
  );
  const [gear, setGear] = useState('RED Komodo 6K');

  if (!isOpen) return null;

  const sampleImages = [
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: PostItem = {
      id: `post-${Date.now()}`,
      author: {
        id: 'usr-alex',
        name: 'Alex Rivera',
        role: 'Director of Photography',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        location: 'Columbus, OH',
        accountType: 'creative',
      },
      imageUrl: feedType === 'portfolio' ? selectedImg : undefined,
      caption: caption || 'New work posted on Columbus Creative Network.',
      category,
      feedType,
      likes: 1,
      commentsCount: 0,
      timeAgo: 'Just now',
      cameraGear: gear,
      isLiked: false,
      isSaved: false,
    };

    onAddPost(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#000000] pb-3">
          <div>
            <span className="font-mono-code text-[10px] uppercase text-[#888888]">
              Showcase Work
            </span>
            <h3 className="font-impact text-xl tracking-wide">Share Creative Work or BTS</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          {/* Target Feed Switcher */}
          <div>
            <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
              Select Target Feed
            </label>
            <div className="grid grid-cols-2 gap-2 font-mono-code text-[11px]">
              <button
                type="button"
                onClick={() => setFeedType('portfolio')}
                className={`py-2 px-3 border border-black rounded-lg text-center font-bold transition-all ${
                  feedType === 'portfolio' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black'
                }`}
              >
                Portfolio Feed (Media)
              </button>
              <button
                type="button"
                onClick={() => setFeedType('community')}
                className={`py-2 px-3 border border-black rounded-lg text-center font-bold transition-all ${
                  feedType === 'community' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black'
                }`}
              >
                Community Feed (Text/BTS)
              </button>
            </div>
          </div>

          {/* Image Picker for Portfolio Feed */}
          {feedType === 'portfolio' && (
            <div>
              <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
                Select High-Res Image Preset or Upload
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {sampleImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImg(img)}
                    className={`relative rounded-lg overflow-hidden border-2 h-16 transition-all ${
                      selectedImg === img ? 'border-[#FF3C75] ring-2 ring-[#FF3C75]' : 'border-black opacity-70'
                    }`}
                  >
                    <img src={img} alt="preset" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Caption */}
          <div>
            <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
              Caption / Story
            </label>
            <textarea
              rows={3}
              required
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Tell the story behind the shoot, lighting setup, or tag collaborators..."
              className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
            />
          </div>

          {/* Category Tag & Camera Gear */}
          <div className="grid grid-cols-2 gap-3 font-mono-code">
            <div>
              <label className="text-[10px] uppercase text-[#666666] block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              >
                <option value="Film / Video">Film / Video</option>
                <option value="Photography">Photography</option>
                <option value="Styling">Styling</option>
                <option value="Behind The Scenes">Behind The Scenes</option>
                <option value="Events & Mixers">Events &amp; Mixers</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase text-[#666666] block mb-1">Camera Gear (Optional)</label>
              <input
                type="text"
                value={gear}
                onChange={(e) => setGear(e.target.value)}
                placeholder="e.g. RED Komodo 6K"
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              />
            </div>
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
              className="flex-1 py-2.5 bg-[#000000] text-white rounded-xl font-mono-code text-xs font-bold border border-black hover:bg-[#222]"
            >
              Share Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
