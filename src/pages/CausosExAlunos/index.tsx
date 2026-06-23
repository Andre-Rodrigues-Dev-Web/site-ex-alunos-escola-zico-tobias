import { Helmet } from 'react-helmet-async'
import { PageLayout } from '../../components/PageLayout/PageLayout'

export default function CausosExAlunos() {
  return (
    <>
      <Helmet>
        <title>Causos dos Alunos | Ex-Alunos Zico Tobias</title>
        <meta name="description" content="Leia e compartilhe os causos, histórias engraçadas e memórias dos ex-alunos da Escola Zico Tobias." />
      </Helmet>
      <PageLayout
        title="Causos dos Alunos"
        subtitle="As histórias mais engraçadas, emocionantes e inesquecíveis contadas pelos próprios ex-alunos."
      />
    </>
  )
}
