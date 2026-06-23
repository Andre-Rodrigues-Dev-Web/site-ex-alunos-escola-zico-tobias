import { Helmet } from 'react-helmet-async'
import { PageLayout } from '../../components/PageLayout/PageLayout'

export default function Videos() {
  return (
    <>
      <Helmet>
        <title>Vídeos | Ex-Alunos Zico Tobias</title>
        <meta name="description" content="Assista aos vídeos históricos da Escola Estadual Comendador Zico Tobias, festas, formaturas e muito mais." />
      </Helmet>
      <PageLayout
        title="Vídeos"
        subtitle="Assista aos melhores vídeos das festas, eventos e momentos históricos da nossa escola."
      />
    </>
  )
}
