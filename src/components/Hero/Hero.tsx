import bannerHero from '../../assets/banner-hero.png'
import { HeroWrapper, HeroImg } from './Hero.styles'

export function Hero() {
  return (
    <HeroWrapper>
      <HeroImg src={bannerHero} alt="Banner Escola Zico Tobias" />
    </HeroWrapper>
  )
}
