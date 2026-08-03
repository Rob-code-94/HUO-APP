import React, { useState } from 'react';
import { X, Plus, Calendar, MapPin, DollarSign, Tag } from 'lucide-react';
import { JobItem } from '../../types';

interface PostGigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddJob: (job: JobItem) => void;
}

export const PostGigModal: React.FC<PostGigModalProps> = ({
  isOpen,
  onClose,
  onAddJob,
}) => {
  const [title, setTitle] = useState('');
  const [roleCategory, setRoleCategory] = useState('Videographer');
  const [location, setLocation] = useState('Columbus, OH');
  const [dates, setDates] = useState('Aug 20, 2026');
  const [budget, setBudget] = useState('$1,200');
  const [type, setType] = useState<'creative_job' | 'casting' | 'consumer_hire'>('creative_job');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newJob: JobItem = {
      id: `job-${Date.now()}`,
      title,
      employer: {
        name: 'Vanguard Creative Co.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        verified: true,
        role: 'Client / Employer',
      },
      roleCategory,
      location,
      dates,
      budget,
      budgetType: 'day_rate',
      description: description || 'Seeking qualified Midwest creative talent for upcoming shoot.',
      requirements: ['Portfolio required', 'On-set experience', 'Equipment list in profile'],
      postedAgo: 'Just now',
      type,
      applicantsCount: 0,
      status: 'open',
    };

    onAddJob(newJob);
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
              Marketplace Flow
            </span>
            <h3 className="font-impact text-xl tracking-wide">Who are you looking for?</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-black hover:bg-[#F7F7F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
          {/* Category Chips Selector */}
          <div>
            <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1.5">
              Gig Type
            </label>
            <div className="grid grid-cols-3 gap-2 font-mono-code text-[11px]">
              <button
                type="button"
                onClick={() => setType('creative_job')}
                className={`py-2 px-3 border border-black rounded-lg text-center font-bold ${
                  type === 'creative_job' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black'
                }`}
              >
                Creative Crew
              </button>
              <button
                type="button"
                onClick={() => setType('casting')}
                className={`py-2 px-3 border border-black rounded-lg text-center font-bold ${
                  type === 'casting' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black'
                }`}
              >
                Model Casting
              </button>
              <button
                type="button"
                onClick={() => setType('consumer_hire')}
                className={`py-2 px-3 border border-black rounded-lg text-center font-bold ${
                  type === 'consumer_hire' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black'
                }`}
              >
                Consumer Project
              </button>
            </div>
          </div>

          {/* Position Input */}
          <div>
            <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
              Position / Role Needed
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Videographer needed for Live Performance"
                className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
              />
            </div>
          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono-code">
            <div className="flex-1 min-w-[130px]">
              <label className="text-[10px] uppercase text-[#666666] block mb-1">
                Category
              </label>
              <select
                value={roleCategory}
                onChange={(e) => setRoleCategory(e.target.value)}
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              >
                <option value="Videographer">Videographer</option>
                <option value="Photographer">Photographer</option>
                <option value="Director of Photography">Director of Photography</option>
                <option value="Editor">Editor / Post</option>
                <option value="Model / Talent">Model / Talent</option>
                <option value="Stylist">Stylist / Wardrobe</option>
                <option value="Gaffer">Gaffer / Grip</option>
              </select>
            </div>

            <div className="flex-1 min-w-[130px]">
              <label className="text-[10px] uppercase text-[#666666] block mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Columbus, OH"
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono-code">
            <div>
              <label className="text-[10px] uppercase text-[#666666] block mb-1">
                Dates / Schedule
              </label>
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="Aug 20, 2026"
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-[#666666] block mb-1">
                Budget / Rate ($)
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="$1,200 / day"
                className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
              />
            </div>
          </div>

          <div>
            <label className="font-mono-code text-[10px] uppercase text-[#666666] block mb-1">
              Project Description &amp; Deliverables
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe scope, camera requirements, venue details, or wardrobe specs..."
              className="w-full p-2.5 bg-[#F7F7F5] border border-black rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
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
              className="flex-1 py-2.5 bg-[#000000] text-white rounded-xl font-mono-code text-xs font-bold border border-black hover:bg-[#222]"
            >
              Post Opportunity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
