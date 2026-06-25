import styled, { keyframes, css } from 'styled-components'
import { theme } from '../../styles/GlobalStyles'

export const pulse = keyframes`
  0%, 100% { transform: scaleY(1); opacity: 0.7; }
  50% { transform: scaleY(1.8); opacity: 1; }
`

export const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${theme.borderRadius.full};
  padding: 6px 14px;
  backdrop-filter: blur(10px);
  transition: all ${theme.transitions.medium};

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.glow};
  }
`

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: all ${theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: scale(1.1);
  }
`

export const VisualBars = styled.div<{ $playing: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 18px;

  span {
    width: 3px;
    height: 100%;
    background: ${theme.colors.accent};
    border-radius: 2px;
    transform-origin: bottom;

    ${({ $playing }) => $playing && css`
      animation: ${pulse} 0.8s ease-in-out infinite;
      &:nth-child(1) { animation-delay: 0s; }
      &:nth-child(2) { animation-delay: 0.15s; }
      &:nth-child(3) { animation-delay: 0.3s; }
      &:nth-child(4) { animation-delay: 0.45s; }
    `}
  }
`

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;

  span:first-child {
    font-size: 0.7rem;
    color: ${theme.colors.textMuted};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  span:last-child {
    font-size: 0.8rem;
    color: ${theme.colors.text};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }
`

export const MuteButton = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.colors.textMuted};
  transition: color ${theme.transitions.fast};

  &:hover { color: ${theme.colors.accent}; }
`
