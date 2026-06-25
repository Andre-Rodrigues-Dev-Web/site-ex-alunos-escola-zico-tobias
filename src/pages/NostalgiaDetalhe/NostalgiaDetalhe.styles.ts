import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { FiLoader } from 'react-icons/fi'
import { theme } from '../../styles/GlobalStyles'

export const fadeIn = keyframes`from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); }`
export const spin   = keyframes`to { transform: rotate(360deg); }`

export const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  animation: ${fadeIn} 0.5s ease both;
`

export const BackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${theme.colors.textMuted};
  margin-bottom: 32px;
  transition: color ${theme.transitions.fast};

  &:hover { color: ${theme.colors.primary}; }
`

export const TypeBadge = styled.span<{ $type: 'video' | 'foto' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ $type }) => $type === 'video' ? theme.colors.primaryGlow : '#f0fdf4'};
  border: 1px solid ${theme.colors.primary}33;
  color: ${theme.colors.primary};
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: 16px;
`

export const Title = styled.h1`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 16px;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid ${theme.colors.border};
`

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.83rem;
  color: ${theme.colors.textMuted};
  font-weight: 500;
`

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`

export const Tag = styled.span`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 4px 12px;
  font-size: 0.78rem;
  color: ${theme.colors.textMuted};
  font-weight: 500;
  transition: all ${theme.transitions.fast};

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: ${theme.colors.primaryGlow};
  }
`

export const MediaBox = styled.div`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  overflow: hidden;
  position: relative;
`

export const MediaPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: ${theme.colors.border};

  span {
    font-size: 0.85rem;
    color: ${theme.colors.textMuted};
    font-weight: 500;
  }
`

export const VideoEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

export const Description = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.text};
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 24px;
`

export const LongDesc = styled.div`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.9;
  white-space: pre-line;
  margin-bottom: 40px;
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.border};
  margin: 40px 0;
`

export const ShareRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`

export const ShareLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.textMuted};
`

export const ShareBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${theme.colors.primary};
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-1px);
  }
`

export const ContributeBox = styled.div`
  background: ${theme.colors.primaryGlow};
  border: 1px solid ${theme.colors.primary}33;
  border-radius: ${theme.borderRadius.md};
  padding: 28px 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.text};
    margin-bottom: 8px;
  }
  p {
    font-size: 0.88rem;
    color: ${theme.colors.textMuted};
    line-height: 1.6;
    margin-bottom: 14px;
  }
`

export const ContributeIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${theme.borderRadius.sm};
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`

export const CenterBox = styled.div`
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  min-height: 40vh; gap: 16px;
  color: ${theme.colors.textMuted};
  font-size: 0.95rem;
`

export const Spinner = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
  color: ${theme.colors.primary};
`
