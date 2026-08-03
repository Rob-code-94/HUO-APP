import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DesktopNav } from './components/DesktopNav';

// Screens
import { HomeScreen } from './components/screens/HomeScreen';
import { DiscoverScreen } from './components/screens/DiscoverScreen';
import { JobBoardScreen } from './components/screens/JobBoardScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { CastingDetailScreen } from './components/screens/CastingDetailScreen';
import { SplashWelcomeModal } from './components/screens/SplashWelcomeModal';

// Views
import { WireframeKitView } from './components/views/WireframeKitView';
import { DesignTokensView } from './components/views/DesignTokensView';
import { FlowMapView } from './components/views/FlowMapView';
import { DevNotesView } from './components/views/DevNotesView';

// Modals
import { ActionSheetModal } from './components/modals/ActionSheetModal';
import { PostGigModal } from './components/modals/PostGigModal';
import { ShowcaseModal } from './components/modals/ShowcaseModal';
import { ProModal } from './components/modals/ProModal';
import { NotificationsDrawer } from './components/modals/NotificationsDrawer';
import { SettingsDrawer } from './components/modals/SettingsDrawer';
import { PortfolioLightbox } from './components/modals/PortfolioLightbox';
import { BookRequestModal } from './components/modals/BookRequestModal';

// Types & Data
import {
  AppViewMode,
  AccountType,
  MainTab,
  PostItem,
  JobItem,
  UserProfile,
  DirectMessage,
  ChatMessage,
  NotificationItem,
} from './types';

import {
  INITIAL_POSTS,
  INITIAL_JOBS,
  INITIAL_CREATIVES,
  INITIAL_DIRECT_MESSAGES,
  INITIAL_CHAT_MESSAGES,
  INITIAL_NOTIFICATIONS,
  CURRENT_USER,
} from './data/mockData';

