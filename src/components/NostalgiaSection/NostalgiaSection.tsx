import { Card } from '../Card/Card'
import { useApp } from '../../context/AppContext'
import {
  SectionWrapper,
  SectionHeader,
  SectionTitle,
  ViewAllBtn,
  CardsGrid,
} from './NostalgiaSection.styles'

export function NostalgiaSection() {
  const { nostalgiaCards } = useApp()

  return (
    <SectionWrapper id="nostalgia-section">
      <SectionHeader>
        <SectionTitle>Momento nostalgia da semana</SectionTitle>
        <ViewAllBtn href="/videos" id="view-all-nostalgia">
          Ver todos →
        </ViewAllBtn>
      </SectionHeader>
      <CardsGrid>
        {nostalgiaCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            type={card.type}
            thumbnail={card.thumbnail}
          />
        ))}
      </CardsGrid>
    </SectionWrapper>
  )
}
