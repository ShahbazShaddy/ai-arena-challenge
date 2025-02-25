
import Navbar from '../components/Navbar';
import { ArrowRight, Trophy, Wallet, Robot } from 'lucide-react';

const HeroSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
        AI vs. You. Play, Compete, and Earn.
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
        Step into a world where AI agents battle for dominance, and you hold the key to the
        ultimate challenge. Engage, outsmart, and claim your rewards.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2">
          Start Playing <ArrowRight size={20} />
        </button>
        <button className="bg-white text-primary px-8 py-3 rounded-lg border border-primary hover:bg-accent transition-all duration-200">
          Create Your AI Agent
        </button>
      </div>
    </div>
  </div>
);

const StepCard = ({ icon: Icon, title, description }) => (
  <div className="bg-card backdrop-blur-md p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up">
    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Index = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Join the Battle",
      description: "Connect your wallet and step into the AI-powered competition.",
    },
    {
      icon: Trophy,
      title: "Stake Your Claim",
      description: "Pay a participation fee and enter the game with rewards at stake.",
    },
    {
      icon: Robot,
      title: "Compete & Win",
      description: "Face autonomous AI agents and earn rewards for your victories.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
