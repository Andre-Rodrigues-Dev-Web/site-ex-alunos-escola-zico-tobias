import styled, { keyframes, css } from 'styled-components'
import { FiLoader } from 'react-icons/fi'
import { theme } from '../../styles/GlobalStyles'

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`
export const spin = keyframes`
  to { transform: rotate(360deg); }
`
export const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(76, 222, 114, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(76, 222, 114, 0); }
`

export const PageHero = styled.div`
  background: ${theme.colors.darkSurface};
  border-bottom: 1px solid ${theme.colors.border};
  padding: 64px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(76,222,114,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
`

export const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 16px;
`

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.6s ease both;

  span { color: ${theme.colors.accent}; }
`

export const HeroSub = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
  animation: ${fadeInUp} 0.6s ease 0.1s both;
`

export const PageBody = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`

export const CopySection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`

export const CopyText = styled.div`
  animation: ${fadeInUp} 0.7s ease both;
`

export const SectionLabel = styled.span`
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 14px;
`

export const SectionTitle = styled.h2`
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 18px;
  line-height: 1.2;

  span { color: ${theme.colors.accent}; }
`

export const Paragraph = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.85;
  margin-bottom: 16px;
`

export const CostCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeInUp} 0.7s ease 0.1s both;
`

export const CostCard = styled.div`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: 20px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: all ${theme.transitions.medium};

  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primaryGlow};
    transform: translateX(4px);
  }
`

export const CostIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: ${theme.borderRadius.sm};
  background: ${theme.colors.primaryGlow};
  border: 1px solid rgba(26,122,46,0.3);
  display: flex; align-items: center; justify-content: center;
  color: ${theme.colors.accent};
  flex-shrink: 0;
`

export const CostInfo = styled.div`
  h4 { font-size: 0.9rem; font-weight: 700; color: ${theme.colors.text}; margin-bottom: 3px; }
  p  { font-size: 0.8rem; color: ${theme.colors.textMuted}; line-height: 1.5; }
`

export const PixSection = styled.section`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: 48px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;
  align-items: center;
  animation: ${fadeInUp} 0.7s ease both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 32px 24px;
  }
`

export const QrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

export const QrBox = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.glow};
  animation: ${pulse} 3s ease-in-out infinite;
`

export const QrLabel = styled.p`
  font-size: 0.78rem;
  color: ${theme.colors.textMuted};
  font-weight: 500;
  text-align: center;
  max-width: 160px;
  line-height: 1.4;
`

export const PixKey = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-top: 8px;
`

export const PixInfo = styled.div``

export const PixSteps = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
  counter-reset: step;
`

export const PixStep = styled.li`
  counter-increment: step;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.88rem;
  color: ${theme.colors.textMuted};
  line-height: 1.5;

  &::before {
    content: counter(step);
    min-width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${theme.colors.primaryGlow};
    border: 1px solid rgba(26,122,46,0.4);
    color: ${theme.colors.accent};
    font-weight: 700;
    font-size: 0.78rem;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
`

export const FormSection = styled.section`
  animation: ${fadeInUp} 0.7s ease both;
`

export const FormCard = styled.div`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: 48px;

  @media (max-width: 600px) { padding: 28px 20px; }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`

export const FormGroup = styled.div<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 7px;
  ${({ $full }) => $full && css`grid-column: 1 / -1;`}
`

export const FormLabel = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 6px;
`

export const FormInput = styled.input`
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  padding: 11px 14px;
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color ${theme.transitions.fast};
  width: 100%;

  &::placeholder { color: ${theme.colors.textMuted}; }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryGlow};
  }
`

export const FormSelect = styled.select`
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  padding: 11px 14px;
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color ${theme.transitions.fast};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryGlow};
  }

  option { background: ${theme.colors.darkElevated}; }
`

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: ${theme.borderRadius.sm};
  margin-top: 24px;
  letter-spacing: 0.03em;
  transition: all ${theme.transitions.medium};

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.glow};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

export const SpinIcon = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
`

export const FeedbackBox = styled.div<{ $type: 'success' | 'error' }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 20px;
  border-radius: ${theme.borderRadius.md};
  margin-top: 20px;
  background: ${({ $type }) =>
    $type === 'success' ? 'rgba(26,122,46,0.12)' : 'rgba(218,54,51,0.12)'};
  border: 1px solid ${({ $type }) =>
    $type === 'success' ? theme.colors.primary : theme.colors.red};
  color: ${({ $type }) =>
    $type === 'success' ? theme.colors.accent : theme.colors.red};
  font-size: 0.88rem;
  line-height: 1.6;
`
