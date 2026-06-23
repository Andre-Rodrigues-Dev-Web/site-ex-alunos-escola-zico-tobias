import styled from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { Card } from '../Card/Card'
import { useApp } from '../../context/AppContext'

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 20px;
  flex-wrap: wrap;
`

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 48px;
    height: 4px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
    margin-top: 10px;
  }
`

const ViewAllBtn = styled.a`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: all ${theme.transitions.fast};

  &:hover {
    border-bottom-color: ${theme.colors.accent};
    gap: 10px;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

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