export function App() {
  // Global Mode & Persona States
  const [viewMode, setViewMode] = useState<AppViewMode>('app');
  const [accountType, setAccountType] = useState<AccountType>('creative');
  const [activeTab, setActiveTab] = useState<MainTab>('home');

  // Application Dynamic State Collections
  const [posts, setPosts] = useState<PostItem[]>(INITIAL_POSTS);
  const [jobs, setJobs] = useState<JobItem[]>(INITIAL_JOBS);
  const [creatives, setCreatives] = useState<UserProfile[]>(INITIAL_CREATIVES);
  const [directMessages, setDirectMessages] = useState<DirectMessage[]>(INITIAL_DIRECT_MESSAGES);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [freeApplicationsLeft, setFreeApplicationsLeft] = useState<number>(2);

  // Modal / Sheet States
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const [isPostGigOpen, setIsPostGigOpen] = useState(false);
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSplashOpen, setIsSplashOpen] = useState(false);

  // Focused Item States for Lightboxes / Drawers
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [selectedCastingJob, setSelectedCastingJob] = useState<JobItem | null>(null);
  const [selectedUserProfile, setSelectedUserProfile] = useState<UserProfile | null>(null);
  const [bookingRecipient, setBookingRecipient] = useState<string | null>(null);

  // Unread notification badge count
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Handlers
  const handleAddPost = (newPost: PostItem) => {
    setPosts([newPost, ...posts]);
  };

  const handleAddJob = (newJob: JobItem) => {
    setJobs([newJob, ...jobs]);
  };

  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((p) => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likes: isLiked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );
  };

  const handleSavePost = (postId: string) => {
    setPosts(
      posts.map((p) => {
        if (p.id === postId) {
          return { ...p, isSaved: !p.isSaved };
        }
        return p;
      })
    );
  };

  const handleSendMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: CURRENT_USER.id,
      text,
      timestamp: 'Just now',
    };
    setChatMessages([...chatMessages, newMsg]);
  };

  const handleAcceptConnect = (notifId: string) => {
    setNotifications(
      notifications.map((n) => (n.id === notifId ? { ...n, unread: false } : n))
    );
    alert('Connection accepted! You can now message in DMs.');
  };

  const handleDeclineConnect = (notifId: string) => {
    setNotifications(notifications.filter((n) => n.id !== notifId));
  };

  const handleJobSelect = (job: JobItem) => {
    if (job.type === 'casting') {
      setSelectedCastingJob(job);
    } else {
      if (freeApplicationsLeft > 0) {
        setFreeApplicationsLeft(freeApplicationsLeft - 1);
        alert(`Application submitted to ${job.employer.name}! You have ${freeApplicationsLeft - 1} free applications left.`);
      } else {
        setIsProModalOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#000000] font-sans antialiased selection:bg-[#FFB5AF]">
      {/* Global Application Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        accountType={accountType}
        setAccountType={setAccountType}
        unreadNotifications={unreadCount}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenOnboarding={() => setIsSplashOpen(true)}
        onOpenProModal={() => setIsProModalOpen(true)}
        appFreeApplicationsLeft={freeApplicationsLeft}
      />

      {/* Main Page Canvas */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* VIEW MODE: INTERACTIVE APPLICATION */}
        {viewMode === 'app' && (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <DesktopNav
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              accountType={accountType}
              onOpenActionSheet={() => setIsActionSheetOpen(true)}
              onOpenProModal={() => setIsProModalOpen(true)}
              unreadMessagesCount={1}
            />

            <main className="flex-1 w-full min-w-0">
              {activeTab === 'home' && (
                <HomeScreen
                  posts={posts}
                  onSelectPost={(post) => setSelectedPost(post)}
                  onLikePost={handleLikePost}
                  onSavePost={handleSavePost}
                  accountType={accountType}
                  onOpenShowcase={() => setIsShowcaseOpen(true)}
                />
              )}

              {activeTab === 'search' && (
                <DiscoverScreen
                  jobs={jobs}
                  creatives={creatives}
                  onSelectJob={handleJobSelect}
                  onSelectUser={(user) => setSelectedUserProfile(user)}
                  onOpenMessageWithUser={(name) => {
                    setBookingRecipient(name);
                    setActiveTab('messages');
                  }}
                  accountType={accountType}
                />
              )}

              {activeTab === 'jobboard' && (
                <JobBoardScreen
                  jobs={jobs}
                  onSelectJob={handleJobSelect}
                  onOpenProModal={() => setIsProModalOpen(true)}
                  accountType={accountType}
                  appFreeApplicationsLeft={freeApplicationsLeft}
                />
              )}

              {activeTab === 'profile' && (
                <ProfileScreen
                  user={selectedUserProfile || CURRENT_USER}
                  accountType={accountType}
                  onOpenProModal={() => setIsProModalOpen(true)}
                  onOpenMessageWithUser={(name) => {
                    setBookingRecipient(name);
                    setActiveTab('messages');
                  }}
                  isOwnProfile={!selectedUserProfile || selectedUserProfile.id === CURRENT_USER.id}
                />
              )}

              {activeTab === 'messages' && (
                <MessagesScreen
                  messagesList={directMessages}
                  chatHistory={chatMessages}
                  onSendMessage={handleSendMessage}
                  onOpenBookModal={(recipientName) => setBookingRecipient(recipientName)}
                />
              )}
            </main>
          </div>
        )}

        {viewMode === 'wireframes' && <WireframeKitView />}
        {viewMode === 'tokens' && <DesignTokensView />}
        {viewMode === 'flow' && <FlowMapView />}
        {viewMode === 'devnotes' && <DevNotesView />}
      </div>

      {/* Mobile Bottom Navigation */}
      {viewMode === 'app' && (
        <BottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          accountType={accountType}
          onOpenActionSheet={() => setIsActionSheetOpen(true)}
          onOpenProModal={() => setIsProModalOpen(true)}
          unreadMessagesCount={1}
        />
      )}

      {/* ALL APPLICATION MODALS & OVERLAYS */}
      <ActionSheetModal
        isOpen={isActionSheetOpen}
        onClose={() => setIsActionSheetOpen(false)}
        onOpenPostGig={() => setIsPostGigOpen(true)}
        onOpenShowcase={() => setIsShowcaseOpen(true)}
        onSelectSearch={() => setActiveTab('search')}
      />

      <PostGigModal
        isOpen={isPostGigOpen}
        onClose={() => setIsPostGigOpen(false)}
        onAddJob={handleAddJob}
      />

      <ShowcaseModal
        isOpen={isShowcaseOpen}
        onClose={() => setIsShowcaseOpen(false)}
        onAddPost={handleAddPost}
      />

      <ProModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        appFreeApplicationsLeft={freeApplicationsLeft}
      />

      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onAcceptConnect={handleAcceptConnect}
        onDeclineConnect={handleDeclineConnect}
      />

      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        accountType={accountType}
        setAccountType={setAccountType}
        onOpenProModal={() => setIsProModalOpen(true)}
      />

      <SplashWelcomeModal
        isOpen={isSplashOpen}
        onClose={() => setIsSplashOpen(false)}
        onCompleteSignup={(type) => {
          setAccountType(type);
          setIsSplashOpen(false);
        }}
      />

      {/* Portfolio Media Lightbox */}
      <PortfolioLightbox
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenMessageWithUser={(name) => {
          setSelectedPost(null);
          setBookingRecipient(name);
          setActiveTab('messages');
        }}
      />

      {/* Casting & Modeling Modal */}
      {selectedCastingJob && (
        <CastingDetailScreen
          castingJob={selectedCastingJob}
          onClose={() => setSelectedCastingJob(null)}
          currentUser={CURRENT_USER}
        />
      )}

      {/* Direct Booking Modal */}
      {bookingRecipient && (
        <BookRequestModal
          isOpen={!!bookingRecipient}
          onClose={() => setBookingRecipient(null)}
          recipientName={bookingRecipient}
        />
      )}
    </div>
  );
}

export default App;
