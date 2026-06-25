import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import type { PageLayoutProps } from './PageLayout.types'
import {
  PageHero,
  PageTitle,
  PageSubtitle,
  PageContent,
  ComingSoon,
} from './PageLayout.styles'

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <PageHero>
          <PageTitle>{title}</PageTitle>
          <PageSubtitle>{subtitle}</PageSubtitle>
        </PageHero>
        <PageContent>
          {children ?? (
            <ComingSoon>
              <div className="icon">🏫</div>
              <h3>Em breve por aqui!</h3>
              <p>Esta seção está sendo preparada com muito carinho. Volte em breve!</p>
            </ComingSoon>
          )}
        </PageContent>
      </main>
      <Footer />
    </>
  )
}
