import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/GlobalStyles";
import bannerHero from "../../assets/banner-hero.png";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroWrapper = styled.section`
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 420px;
  }
`;

const HeroBg = styled.div<{ $src: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center top;
  transform: scale(1.05);
  transition: transform 0.5s ease;
  filter: brightness(0.45);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(13, 17, 23, 0.92) 0%,
    rgba(13, 17, 23, 0.7) 50%,
    rgba(26, 122, 46, 0.2) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  animation: ${fadeInUp} 0.8s ease both;
`;

const HeroSubtitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 32px;
    height: 2px;
    background: ${theme.colors.accent};
    display: inline-block;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: ${theme.colors.white};
  max-width: 640px;
  margin-bottom: 24px;
  letter-spacing: -0.02em;

  .highlight {
    color: ${theme.colors.accent};
    display: block;
  }

  .green {
    color: ${theme.colors.primaryLight};
    display: block;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  max-width: 480px;
  line-height: 1.75;
  margin-bottom: 36px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 28px;
  border-radius: ${theme.borderRadius.sm};
  letter-spacing: 0.02em;
  transition: all ${theme.transitions.medium};

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.glow};
  }
`;

const SecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: ${theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px 28px;
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border};
  letter-spacing: 0.02em;
  transition: all ${theme.transitions.medium};

  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 48px;
  padding-top: 36px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const Stat = styled.div`
  .value {
    font-size: 1.8rem;
    font-weight: 900;
    color: ${theme.colors.accent};
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .label {
    font-size: 0.8rem;
    color: ${theme.colors.textMuted};
    margin-top: 4px;
    font-weight: 500;
  }
`;

export function Hero() {
  return (
    <HeroWrapper>
      <HeroBg $src={bannerHero} />
      <HeroOverlay />
      <HeroContent>
        <HeroSubtitle>Escola Estadual Comendador Zico Tobias</HeroSubtitle>
        <HeroTitle>
          CONECTADOS PELO
          <span className="highlight">PASSADO,</span>
          INSPIRADOS PELO
          <span className="green">FUTURO.</span>
        </HeroTitle>
        <HeroDescription>
          O espaço oficial dos ex-alunos da Escola Estadual Comendador Zico
          Tobias. Reencontre amigos, compartilhe histórias e fortaleça essa rede
          que transforma gerações.
        </HeroDescription>
        <HeroActions>
          <PrimaryBtn to="/fotos" id="hero-cta-primary">
            Ver Galeria de Fotos
          </PrimaryBtn>
          <SecondaryBtn to="/causos-dos-alunos" id="hero-cta-secondary">
            Contar minha história
          </SecondaryBtn>
        </HeroActions>
        <StatsRow>
          <Stat>
            <div className="value">+2.500</div>
            <div className="label">Ex-alunos conectados</div>
          </Stat>
          <Stat>
            <div className="value">60+</div>
            <div className="label">Anos de história</div>
          </Stat>
          <Stat>
            <div className="value">+500</div>
            <div className="label">Memórias compartilhadas</div>
          </Stat>
        </StatsRow>
      </HeroContent>
    </HeroWrapper>
  );
}
