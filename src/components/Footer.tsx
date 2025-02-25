import { Github, Twitter, MessageCircle } from 'lucide-react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.backgroundAlt};
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  a {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    transition: opacity 0.2s;
    text-decoration: none;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    transition: all 0.2s;
    
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

const NetworkBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 24px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/support">Support</a>
            <a href="/terms">Terms</a>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Community</h3>
          <SocialLinks>
            <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} />
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Powered By</h3>
          <NetworkBranding>
            <span>Sonic Network</span>
            {/* Add network logo if available */}
          </NetworkBranding>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};
