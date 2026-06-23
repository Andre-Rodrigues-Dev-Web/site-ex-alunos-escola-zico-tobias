import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/GlobalStyles'
import { FiInstagram, FiFacebook, FiYoutube, FiMail, FiHeart } from 'react-icons/fi'

const FooterWrapper = styled.footer`
  background: ${theme.colors.darkSurface};
  border-top: 1px solid ${theme.colors.border};
`

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 32px;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const FooterBrand = styled.div``

const FooterLogo = styled(Link)`
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

const FooterDesc = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  max-width: 280px;
  margin-bottom: 24px;
`

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`

const SocialBtn = styled.a`
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

const FooterCol = styled.div``

const FooterHeading = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
`

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FooterLink = styled(Link)`
  font-size: 0.85rem;
  color: ${theme.colors.textMuted};
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.accent};
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.border};
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;

  svg { color: ${theme.colors.red}; }
`

const BackTop = styled.button`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color ${theme.transitions.fast};

  &:hover { color: ${theme.colors.accent}; }
`

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <FooterWrapper id="footer">
      <FooterInner>
        <FooterGrid>
          <FooterBrand>
            <FooterLogo to="/" id="footer-logo">
              <span className="logo-top">Ex-Alunos</span>
              <span className="logo-bottom">ZicoTobias</span>
            </FooterLogo>
            <FooterDesc>
              Esse projeto tem como objetivo lembrar bons momentos que aconteceram
              na Escola Zico Tobias em Luz.
            </FooterDesc>
            <SocialRow>
              <SocialBtn href="#" id="social-instagram" aria-label="Instagram" target="_blank" rel="noopener">
                <FiInstagram size={16} />
              </SocialBtn>
              <SocialBtn href="#" id="social-facebook" aria-label="Facebook" target="_blank" rel="noopener">
                <FiFacebook size={16} />
              </SocialBtn>
              <SocialBtn href="#" id="social-youtube" aria-label="YouTube" target="_blank" rel="noopener">
                <FiYoutube size={16} />
              </SocialBtn>
              <SocialBtn href="mailto:contato@exalunoszerobias.com.br" id="social-email" aria-label="Email">
                <FiMail size={16} />
              </SocialBtn>
            </SocialRow>
          </FooterBrand>

          <FooterCol>
            <FooterHeading>Navegação</FooterHeading>
            <FooterLinks>
              <li><FooterLink to="/" id="footer-nav-home">A Escola</FooterLink></li>
              <li><FooterLink to="/destaques" id="footer-nav-destaques">Eventos que deixaram saudades</FooterLink></li>
              <li><FooterLink to="/fotos" id="footer-nav-fotos">Fotos</FooterLink></li>
              <li><FooterLink to="/videos" id="footer-nav-videos">Vídeos</FooterLink></li>
              <li><FooterLink to="/causos-dos-alunos" id="footer-nav-causos">Causos dos alunos</FooterLink></li>
            </FooterLinks>
          </FooterCol>

          <FooterCol>
            <FooterHeading>Navegação</FooterHeading>
            <FooterLinks>
              <li><FooterLink to="/" id="footer-nav-projeto">O Projeto</FooterLink></li>
              <li><FooterLink to="/fotos" id="footer-nav-historia">Compartilhe bons momentos e histórias na escola</FooterLink></li>
              <li><FooterLink to="/causos-dos-alunos" id="footer-nav-ajude">Ajude esse projeto a ficar vivo</FooterLink></li>
            </FooterLinks>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Ex-Alunos Zico Tobias. Feito com{' '}
            <FiHeart size={12} /> para preservar memórias.
          </Copyright>
          <BackTop onClick={scrollToTop} id="back-to-top">
            ↑ Voltar ao topo
          </BackTop>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  )
}
