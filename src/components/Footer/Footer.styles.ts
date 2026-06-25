import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/GlobalStyles'

export const FooterWrapper = styled.footer`
  background: ${theme.colors.darkSurface};
  border-top: 1px solid ${theme.colors.border};
`

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 32px;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

export const FooterBrand = styled.div``

export const FooterLogo = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  line-height: 1.1;
  margin-bottom: 16px;

  .logo-top {
    font-size: 1.05rem;
    font-weight: 700;
    color: ${theme.colors.white};
  }

  .logo-bottom {
    font-size: 1.05rem;
    font-weight: 900;
    color: ${theme.colors.accent};
  }
`

export const FooterDesc = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  max-width: 280px;
  margin-bottom: 24px;
`

export const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.sm};
  background: ${theme.colors.darkElevated};
  border: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textMuted};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`

export const FooterCol = styled.div``

export const FooterHeading = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
`

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FooterLink = styled(Link)`
  font-size: 0.85rem;
  color: ${theme.colors.textMuted};
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.accent};
  }
`

export const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.border};
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;

  svg { color: ${theme.colors.red}; }
`

export const BackTop = styled.button`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color ${theme.transitions.fast};

  &:hover { color: ${theme.colors.accent}; }
`
