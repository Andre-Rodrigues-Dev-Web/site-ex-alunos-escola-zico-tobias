import { Helmet } from 'react-helmet-async'
import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { NostalgiaSection } from '../../components/NostalgiaSection/NostalgiaSection'
import { BannerCTA } from '../../components/BannerCTA/BannerCTA'
import { Sponsors } from '../../components/Sponsors/Sponsors'
import { Footer } from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ex-Alunos Zico Tobias | Conectados pelo Passado, Inspirados pelo Futuro</title>
        <meta
          name="description"
          content="O espaço oficial dos ex-alunos da Escola Estadual Comendador Zico Tobias. Reencontre amigos, compartilhe histórias e fortaleça essa rede que transforma gerações."
        />
        <meta name="keywords" content="ex-alunos, Escola Zico Tobias, nostalgia, escola estadual, Luz SP" />
        <meta property="og:title" content="Ex-Alunos Zico Tobias | Conectados pelo Passado, Inspirados pelo Futuro" />
        <meta property="og:description" content="O espaço oficial dos ex-alunos da Escola Estadual Comendador Zico Tobias." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exalunoszerobias.com.br/" />
      </Helmet>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <NostalgiaSection />
        <BannerCTA />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
