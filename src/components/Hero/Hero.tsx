import styled from 'styled-components'
import bannerHero from '../../assets/banner-hero.png'

const HeroWrapper = styled.section`
  width: 100%;
  display: block;
  line-height: 0;
`

const HeroImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`

export function Hero() {
  return (
    <HeroWrapper>
      <HeroImg src={bannerHero} alt="Banner Escola Zico Tobias" />
    </HeroWrapper>
  )
}
