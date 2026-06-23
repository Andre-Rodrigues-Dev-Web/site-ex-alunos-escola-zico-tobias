import { Helmet } from 'react-helmet-async'
import { PageLayout } from '../../components/PageLayout/PageLayout'

export default function Destaques() {
  return (
    <>
      <Helmet>
        <title>Destaques | Ex-Alunos Zico Tobias</title>
        <meta name="description" content="Os maiores destaques e eventos que marcaram a história da Escola Zico Tobias." />
      </Helmet>
      <PageLayout
        title="Destaques"
        subtitle="Os maiores eventos e momentos que ficaram na memória de todos os ex-alunos."
      />
    </>
  )
}
