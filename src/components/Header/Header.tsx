import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer'
import { FiMenu, FiX } from 'react-icons/fi'

const HeaderWrapper = styled.header`
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow ${theme.transitions.medium};

  &.scrolled {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
  }
`

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  flex-shrink: 0;

  .logo-top {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${theme.colors.white};
    letter-spacing: -0.01em;
  }

  .logo-bottom {
    font-size: 1.15rem;
    font-weight: 900;
    color: ${theme.colors.accent};
    letter-spacing: -0.01em;
  }

  &:hover .logo-bottom {
    color: ${theme.colors.primaryLight};
  }
`

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    top: 107px;
    background: rgba(13, 17, 23, 0.98);
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

const NavItem = styled(NavLink)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  padding: 8px 14px;
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.darkElevated};
  }

  &.active {
    color: ${theme.colors.accent};
    background: ${theme.colors.primaryGlow};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 20px;
    font-size: 1.1rem;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
  }
`

const HeaderRight = styled.div`
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

const MenuButton = styled.button`
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/destaques', label: 'Destaques' },
    { to: '/fotos', label: 'Fotos' },
    { to: '/videos', label: 'Vídeos' },
    { to: '/causos-dos-alunos', label: 'Causos dos alunos' },
  ]

  return (
    <HeaderWrapper className={isScrolled ? 'scrolled' : ''}>
      <HeaderInner>
        <Logo to="/" id="header-logo">
          <span className="logo-top">Ex-Alunos</span>
          <span className="logo-bottom">ZicoTobias</span>
        </Logo>

        <Nav $open={isMenuOpen}>
          {navLinks.map(link => (
            <NavItem
              key={link.to}
              to={link.to}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavItem>
          ))}
        </Nav>

        <HeaderRight>
          <div className="audio-player-hide">
            <AudioPlayer />
          </div>
          <MenuButton
            onClick={() => setIsMenuOpen(prev => !prev)}
            id="mobile-menu-btn"
            aria-label="Menu"
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </MenuButton>
        </HeaderRight>
      </HeaderInner>
    </HeaderWrapper>
  )
}
