import { useState, useEffect } from 'react'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  NavItem,
  HeaderRight,
  MenuButton,
} from './Header.styles'

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
