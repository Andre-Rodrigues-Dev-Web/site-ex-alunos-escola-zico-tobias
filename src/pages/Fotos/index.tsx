import { Helmet } from 'react-helmet-async'
import { PageLayout } from '../../components/PageLayout/PageLayout'

export default function Fotos() {
  return (
    <>
      <Helmet>
        <title>Fotos | Ex-Alunos Zico Tobias</title>
        <meta name="description" content="Galeria de fotos históricas da Escola Estadual Comendador Zico Tobias." />
      </Helmet>
      <PageLayout
        title="Galeria de Fotos"
        subtitle="Reviva os momentos mais inesquecíveis através das fotos históricas da nossa escola."
      />
    </>
  )
}
