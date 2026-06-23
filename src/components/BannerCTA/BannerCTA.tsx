import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { FiMessageCircle, FiCamera, FiVideo, FiFileText, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0;
  background: ${theme.colors.darkSurface};
  border-top: 1px solid ${theme.colors.border};
  border-bottom: 1px solid ${theme.colors.border};
`

const BannerBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/banner-cta.png');
  background-size: cover;
  background-position: center;
  filter: brightness(0.2) saturate(0.4);
`

const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(13, 17, 23, 0.97) 40%,
    rgba(13, 17, 23, 0.8) 70%,
    rgba(26, 122, 46, 0.4) 100%
  );
`

const BannerInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const BannerLeft = styled.div``

const BannerIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: ${theme.colors.textMuted};
  font-size: 0.85rem;
`

const BannerHeadline = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 20px;

  .white { color: ${theme.colors.white}; }
  .gradient {
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primaryLight});
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`

const BannerDesc = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.8;
  max-width: 400px;
  margin-bottom: 36px;
`

const ContactBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 32px;
  border-radius: ${theme.borderRadius.sm};
  letter-spacing: 0.03em;
  transition: all ${theme.transitions.medium};

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.glow};
  }
`

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.medium};

  &:hover {
    background: rgba(26, 122, 46, 0.1);
    border-color: ${theme.colors.primary};
  }
`

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.sm};
  background: ${theme.colors.primaryGlow};
  border: 1px solid rgba(26, 122, 46, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  flex-shrink: 0;
`

const FeatureText = styled.div`
  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: ${theme.colors.text};
    margin-bottom: 4px;
  }
  p {
    font-size: 0.82rem;
    color: ${theme.colors.textMuted};
    line-height: 1.5;
  }
`

export function BannerCTA() {
  const features = [
    {
      icon: <FiCamera size={18} />,
      title: 'Envie suas fotos',
      desc: 'Compartilhe registros únicos dos tempos de escola que você guarda com carinho.',
    },
    {
      icon: <FiVideo size={18} />,
      title: 'Vídeos históricos',
      desc: 'Envie gravações de eventos, formaturas e momentos que marcaram gerações.',
    },
    {
      icon: <FiFileText size={18} />,
      title: 'Causos dos alunos',
      desc: 'Ajude a manter essa memória viva contando suas histórias e aventuras na escola.',
    },
  ]

  return (
    <BannerWrapper id="banner-cta">
      <BannerBg />
      <BannerOverlay />
      <BannerInner>
        <BannerLeft>
          <BannerIconRow>
            <FiMessageCircle size={16} />
            <span>SUA HISTÓRIA FAZ PARTE DA NOSSA HISTÓRIA!</span>
          </BannerIconRow>
          <BannerHeadline>
            <span className="white">Compartilhe suas</span>
            <br />
            <span className="gradient">memórias conosco!</span>
          </BannerHeadline>
          <BannerDesc>
            Compartilhe suas histórias, fotos e vídeos dos tempos da Escola Estadual
            Comendador Zico Tobias e ajude a manter as memórias que aconteceram a prosperar.
          </BannerDesc>
          <ContactBtn to="/causos-dos-alunos" id="banner-contact-btn">
            <FiMail size={16} />
            Entrar em contato
          </ContactBtn>
        </BannerLeft>
        <FeatureList>
          {features.map((f, i) => (
            <FeatureItem key={i} id={`feature-${i + 1}`}>
              <FeatureIcon>{f.icon}</FeatureIcon>
              <FeatureText>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </FeatureText>
            </FeatureItem>
          ))}
        </FeatureList>
      </BannerInner>
    </BannerWrapper>
  )
}
