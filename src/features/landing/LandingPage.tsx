import Header from '../../shared/components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ChallengesSection from './components/ChallengesSection';
import RewardsSection from './components/RewardsSection';
import NewFooter from '../../shared/components/NewFooter';

interface LandingPageProps {
  onNavigateToLogin?: () => void;
}

const LandingPage = ({ onNavigateToLogin }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToLogin={onNavigateToLogin} />
      {/* Espaciado para el header fijo */}
      <div className="pt-16 lg:pt-20">
        <main>
          <HeroSection />
          <FeaturesSection />
          <ChallengesSection />
          <RewardsSection />
        </main>
        <NewFooter />
      </div>
    </div>
  );
};

export default LandingPage;
