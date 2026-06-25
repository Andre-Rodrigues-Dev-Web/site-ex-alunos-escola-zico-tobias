import { useApp } from '../../context/AppContext'
import { FiBriefcase } from 'react-icons/fi'
import {
  SponsorsWrapper,
  SectionTitle,
  SponsorsGrid,
  SponsorCard,
  PlaceholderContent,
} from './Sponsors.styles'

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
