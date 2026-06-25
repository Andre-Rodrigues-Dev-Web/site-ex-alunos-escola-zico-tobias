import { Helmet } from 'react-helmet-async'
import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { AboutSchool } from '../../components/AboutSchool/AboutSchool'
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
          content="Escola Estadual Comendador Zico Tobias — 59 anos de educação pública em Luz, Minas Gerais. Fundada em 1966, referência em Ensino Fundamental, Médio e EJA. Conecte-se com ex-alunos e reviva memórias."
        />
        <meta name="keywords" content="ex-alunos, Escola Zico Tobias, Luz Minas Gerais, educação pública, EJA, Ensino Médio, nostalgia, escola estadual, 1966" />
        <meta property="og:title" content="Ex-Alunos Zico Tobias | Conectados pelo Passado, Inspirados pelo Futuro" />
        <meta property="og:description" content="Escola Estadual Comendador Zico Tobias, 59 anos formando cidadãos em Luz, MG. Reencontre amigos e compartilhe memórias." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exalunoszerobias.com.br/" />
      </Helmet>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <AboutSchool />
        <NostalgiaSection />
        <BannerCTA />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
