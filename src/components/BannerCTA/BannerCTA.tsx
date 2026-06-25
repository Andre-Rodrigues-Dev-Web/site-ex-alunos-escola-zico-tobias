import { FiMessageCircle, FiCamera, FiVideo, FiFileText, FiMail } from 'react-icons/fi'
import {
  BannerWrapper,
  BannerBg,
  BannerOverlay,
  BannerInner,
  BannerLeft,
  BannerIconRow,
  BannerHeadline,
  BannerDesc,
  ContactBtn,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
} from './BannerCTA.styles'

export function BannerCTA() {
  const features = [
    {
      icon: <FiCamera size={18} />,
      title: 'Envie suas fotos',
      desc: 'Compartilhe registros únicos dos tempos de escola que você guarda com carinho.',
    },
    {
      icon: <FiVideo size={18} />,
      title: 'Vídeos históricos',
      desc: 'Envie gravações de eventos, formaturas e momentos que marcaram gerações.',
    },
    {
      icon: <FiFileText size={18} />,
      title: 'Causos dos alunos',
      desc: 'Ajude a manter essa memória viva contando suas histórias e aventuras na escola.',
    },
  ]

  return (
    <BannerWrapper id="banner-cta">
      <BannerBg />
      <BannerOverlay />
      <BannerInner>
        <BannerLeft>
          <BannerIconRow>
            <FiMessageCircle size={16} />
            <span>SUA HISTÓRIA FAZ PARTE DA NOSSA HISTÓRIA!</span>
          </BannerIconRow>
          <BannerHeadline>
            <span className="white">Compartilhe suas</span>
            <br />
            <span className="gradient">memórias conosco!</span>
          </BannerHeadline>
          <BannerDesc>
            Compartilhe suas histórias, fotos e vídeos dos tempos da Escola Estadual
            Comendador Zico Tobias e ajude a manter as memórias que aconteceram a prosperar.
          </BannerDesc>
          <ContactBtn to="/causos-dos-alunos" id="banner-contact-btn">
            <FiMail size={16} />
            Entrar em contato
          </ContactBtn>
        </BannerLeft>
        <FeatureList>
          {features.map((f, i) => (
            <FeatureItem key={i} id={`feature-${i + 1}`}>
              <FeatureIcon>{f.icon}</FeatureIcon>
              <FeatureText>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </FeatureText>
            </FeatureItem>
          ))}
        </FeatureList>
      </BannerInner>
    </BannerWrapper>
  )
}
