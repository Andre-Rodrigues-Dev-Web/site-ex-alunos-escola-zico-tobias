import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/GlobalStyles'

export const CardWrapper = styled(Link)`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  transition: all ${theme.transitions.medium};
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.card}, 0 0 0 1px ${theme.colors.primary};

    .card-thumbnail .overlay { opacity: 1; }
    .card-thumbnail img { transform: scale(1.06); }
    .card-play-icon { transform: scale(1.15); }
  }
`

export const CardThumbnail = styled.div`
  position: relative;
  aspect-ratio: 16/10;
  background: ${theme.colors.darkElevated};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }
`

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.darkElevated} 0%, rgba(26, 122, 46, 0.1) 100%);
  color: ${theme.colors.border};
`

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(26, 122, 46, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${theme.transitions.medium};
  backdrop-filter: blur(2px);
`

export const PlayIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: ${theme.shadows.glow};
  transition: transform ${theme.transitions.medium};
`

export const TypeBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(13, 17, 23, 0.85);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 3px 10px;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  backdrop-filter: blur(4px);
`

export const CardBody = styled.div`
  padding: 16px;
`

export const CardTitle = styled.h3`
  font-size: 0.92rem;
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.5;
  margin-bottom: 14px;
`

export const CardButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 0.78rem;
  font-weight: 700;
  padding: 7px 16px;
  border-radius: ${theme.borderRadius.full};
  letter-spacing: 0.04em;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateX(2px);
  }
`
