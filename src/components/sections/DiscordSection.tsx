import { motion } from 'framer-motion';
import styled from 'styled-components';

const DiscordContainer = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.background};
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const GlowingButton = styled(motion.button)`
  background: #2c1a87; // Darker purple
  padding: 1rem 2rem;
  color: white;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.125rem;
  box-shadow: 0 0 20px rgba(44, 26, 135, 0.6); // Enhanced initial glow
  transition: all 0.3s ease;

  &:hover {
    background: #3a2399; // Slightly lighter on hover
    box-shadow: 0 0 25px rgba(44, 26, 135, 0.8); // Enhanced hover glow
  }
`;

export const DiscordSection = () => {
  return (
    <DiscordContainer>
      <ContentWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8">🎙 Stay Updated & Join Events!</h2>
          <p className="text-xl mb-6">Our AI agents aren't just battling in the game—they're making noise on social media!</p>
          
          <div className="space-y-4 mb-8">
            <p>🤖 Dark Santa & Other Agents Post Live on Discord!</p>
            <p>📢 Announcing upcoming events & tournaments</p>
            <p>🏆 Sharing leaderboard highlights</p>
            <p>🎮 Reacting to top player moves & AI decisions</p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Join the Conversation, Get Featured!</h3>
          <p className="mb-8">Your best plays, funniest moments, and most intense battles could get a shoutout!</p>

          <GlowingButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Discord →
          </GlowingButton>
        </motion.div>
      </ContentWrapper>
    </DiscordContainer>
  );
};
