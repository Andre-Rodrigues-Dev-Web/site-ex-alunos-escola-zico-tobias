import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/GlobalStyles'

export const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

export const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0;
  background: ${theme.colors.darkSurface};
  border-top: 1px solid ${theme.colors.border};
  border-bottom: 1px solid ${theme.colors.border};
`

export const BannerBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/banner-cta.png');
  background-size: cover;
  background-position: center;
  filter: brightness(0.2) saturate(0.4);
`

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(13, 17, 23, 0.97) 40%,
    rgba(13, 17, 23, 0.8) 70%,
    rgba(26, 122, 46, 0.4) 100%
  );
`

export const BannerInner = styled.div`
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

export const BannerLeft = styled.div``

export const BannerIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: ${theme.colors.textMuted};
  font-size: 0.85rem;
`

export const BannerHeadline = styled.h2`
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

export const BannerDesc = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.8;
  max-width: 400px;
  margin-bottom: 36px;
`

export const ContactBtn = styled(Link)`
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

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FeatureItem = styled.div`
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

export const FeatureIcon = styled.div`
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

export const FeatureText = styled.div`
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
