import { FiInstagram, FiFacebook, FiYoutube, FiMail, FiHeart } from 'react-icons/fi'
import {
  FooterWrapper,
  FooterInner,
  FooterGrid,
  FooterBrand,
  FooterLogo,
  FooterDesc,
  SocialRow,
  SocialBtn,
  FooterCol,
  FooterHeading,
  FooterLinks,
  FooterLink,
  FooterBottom,
  Copyright,
  BackTop,
} from './Footer.styles'

const FOUNDING_YEAR = 1966
const schoolAge = new Date().getFullYear() - FOUNDING_YEAR

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
              Fundada em {FOUNDING_YEAR}, a Escola Estadual Comendador Zico Tobias
              é referência em educação pública em Luz, Minas Gerais — {schoolAge} anos
              formando cidadãos e transformando vidas.
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
              <li><FooterLink to="/apoie" id="footer-nav-ajude">Ajude esse projeto a ficar vivo</FooterLink></li>
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
