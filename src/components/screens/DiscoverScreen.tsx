import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, UserCheck, Sparkles, Star, ChevronRight } from 'lucide-react';
import { JobItem, UserProfile, AccountType } from '../../types';

interface DiscoverScreenProps {
  jobs: JobItem[];
  creatives: UserProfile[];
  onSelectJob: (job: JobItem) => void;
  onSelectUser: (user: UserProfile) => void;
  onOpenMessageWithUser: (userName: string) => void;
  accountType: AccountType;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({
  jobs,
  creatives,
  onSelectJob,
  onSelectUser,
  onOpenMessageWithUser,
  accountType,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'creatives' | 'gigs' | 'businesses'>('all');
  const [selectedRole, setSelectedRole] = useState<string>('All Roles');

  const spotlightCreatives = creatives.filter((c) => c.isPro);

  const filteredJobs = jobs.filter((j) => {
    if (searchQuery && !j.title.toLowerCase().includes(searchQuery.toLowerCase()) && !j.roleCategory.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedRole !== 'All Roles' && j.roleCategory !== selectedRole) return false;
    return true;
  });

  const filteredCreatives = creatives.filter((c) => {
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase()) && !c.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedRole !== 'All Roles' && !c.title.toLowerCase().includes(selectedRole.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-24 md:pb-8">
      {/* Search Header Bar */}
      <div className="bg-[#FFFFFF] border border-black rounded-2xl p-4 shadow-sm space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#888888]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Huo for creatives, models, videographers, or gigs..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F7F7F5] border-2 border-black rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#FFB5AF]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 font-mono-code text-xs scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full border border-black shrink-0 font-bold ${
              activeFilter === 'all' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black hover:bg-white'
            }`}
          >
            All Results
          </button>
          <button
            onClick={() => setActiveFilter('creatives')}
            className={`px-3 py-1.5 rounded-full border border-black shrink-0 font-bold ${
              activeFilter === 'creatives' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black hover:bg-white'
            }`}
          >
            Creatives &amp; Models
          </button>
          <button
            onClick={() => setActiveFilter('gigs')}
            className={`px-3 py-1.5 rounded-full border border-black shrink-0 font-bold ${
              activeFilter === 'gigs' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black hover:bg-white'
            }`}
          >
            Marketplace Gigs
          </button>
          <button
            onClick={() => setActiveFilter('businesses')}
            className={`px-3 py-1.5 rounded-full border border-black shrink-0 font-bold ${
              activeFilter === 'businesses' ? 'bg-black text-white' : 'bg-[#F7F7F5] text-black hover:bg-white'
            }`}
          >
            Agencies &amp; Clients
          </button>
        </div>
      </div>

      {/* Spotlight Carousel */}
      <div className="space-y-2">
        <div className="flex items-center justify-between font-mono-code">
          <div className="flex items-center gap-1.5 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-[#FF3C75]" />
            <span className="uppercase tracking-wider text-black">Spotlight Producers &amp; DPs</span>
          </div>
          <span className="text-[10px] text-[#666]">Columbus Verified</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {spotlightCreatives.map((creative) => (
            <div
              key={creative.id}
              onClick={() => onSelectUser(creative)}
              className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-3 min-w-[200px] max-w-[220px] shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0 space-y-2"
            >
              <div className="relative h-24 rounded-xl overflow-hidden bg-black">
                <img
                  src={creative.coverImage || creative.portfolioImages[0]}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
                <img
                  src={creative.avatar}
                  alt={creative.name}
                  className="absolute bottom-2 left-2 w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              </div>

              <div>
                <h4 className="font-bold text-xs text-black truncate">{creative.name}</h4>
                <p className="font-mono-code text-[10px] text-[#666] truncate">{creative.title}</p>
              </div>

              <div className="flex items-center justify-between font-mono-code text-[9px] pt-1 border-t border-[#000]">
                <span className="bg-[#FFB5AF] text-black px-1.5 py-0.2 rounded font-bold">PRO</span>
                <span className="text-[#888]">{creative.location.split('·')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Creative Talent Grid */}
      {(activeFilter === 'all' || activeFilter === 'creatives') && (
        <div className="space-y-3">
          <div className="font-mono-code text-xs uppercase font-bold text-black border-b border-black pb-1.5">
            Creative Network Talent ({filteredCreatives.length})
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredCreatives.map((creative) => (
              <div
                key={creative.id}
                className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-start gap-3">
                  <img
                    onClick={() => onSelectUser(creative)}
                    src={creative.avatar}
                    alt={creative.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-black cursor-pointer shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div 
                      onClick={() => onSelectUser(creative)}
                      className="font-bold text-sm text-black hover:underline cursor-pointer truncate"
                    >
                      {creative.name}
                    </div>
                    <div className="font-mono-code text-[10px] text-[#666] truncate">{creative.title}</div>
                    <div className="font-mono-code text-[9px] text-[#888]">{creative.location}</div>
                  </div>
                </div>

                <p className="text-xs text-[#333] font-sans line-clamp-2">{creative.bio}</p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1 font-mono-code text-[9px]">
                  {creative.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="bg-[#F7F7F5] border border-black px-2 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex gap-2 pt-1 font-mono-code text-xs">
                  <button
                    onClick={() => onSelectUser(creative)}
                    className="flex-1 py-1.5 bg-[#F7F7F5] text-black font-bold rounded-xl border border-black hover:bg-white text-center"
                  >
                    View Portfolio
                  </button>
                  <button
                    onClick={() => onOpenMessageWithUser(creative.name)}
                    className="flex-1 py-1.5 bg-black text-white font-bold rounded-xl border border-black hover:bg-[#222] text-center"
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: Open Gigs */}
      {(activeFilter === 'all' || activeFilter === 'gigs') && (
        <div className="space-y-3">
          <div className="font-mono-code text-xs uppercase font-bold text-black border-b border-black pb-1.5">
            Active Marketplace Gigs ({filteredJobs.length})
          </div>

          <div className="space-y-3">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => onSelectJob(job)}
                className="bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={job.employer.avatar}
                      alt={job.employer.name}
                      className="w-8 h-8 rounded-full object-cover border border-black"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-black leading-tight">{job.title}</h4>
                      <p className="font-mono-code text-[10px] text-[#666]">
                        {job.employer.name} · {job.postedAgo}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono-code text-xs font-bold bg-[#FFB5AF] text-black px-2.5 py-1 rounded-lg border border-black shrink-0">
                    {job.budget}
                  </span>
                </div>

                <p className="text-xs text-[#444] font-sans line-clamp-2">{job.description}</p>

                <div className="flex items-center justify-between font-mono-code text-[10px] text-[#666] pt-1">
                  <span>📍 {job.location}</span>
                  <span>📅 {job.dates}</span>
                  <span className="text-black font-bold underline">Apply →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
