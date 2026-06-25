import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/GlobalStyles'

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

export const SectionWrapper = styled.section`
  background: ${theme.colors.darkSurface};
  border-bottom: 1px solid ${theme.colors.border};
`

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  animation: ${fadeInUp} 0.7s ease both;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Label = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 16px;

  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: ${theme.colors.accent};
  }
`

export const Title = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 900;
  color: ${theme.colors.text};
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;

  span {
    color: ${theme.colors.accent};
  }
`

export const Paragraph = styled.p`
  font-size: 0.97rem;
  color: ${theme.colors.textMuted};
  line-height: 1.85;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const StatCard = styled.div`
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all ${theme.transitions.medium};

  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primaryGlow};
    transform: translateY(-4px);
  }
`

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.sm};
  background: ${theme.colors.primaryGlow};
  border: 1px solid rgba(26, 122, 46, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
`

export const StatValue = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.03em;
  line-height: 1;
`

export const StatLabel = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  font-weight: 500;
  line-height: 1.4;
`

export const ModalidadeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
`

export const ModalidadeTag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.87rem;
  font-weight: 600;
  color: ${theme.colors.text};
  padding: 10px 14px;
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  border-left: 3px solid ${theme.colors.primary};

  &:hover {
    border-left-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`
