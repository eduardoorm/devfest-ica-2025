import React from 'react';
import Header from '../../shared/components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ChallengesSection from './components/ChallengesSection';
import RankingSection from './components/RankingSection';
import RewardsSection from './components/RewardsSection';
import Footer from '../../shared/components/Footer';

interface LandingPageProps {
  onNavigateToLogin?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToLogin }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToLogin={onNavigateToLogin} />
      {/* Espaciado para el header fijo */}
      <div className="pt-16 lg:pt-20">
        <main>
          <HeroSection />
          <FeaturesSection />
          <ChallengesSection />
          <RankingSection />
          <RewardsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
