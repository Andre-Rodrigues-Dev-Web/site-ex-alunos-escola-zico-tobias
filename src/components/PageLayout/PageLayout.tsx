import styled, { keyframes } from 'styled-components'
import { type ReactNode } from 'react'
import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { theme } from '../../styles/GlobalStyles'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const PageHero = styled.div`
  background: ${theme.colors.darkSurface};
  border-bottom: 1px solid ${theme.colors.border};
  padding: 64px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, ${theme.colors.primaryGlow} 0%, transparent 70%);
    pointer-events: none;
  }
`

const PageTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  animation: ${fadeIn} 0.6s ease both;
`

const PageSubtitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  max-width: 500px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease 0.1s both;
`

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
  animation: ${fadeIn} 0.6s ease 0.2s both;
  min-height: 40vh;
`

const ComingSoon = styled.div`
  text-align: center;
  padding: 80px 24px;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.text};
    margin-bottom: 12px;
  }

  p {
    color: ${theme.colors.textMuted};
    font-size: 0.95rem;
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 24px;
    line-height: 1;
  }
`

interface PageLayoutProps {
  title: string
  subtitle: string
  children?: ReactNode
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <PageHero>
          <PageTitle>{title}</PageTitle>
          <PageSubtitle>{subtitle}</PageSubtitle>
        </PageHero>
        <PageContent>
          {children ?? (
            <ComingSoon>
              <div className="icon">🏫</div>
              <h3>Em breve por aqui!</h3>
              <p>Esta seção está sendo preparada com muito carinho. Volte em breve!</p>
            </ComingSoon>
          )}
        </PageContent>
      </main>
      <Footer />
    </>
  )
}
