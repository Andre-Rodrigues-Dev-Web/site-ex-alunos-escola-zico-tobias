import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { QRCodeSVG } from 'qrcode.react'
import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { buildPixPayload } from '../../utils/pixPayload'
import {
  FiHeart, FiServer, FiGlobe, FiArchive,
  FiUser, FiPhone, FiMail, FiCheckCircle,
  FiAlertCircle, FiSend,
} from 'react-icons/fi'
import type { DonorForm, Status } from './ApoieProjeto.types'
import {
  PageHero,
  HeroLabel,
  HeroTitle,
  HeroSub,
  PageBody,
  CopySection,
  CopyText,
  SectionLabel,
  SectionTitle,
  Paragraph,
  CostCards,
  CostCard,
  CostIcon,
  CostInfo,
  PixSection,
  QrWrapper,
  QrBox,
  QrLabel,
  PixKey,
  PixInfo,
  PixSteps,
  PixStep,
  FormSection,
  FormCard,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitBtn,
  SpinIcon,
  FeedbackBox,
} from './ApoieProjeto.styles'
import { theme } from '../../styles/GlobalStyles'

// ─── Constantes ──────────────────────────────────────────────────────────────
const PIX_KEY = 'xor2018@gmail.com'
const WHATSAPP_NUMBER = '5537999262829'

const pixPayload = buildPixPayload({
  pixKey: PIX_KEY,
  merchantName: 'Ex-Alunos Zico Tobias',
  merchantCity: 'Luz',
})

