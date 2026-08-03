import React, { useState } from 'react';
import { Briefcase, Filter, Sparkles, Lock, MapPin, Calendar, DollarSign, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { JobItem, AccountType } from '../../types';

interface JobBoardScreenProps {
  jobs: JobItem[];
  onSelectJob: (job: JobItem) => void;
  onOpenProModal: () => void;
  accountType: AccountType;
  appFreeApplicationsLeft: number;
}

export const JobBoardScreen: React.FC<JobBoardScreenProps> = ({
  jobs,
  onSelectJob,
  onOpenProModal,
  accountType,
  appFreeApplicationsLeft,
}) => {
  const [activeTab, setActiveTab] = useState<'board' | 'applications' | 'invitations'>('board');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(jobs[0] || null);

  const filteredJobs = jobs.filter((job) => {
    if (roleFilter !== 'All Roles' && job.roleCategory !== roleFilter) return false;
    if (locationFilter !== 'All Locations' && !job.location.includes(locationFilter)) return false;
    return true;
  });

  return (
    <div className="space-y-5 pb-24 md:pb-8">
      {/* Top Banner Matching Image Reference (Pro Lock) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#2B1B26] border-2 border-black rounded-2xl p-5 sm:p-6 text-white shadow-md">
        <div className="max-w-xl space-y-2 relative z-10">
          <span className="font-mono-code text-[10px] uppercase text-[#FFB5AF] tracking-widest block font-bold">
            Columbus Creative Network Marketplace
          </span>
          <h2 className="font-impact text-2xl sm:text-3xl tracking-wide leading-none">
            Apply to unlimited jobs and stand out with less competition.
          </h2>
          <div className="flex items-center gap-4 pt-2 font-mono-code text-xs">
            <span className="text-[#FFB5AF] font-bold text-sm">20K+ hires in Midwest</span>
            <button
              onClick={onOpenProModal}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FFB5AF] text-black font-bold rounded-xl border border-black hover:brightness-95 transition-all text-xs"
            >
              <span>Unlock Pro</span>
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Tabs Header: Job Board | Applications | Invitations */}
      <div className="bg-[#FFFFFF] border border-black rounded-2xl p-3 space-y-3 shadow-sm">
        <div className="flex border-2 border-black rounded-xl p-0.5 bg-[#F7F7F5] font-mono-code text-xs">
          <button
            onClick={() => setActiveTab('board')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              activeTab === 'board' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Job Board ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              activeTab === 'applications' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Applications (1)
          </button>
          <button
            onClick={() => setActiveTab('invitations')}
            className={`flex-1 py-2 text-center font-bold rounded-lg transition-all ${
              activeTab === 'invitations' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-[#E9E9E6]'
            }`}
          >
            Invitations (0)
          </button>
        </div>

        {/* Filter Toolbar: Role, Location, Project, Pay */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-code text-xs">
          <div>
            <label className="text-[9px] uppercase text-[#666] block mb-0.5">Role</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
            >
              <option value="All Roles">All Roles</option>
              <option value="Videographer">Videographer</option>
              <option value="Editor">Editor</option>
              <option value="Model / Talent">Model / Talent</option>
              <option value="Director of Photography">DP</option>
            </select>
          </div>

          <div>
            <label className="text-[9px] uppercase text-[#666] block mb-0.5">Location</label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs"
            >
              <option value="All Locations">All Midwest</option>
              <option value="Columbus">Columbus</option>
              <option value="Cleveland">Cleveland</option>
              <option value="Cincinnati">Cincinnati</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="text-[9px] uppercase text-[#666] block mb-0.5">Project Type</label>
            <select className="w-full p-2 bg-[#F7F7F5] border border-black rounded-lg text-xs">
              <option>All Types</option>
              <option>Commercial</option>
              <option>Live Event</option>
              <option>Fashion</option>
            </select>
          </div>

          <div>
            <label className="text-[9px] uppercase text-[#666] block mb-0.5">Free Allowance</label>
            <div className="p-2 bg-[#FFB5AF]/30 border border-black rounded-lg text-xs font-bold text-center">
              {appFreeApplicationsLeft} / 3 Free Left
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout (Master - Detail on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Job List */}
        <div className="lg:col-span-7 space-y-3">
          {filteredJobs.map((job) => {
            const isSelected = selectedJob?.id === job.id;
            return (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`bg-[#FFFFFF] border-2 rounded-2xl p-4 transition-all cursor-pointer space-y-3 ${
                  isSelected ? 'border-[#FF3C75] ring-2 ring-[#FF3C75]/20 shadow-md' : 'border-black shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={job.employer.avatar}
                      alt={job.employer.name}
                      className="w-9 h-9 rounded-full object-cover border border-black shrink-0"
                    />
                    <div>
                      <span className="font-mono-code text-[10px] text-[#666] block">
                        {job.employer.name} {job.isProOnly && <Lock className="inline w-3 h-3 text-[#FF3C75]" />}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-black leading-tight">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono-code text-xs font-bold bg-[#F7F7F5] border border-black px-2.5 py-1 rounded-lg shrink-0">
                    {job.budget}
                  </span>
                </div>

                <p className="text-xs text-[#444] font-sans line-clamp-2 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex items-center justify-between font-mono-code text-[10px] text-[#666] pt-1 border-t border-[#000000]/10">
                  <div className="flex gap-3">
                    <span>📍 {job.location}</span>
                    <span>📅 {job.dates}</span>
                  </div>
                  <span className="text-[#888]">{job.postedAgo}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail Pane on Desktop (or Drawer Modal on Mobile) */}
        {selectedJob && (
          <div className="lg:col-span-5 bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-5 shadow-sm space-y-5 sticky top-20 self-start">
            <div className="border-b border-[#000000] pb-3 space-y-2">
              <span className="font-mono-code text-[10px] uppercase text-[#FF3C75] font-bold bg-[#FFF0F4] px-2 py-0.5 rounded border border-[#FF3C75]">
                {selectedJob.roleCategory}
              </span>
              <h3 className="font-impact text-xl text-black leading-tight">{selectedJob.title}</h3>
              
              <div className="flex items-center gap-2 pt-1">
                <img
                  src={selectedJob.employer.avatar}
                  alt="emp"
                  className="w-7 h-7 rounded-full object-cover border border-black"
                />
                <span className="font-mono-code text-xs font-bold">{selectedJob.employer.name}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 font-mono-code text-xs bg-[#F7F7F5] p-3 rounded-xl border border-black">
              <div>
                <span className="text-[9px] uppercase text-[#888] block">Compensation</span>
                <span className="font-bold text-black">{selectedJob.budget}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase text-[#888] block">Location</span>
                <span className="font-bold text-black">{selectedJob.location}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase text-[#888] block">Dates</span>
                <span className="font-bold text-black">{selectedJob.dates}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase text-[#888] block">Applicants</span>
                <span className="font-bold text-black">{selectedJob.applicantsCount} applied</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 font-sans text-xs">
              <h4 className="font-mono-code text-xs font-bold uppercase text-black">Project Brief</h4>
              <p className="text-[#333] leading-relaxed">{selectedJob.description}</p>
            </div>

            {/* Requirements */}
            <div className="space-y-1.5 font-mono-code text-xs">
              <h4 className="font-bold text-black text-xs uppercase">Requirements</h4>
              <ul className="space-y-1">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-[#555] text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Action Button or Pro Lock State */}
            <div className="pt-2 space-y-2 border-t border-[#000000]">
              {appFreeApplicationsLeft > 0 ? (
                <div>
                  <button
                    onClick={() => onSelectJob(selectedJob)}
                    className="w-full py-3 bg-[#000000] text-white font-mono-code text-xs font-bold rounded-xl border border-black hover:bg-[#222] transition-colors"
                  >
                    Apply Now ({appFreeApplicationsLeft} free applications left)
                  </button>
                </div>
              ) : (
                <div className="bg-[#FFF0F4] border-2 border-[#FF3C75] rounded-xl p-3 text-center space-y-2 font-mono-code">
                  <Lock className="w-5 h-5 text-[#FF3C75] mx-auto" />
                  <div className="text-xs font-bold text-black">Free Applications Used</div>
                  <p className="text-[10px] text-[#555] font-sans">
                    You have reached your 3 lifetime free application limit.
                  </p>
                  <button
                    onClick={onOpenProModal}
                    className="w-full py-2 bg-[#FFB5AF] text-black font-mono-code text-xs font-bold rounded-lg border border-black hover:brightness-95"
                  >
                    Upgrade to Huo Pro ($19/mo)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
