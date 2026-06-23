import styled from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { FiCamera, FiMail } from 'react-icons/fi'

const TopbarWrapper = styled.div`
  background-color: ${theme.colors.primary};
  padding: 7px 24px;
  position: relative;
  z-index: 10;
`

const TopbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const TopbarItem = styled.span`
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

export function Topbar() {
  return (
    <TopbarWrapper>
      <TopbarInner>
        <TopbarItem>
          <FiCamera size={13} />
          O site
        </TopbarItem>
        <TopbarItem>
          <a href="mailto:contato@exalunoszerobias.com.br">
            Envie suas fotos e vídeos para nós! Clique aqui e saiba mais.
          </a>
        </TopbarItem>
        <TopbarItem>
          <FiMail size={13} />
          Ajude a manter esse história viva
        </TopbarItem>
      </TopbarInner>
    </TopbarWrapper>
  )
}
