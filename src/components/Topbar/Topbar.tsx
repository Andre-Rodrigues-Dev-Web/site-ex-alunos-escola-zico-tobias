import { Link } from 'react-router-dom'
import { FiCamera, FiHeart } from 'react-icons/fi'
import { TopbarWrapper, TopbarInner, TopbarItem } from './Topbar.styles'

export function Topbar() {
  return (
    <TopbarWrapper>
      <TopbarInner>
        <TopbarItem>
          <FiCamera size={13} />
          O site
        </TopbarItem>
        <TopbarItem>
          <a
            href="https://wa.me/5537999262829?text=Ol%C3%A1!%20Quero%20enviar%20fotos%20e%20v%C3%ADdeos%20para%20o%20site%20Ex-Alunos%20Zico%20Tobias.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Envie suas fotos e vídeos para nós! Clique aqui e saiba mais.
          </a>
        </TopbarItem>
        <TopbarItem>
          <FiHeart size={13} />
          <Link to="/apoie">Ajude a manter essa história viva</Link>
        </TopbarItem>
      </TopbarInner>
    </TopbarWrapper>
  )
}
