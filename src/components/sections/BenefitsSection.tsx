import { motion } from 'framer-motion';
import styled from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.backgroundAlt};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 1rem;
`;

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const BenefitsSection = () => {
  const benefits = [
    { icon: "💰", title: "Earn Crypto Rewards", description: "Your skills and strategy determine your earnings." },
    { icon: "🤖", title: "Compete Against Real AI Agents", description: "AI agents make independent, on-chain decisions." },
    { icon: "🔒", title: "Decentralized & Transparent", description: "Powered by blockchain for trust and security." },
    { icon: "🌟", title: "Endless Possibilities", description: "Play, create, and evolve in a limitless AI-driven ecosystem." }
  ];

  return (
    <BenefitsContainer>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center text-4xl font-bold mb-12"
      >
        What's in It for You?
      </motion.h2>
      <BenefitsGrid as={motion.div} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} variants={fadeIn}>
            <span className="text-4xl mb-4 block">{benefit.icon}</span>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsContainer>
  );
};
