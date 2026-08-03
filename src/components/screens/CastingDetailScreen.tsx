import React, { useState } from 'react';
import { X, Check, Camera, Sparkles, User, AlertCircle } from 'lucide-react';
import { JobItem, UserProfile } from '../../types';

interface CastingDetailScreenProps {
  castingJob: JobItem;
  onClose: () => void;
  currentUser: UserProfile;
}

export const CastingDetailScreen: React.FC<CastingDetailScreenProps> = ({
  castingJob,
  onClose,
  currentUser,
}) => {
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>(
    currentUser.portfolioImages.slice(0, 2)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#000000] pb-3">
          <div>
            <span className="font-mono-code text-[10px] uppercase text-[#FF3C75] bg-[#FFF0F4] px-2 py-0.5 rounded border border-[#FF3C75] font-bold">
              Casting &amp; Modeling Flow
            </span>
            <h3 className="font-impact text-xl text-black mt-1 leading-tight">{castingJob.title}</h3>
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
            <Sparkles className="w-12 h-12 text-[#FF3C75] mx-auto" />
            <h4 className="font-bold text-sm text-black">Comp Card &amp; Portfolio Submitted!</h4>
            <p className="text-xs text-[#555] font-sans">
              The casting team at {castingJob.employer.name} will review your headshots and comp specs.
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 bg-black text-white rounded-xl font-mono-code text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            {/* Specs Overview */}
            <div className="bg-[#F7F7F5] border border-black rounded-xl p-3 font-mono-code space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#666]">Compensation:</span>
                <span className="font-bold text-black">{castingJob.budget}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#666]">Location:</span>
                <span className="font-bold text-black">{castingJob.location}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#666]">Dates:</span>
                <span className="font-bold text-black">{castingJob.dates}</span>
              </div>
            </div>

            {/* Comp Card Attachment Selector */}
            <div className="space-y-2">
              <label className="font-mono-code text-[10px] uppercase text-[#666] block">
                Select Headshots &amp; Polaroids from Profile
              </label>
              <div className="grid grid-cols-3 gap-2">
                {currentUser.portfolioImages.map((img, idx) => {
                  const isSelected = selectedPhotos.includes(img);
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedPhotos(selectedPhotos.filter((p) => p !== img));
                        } else {
                          setSelectedPhotos([...selectedPhotos, img]);
                        }
                      }}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                        isSelected ? 'border-[#FF3C75] ring-2 ring-[#FF3C75]' : 'border-black opacity-60'
                      }`}
                    >
                      <img src={img} alt="headshot" className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-[#FF3C75] text-white p-0.5 rounded-full">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Model Specs Display */}
            {currentUser.measurements && (
              <div className="font-mono-code text-[10px] bg-[#F7F7F5] border border-black p-3 rounded-xl space-y-1">
                <span className="text-[#888] uppercase block font-bold mb-1">Attached Comp Measurements</span>
                <div className="grid grid-cols-3 gap-1 text-black font-semibold">
                  <span>Ht: {currentUser.measurements.height}</span>
                  <span>Bust: {currentUser.measurements.bust}</span>
                  <span>Waist: {currentUser.measurements.waist}</span>
                  <span>Hips: {currentUser.measurements.hips}</span>
                  <span>Shoe: {currentUser.measurements.shoe}</span>
                  <span>Eyes: {currentUser.measurements.eyes}</span>
                </div>
              </div>
            )}

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
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
