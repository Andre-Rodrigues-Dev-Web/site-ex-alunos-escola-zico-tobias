import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { FiCamera, FiMail } from 'react-icons/fi'

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`

const TopbarWrapper = styled.div`
  background-color: ${theme.colors.primary};
  overflow: hidden;
  padding: 6px 0;
  position: relative;
  z-index: 10;
`

const MarqueeTrack = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${marquee} 30s linear infinite;
  gap: 80px;
`

const MarqueeText = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${theme.colors.accentYellow};
    font-weight: 700;
    text-decoration: underline;

    &:hover {
      opacity: 0.85;
    }
  }
`

const Separator = styled.span`
  color: rgba(255,255,255,0.4);
  margin: 0 20px;
`

export function Topbar() {
  const message = 'Envie suas fotos e vídeos para nós! Clique aqui e saiba mais.'
  const secondary = 'Ajude a manter esse história viva'

  return (
    <TopbarWrapper>
      <MarqueeTrack>
        {[...Array(4)].map((_, i) => (
          <MarqueeText key={i}>
            <FiCamera size={13} />
            O site{' '}
            <Separator>•</Separator>
            <a href="mailto:contato@exalunoszerobias.com.br">{message}</a>
            <Separator>•</Separator>
            <FiMail size={13} />
            {secondary}
          </MarqueeText>
        ))}
      </MarqueeTrack>
    </TopbarWrapper>
  )
}