// ─── Component ────────────────────────────────────────────────────────────────
export default function ApoieProjeto() {
  const [form, setForm] = useState<DonorForm>({
    nome: '', telefone: '', email: '', aparecerParceiros: 'sim',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nome || !form.telefone || !form.email) return
    setStatus('loading')

    try {
      // 1. Gera registro JSON e faz download
      const registro = {
        ...form,
        dataCadastro: new Date().toISOString(),
        pixKey: PIX_KEY,
      }
      const blob = new Blob([JSON.stringify(registro, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `doador_${form.nome.replace(/\s+/g, '_')}_${Date.now()}.json`
      a.click()
      URL.revokeObjectURL(url)

      // 2. Monta mensagem de agradecimento + pedido de foto via WhatsApp
      const telLimpo = form.telefone.replace(/\D/g, '')
      const telWpp = telLimpo.startsWith('55') ? telLimpo : `55${telLimpo}`

      const msgAgradecimento = encodeURIComponent(
        `Olá, ${form.nome}! 🎉\n\nMuito obrigado pelo seu apoio ao projeto *Ex-Alunos Zico Tobias*! ` +
        `Sua contribuição ajuda a manter viva a história da nossa querida escola.\n\n` +
        `Para aparecer na nossa seção de parceiros${form.aparecerParceiros === 'sim' ? '' : ' (caso mude de ideia)'}, ` +
        `envie sua foto ou logotipo para este número (37 99926-2829).\n\nCom carinho, equipe Ex-Alunos Zico Tobias 💚`
      )

      // Abre WhatsApp do doador com mensagem de agradecimento
      if (telLimpo.length >= 10) {
        window.open(`https://wa.me/${telWpp}?text=${msgAgradecimento}`, '_blank')
      }

      // 3. Abre WhatsApp admin pedindo foto
      if (form.aparecerParceiros === 'sim') {
        const msgAdmin = encodeURIComponent(
          `📋 *Novo apoiador registrado!*\n\nNome: ${form.nome}\nTel: ${form.telefone}\nEmail: ${form.email}\nParceiro: ${form.aparecerParceiros}\n\n` +
          `Por favor, entre em contato pedindo a foto/logo para os parceiros.`
        )
        setTimeout(() => {
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msgAdmin}`, '_blank')
        }, 800)
      }

      setStatus('success')
      setForm({ nome: '', telefone: '', email: '', aparecerParceiros: 'sim' })
    } catch {
      setStatus('error')
    }
  }

  const costs = [
    { icon: <FiGlobe size={17} />,   title: 'Domínio .com.br',   desc: 'Registro anual do domínio oficial do projeto no Brasil.' },
    { icon: <FiServer size={17} />,  title: 'Hospedagem',        desc: 'Servidor para armazenar fotos, vídeos e arquivos históricos.' },
    { icon: <FiArchive size={17} />, title: 'Armazenamento',     desc: 'Espaço em nuvem para preservar o acervo de memórias digitais.' },
  ]

  return (
    <>
      <Helmet>
        <title>Apoie o Projeto | Ex-Alunos Zico Tobias</title>
        <meta name="description" content="Apoie o projeto Ex-Alunos Zico Tobias e ajude a manter viva a história da Escola Estadual Comendador Zico Tobias de Luz, MG." />
      </Helmet>
      <Topbar />
      <Header />
      <main>
        <PageHero>
          <HeroLabel><FiHeart size={14} /> Apoie o Projeto</HeroLabel>
          <HeroTitle>Ajude a manter essa <span>história viva</span></HeroTitle>
          <HeroSub>
            A memória da Escola Zico Tobias é patrimônio de todos. Sua contribuição
            mantém esse projeto no ar e preserva décadas de história para as próximas gerações.
          </HeroSub>
        </PageHero>

        <PageBody>
          {/* ── Copy + Custos ── */}
          <CopySection>
            <CopyText>
              <SectionLabel>Por que apoiar?</SectionLabel>
              <SectionTitle>
                Cada memória compartilhada <span>merece ser preservada</span>
              </SectionTitle>
              <Paragraph>
                O site Ex-Alunos Zico Tobias nasceu do desejo de reunir, em um só lugar, as
                histórias, fotos e vídeos que marcaram a vida de quem passou pelos corredores
                da Escola Estadual Comendador Zico Tobias, em Luz (MG). São décadas de
                amizades, professores inesquecíveis, festas juninas, formaturas e momentos
                que nunca devem ser esquecidos.
              </Paragraph>
              <Paragraph>
                Manter esse espaço online tem um custo real. Para que o projeto continue
                funcionando, precisamos cobrir despesas com domínio, hospedagem e armazenamento
                de arquivos. Qualquer valor é bem-vindo e faz toda a diferença!
              </Paragraph>
              <Paragraph>
                Seja você um ex-aluno querendo preservar sua turma, um professor que fez
                história ou um apoiador que acredita na educação pública — <strong style={{ color: theme.colors.accent }}>
                sua contribuição é um ato de amor pela escola</strong>.
              </Paragraph>
            </CopyText>

            <CostCards>
              <SectionLabel>O que mantemos com seu apoio</SectionLabel>
              {costs.map(c => (
                <CostCard key={c.title}>
                  <CostIcon>{c.icon}</CostIcon>
                  <CostInfo>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </CostInfo>
                </CostCard>
              ))}
            </CostCards>
          </CopySection>

          {/* ── PIX ── */}
          <PixSection id="pix-section">
            <QrWrapper>
              <QrBox>
                <QRCodeSVG
                  value={pixPayload}
                  size={180}
                  level="M"
                  includeMargin={false}
                />
              </QrBox>
              <QrLabel>Aponte a câmera do seu banco para pagar via PIX</QrLabel>
              <PixKey>
                <FiMail size={13} />
                {PIX_KEY}
              </PixKey>
            </QrWrapper>

            <PixInfo>
              <SectionLabel>Como fazer o PIX</SectionLabel>
              <SectionTitle>
                Contribua com <span>qualquer valor</span>
              </SectionTitle>
              <PixSteps>
                <PixStep>Abra o aplicativo do seu banco e acesse a seção <strong>PIX</strong>.</PixStep>
                <PixStep>Escolha <strong>"Pagar com QR Code"</strong> e aponte para o código ao lado.</PixStep>
                <PixStep>Ou copie a chave PIX: <strong>{PIX_KEY}</strong> e cole em <strong>"PIX copia e cola"</strong>.</PixStep>
                <PixStep>Confirme o valor que desejar e finalize o pagamento.</PixStep>
                <PixStep>Após pagar, preencha o formulário abaixo para se registrar como apoiador! 💚</PixStep>
              </PixSteps>
            </PixInfo>
          </PixSection>

          {/* ── Formulário ── */}
          <FormSection id="form-apoio">
            <SectionLabel>Registro de apoiador</SectionLabel>
            <SectionTitle>
              Se registre e <span>apareça nos parceiros</span>
            </SectionTitle>
            <Paragraph style={{ marginBottom: 32 }}>
              Após realizar o PIX, preencha seus dados abaixo. Você receberá uma mensagem
              de agradecimento via WhatsApp e, se quiser, sua foto ou logo aparecerá na seção
              de apoiadores do site!
            </Paragraph>

            <FormCard>
              <form onSubmit={handleSubmit} noValidate>
                <FormGrid>
                  <FormGroup>
                    <FormLabel htmlFor="apoio-nome">
                      <FiUser size={13} /> Nome completo *
                    </FormLabel>
                    <FormInput
                      id="apoio-nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="apoio-telefone">
                      <FiPhone size={13} /> WhatsApp / Telefone *
                    </FormLabel>
                    <FormInput
                      id="apoio-telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(37) 9 9999-9999"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="apoio-email">
                      <FiMail size={13} /> E-mail *
                    </FormLabel>
                    <FormInput
                      id="apoio-email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="apoio-parceiro">
                      Aparecer na seção de parceiros?
                    </FormLabel>
                    <FormSelect
                      id="apoio-parceiro"
                      name="aparecerParceiros"
                      value={form.aparecerParceiros}
                      onChange={handleChange}
                    >
                      <option value="sim">✅ Sim, quero aparecer como parceiro</option>
                      <option value="nao">Não, prefiro manter anonimato</option>
                    </FormSelect>
                  </FormGroup>
                </FormGrid>

                <SubmitBtn
                  type="submit"
                  id="submit-apoio"
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? <><SpinIcon size={18} /> Registrando…</>
                    : <><FiSend size={16} /> Registrar meu apoio</>
                  }
                </SubmitBtn>
              </form>

              {status === 'success' && (
                <FeedbackBox $type="success">
                  <FiCheckCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Registro concluído! 💚</strong><br />
                    Seus dados foram salvos. Uma mensagem de agradecimento foi enviada para o
                    seu WhatsApp. Se quiser aparecer nos parceiros, envie sua foto/logo para
                    nosso WhatsApp: <strong>(37) 99926-2829</strong>. Muito obrigado pelo apoio!
                  </div>
                </FeedbackBox>
              )}

              {status === 'error' && (
                <FeedbackBox $type="error">
                  <FiAlertCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    Ocorreu um erro ao registrar. Verifique os dados e tente novamente.
                  </div>
                </FeedbackBox>
              )}
            </FormCard>
          </FormSection>
        </PageBody>
      </main>
      <Footer />
    </>
  )
}
