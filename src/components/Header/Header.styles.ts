import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { theme } from '../../styles/GlobalStyles'

export const HeaderWrapper = styled.header`
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow ${theme.transitions.medium};

  &.scrolled {
    box-shadow: ${theme.shadows.header};
  }
`

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  flex-shrink: 0;

  .logo-top {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${theme.colors.text};
    letter-spacing: -0.01em;
  }

  .logo-bottom {
    font-size: 1.15rem;
    font-weight: 900;
    color: ${theme.colors.primary};
    letter-spacing: -0.01em;
  }

  &:hover .logo-bottom {
    color: ${theme.colors.primaryLight};
  }
`

export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    top: 107px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 32px 24px;
    gap: 8px;
    transform: translateX(100%);
    transition: transform ${theme.transitions.medium};
    border-top: 1px solid ${theme.colors.border};

    ${({ $open }) => $open && css`
      transform: translateX(0);
    `}
  }
`

export const NavItem = styled(NavLink)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  padding: 8px 14px;
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.darkElevated};
  }

  &.active {
    color: ${theme.colors.primary};
    background: ${theme.colors.primaryGlow};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 20px;
    font-size: 1.1rem;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    .audio-player-hide {
      display: none;
    }
  }
`

export const MenuButton = styled.button`
  display: none;
  color: ${theme.colors.text};
  padding: 8px;
  border-radius: ${theme.borderRadius.sm};
  transition: background ${theme.transitions.fast};

  &:hover { background: ${theme.colors.darkElevated}; }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
