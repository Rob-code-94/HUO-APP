export type AccountType = 'creative' | 'business' | 'consumer';

export type ViewMode = 'interactive' | 'wireframes';

export type AppViewMode = 'app' | 'wireframes' | 'tokens' | 'flow' | 'devnotes';

export type MainTab = 'home' | 'search' | 'messages' | 'profile' | 'jobboard';

export type FeedType = 'portfolio' | 'community';

export interface PostItem {
  id: string;
  author: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    location: string;
    accountType: AccountType;
  };
  imageUrl?: string;
  caption: string;
  category: string;
  feedType: FeedType;
  likes: number;
  commentsCount: number;
  timeAgo: string;
  collaborators?: { name: string; handle: string; role: string }[];
  cameraGear?: string;
  isSaved?: boolean;
  isLiked?: boolean;
}

export interface JobItem {
  id: string;
  title: string;
  employer: {
    name: string;
    avatar: string;
    verified: boolean;
    role: string;
  };
  roleCategory: string;
  location: string;
  dates: string;
  budget: string;
  budgetType: 'flat' | 'day_rate' | 'hourly' | 'project';
  description: string;
  requirements: string[];
  postedAgo: string;
  isProOnly?: boolean;
  type: 'creative_job' | 'casting' | 'consumer_hire';
  applicantsCount: number;
  status?: 'applied' | 'invited' | 'open';
}

export interface ModelMeasurements {
  height: string;
  bust: string;
  waist: string;
  hips: string;
  shoe: string;
  eyes: string;
  hair: string;
}

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage?: string;
  accountType: AccountType;
  title: string;
  bio: string;
  location: string;
  education?: string;
  availability: string;
  completedProjects: number;
  responseRate: string;
  skills: string[];
  gear?: string[];
  portfolioImages: string[];
  savedImages?: string[];
  measurements?: ModelMeasurements;
  polaroids?: string[];
  activeHiringJobs?: JobItem[];
  isPro: boolean;
  isConnected?: boolean;
}

export interface DirectMessage {
  id: string;
  participant: {
    id: string;
    name: string;
    avatar: string;
    role: string;
    online: boolean;
  };
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
  category: 'hiring' | 'applying' | 'networking' | 'booking';
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isProposal?: boolean;
  proposalDetails?: {
    title: string;
    amount: string;
    date: string;
  };
}

export interface NotificationItem {
  id: string;
  type: 'connect_request' | 'job_accepted' | 'like' | 'comment';
  actor: {
    name: string;
    avatar: string;
  };
  message: string;
  timeAgo: string;
  unread: boolean;
  targetPostImage?: string;
}
