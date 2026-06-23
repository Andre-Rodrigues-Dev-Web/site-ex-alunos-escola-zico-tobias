import styled from 'styled-components'
import { theme } from '../../styles/GlobalStyles'
import { useApp } from '../../context/AppContext'
import { FiBriefcase } from 'react-icons/fi'

const SponsorsWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 72px;
`

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 36px;
  letter-spacing: -0.01em;

  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
    margin-top: 8px;
  }
`

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const SponsorCard = styled.div`
  background: ${theme.colors.darkSurface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  aspect-ratio: 5/2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.border};
  transition: all ${theme.transitions.medium};

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.textMuted};
    background: ${theme.colors.darkElevated};
    transform: translateY(-3px);
  }
`

const PlaceholderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  span {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
  }
`

export function Sponsors() {
  const { sponsors } = useApp()

  return (
    <SponsorsWrapper id="sponsors-section">
      <SectionTitle>Apoiadores do projeto</SectionTitle>
      <SponsorsGrid>
        {sponsors.map(sponsor => (
          <SponsorCard key={sponsor.id} id={`sponsor-${sponsor.id}`}>
            {sponsor.logo ? (
              <img src={sponsor.logo} alt={sponsor.name} />
            ) : (
              <PlaceholderContent>
                <FiBriefcase size={28} />
                <span>{sponsor.name}</span>
              </PlaceholderContent>
            )}
          </SponsorCard>
        ))}
      </SponsorsGrid>
    </SponsorsWrapper>
  )
}
