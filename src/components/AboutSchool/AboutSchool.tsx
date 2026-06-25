import { theme } from '../../styles/GlobalStyles'
import { FiMapPin, FiCalendar, FiUsers, FiBookOpen } from 'react-icons/fi'
import {
  SectionWrapper,
  SectionInner,
  Label,
  Title,
  Paragraph,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  ModalidadeList,
  ModalidadeTag,
} from './AboutSchool.styles'

const FOUNDING_YEAR = 1966
const schoolAge = new Date().getFullYear() - FOUNDING_YEAR

export function AboutSchool() {
  return (
    <SectionWrapper id="sobre-a-escola">
      <SectionInner>
        <div>
          <Label>A Escola</Label>
          <Title>
            {schoolAge} anos formando <span>cidadãos</span> em Luz, MG
          </Title>
          <Paragraph>
            A <strong style={{ color: theme.colors.textLight }}>Escola Estadual Comendador Zico Tobias</strong>,
            situada no coração de Luz, Minas Gerais, foi fundada em {FOUNDING_YEAR} e é referência
            regional em educação pública de qualidade. Ao longo de {schoolAge} anos, consolidou-se
            pela atuação inclusiva, inovadora e pela sólida formação cidadã de seus estudantes.
          </Paragraph>
          <Paragraph>
            A instituição oferece Ensino Fundamental, Ensino Médio e Educação de Jovens e
            Adultos (EJA), atendendo diferentes gerações com compromisso e excelência.
            Mais do que um espaço de aprendizado, o Zico Tobias é um verdadeiro centro de
            transformação social — cultivando valores, promovendo a cidadania e preparando
            alunos para os desafios do futuro.
          </Paragraph>
          <ModalidadeList>
            {['Ensino Fundamental', 'Ensino Médio', 'EJA – Educação de Jovens e Adultos'].map(m => (
              <ModalidadeTag key={m}>
                <FiBookOpen size={15} />
                {m}
              </ModalidadeTag>
            ))}
          </ModalidadeList>
        </div>

        <StatsGrid>
          <StatCard>
            <StatIcon><FiCalendar size={18} /></StatIcon>
            <StatValue>{FOUNDING_YEAR}</StatValue>
            <StatLabel>Ano de fundação da escola</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon><FiCalendar size={18} /></StatIcon>
            <StatValue>{schoolAge}</StatValue>
            <StatLabel>Anos de história e educação</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon><FiMapPin size={18} /></StatIcon>
            <StatValue>Luz</StatValue>
            <StatLabel>No coração de Luz, Minas Gerais</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon><FiUsers size={18} /></StatIcon>
            <StatValue>+2.500</StatValue>
            <StatLabel>Ex-alunos que passaram pela escola</StatLabel>
          </StatCard>
        </StatsGrid>
      </SectionInner>
    </SectionWrapper>
  )
}
