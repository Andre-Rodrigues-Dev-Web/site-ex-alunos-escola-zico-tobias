import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { Topbar } from '../../components/Topbar/Topbar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import {
  FiArrowLeft, FiPlay, FiImage, FiTag,
  FiCalendar, FiShare2, FiMessageCircle,
} from 'react-icons/fi'
import type { NostalgiaDetail } from './NostalgiaDetalhe.types'
import {
  PageWrapper,
  BackBtn,
  TypeBadge,
  Title,
  Meta,
  MetaItem,
  TagList,
  Tag,
  MediaBox,
  MediaPlaceholder,
  VideoEmbed,
  Description,
  LongDesc,
  Divider,
  ShareRow,
  ShareLabel,
  ShareBtn,
  ContributeBox,
  ContributeIcon,
  CenterBox,
  Spinner,
} from './NostalgiaDetalhe.styles'

export default function NostalgiaDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [data, setData] = useState<NostalgiaDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios
      .get<NostalgiaDetail>(`/data/nostalgia/${id}.json`)
      .then(res => { setData(res.data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [id])

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho fotos/vídeos para contribuir com a memória: "${data?.title}". Posso enviar?`
  )

  const shareUrl = encodeURIComponent(window.location.href)
  const shareText = encodeURIComponent(`Confira essa memória do Zico Tobias: "${data?.title}"`)

  if (loading) return (
    <>
      <Topbar /><Header />
      <CenterBox><Spinner size={32} /><span>Carregando memória…</span></CenterBox>
      <Footer />
    </>
  )

  if (error || !data) return (
    <>
      <Topbar /><Header />
      <CenterBox>
        <span style={{ fontSize: '2.5rem' }}>😕</span>
        <strong>Memória não encontrada</strong>
        <p>Este conteúdo pode ter sido removido ou o endereço está incorreto.</p>
        <ShareBtn as="button" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <FiArrowLeft size={14} /> Voltar ao início
        </ShareBtn>
      </CenterBox>
      <Footer />
    </>
  )

  return (
    <>
      <Helmet>
        <title>{data.title} | Ex-Alunos Zico Tobias</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <Topbar />
      <Header />
      <main>
        <PageWrapper>
          <BackBtn to="/#nostalgia-section" id="back-to-nostalgia">
            <FiArrowLeft size={16} /> Voltar às memórias
          </BackBtn>

          <TypeBadge $type={data.type}>
            {data.type === 'video' ? <FiPlay size={11} /> : <FiImage size={11} />}
            {data.type}
          </TypeBadge>

          <Title>{data.title}</Title>

          <Meta>
            <MetaItem><FiCalendar size={14} /> {data.date}</MetaItem>
            <MetaItem><FiTag size={14} /> {data.tags.length} tags</MetaItem>
          </Meta>

          <TagList>
            {data.tags.map(tag => <Tag key={tag}>#{tag}</Tag>)}
          </TagList>

          {/* Mídia principal */}
          <MediaBox>
            {data.videoUrl ? (
              <VideoEmbed
                src={data.videoUrl}
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : data.thumbnail ? (
              <img src={data.thumbnail} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <MediaPlaceholder>
                {data.type === 'video'
                  ? <FiPlay size={48} />
                  : <FiImage size={48} />}
                <span>
                  {data.type === 'video'
                    ? 'Vídeo em breve — tem esse vídeo? Nos envie!'
                    : 'Foto em breve — tem essa foto? Nos envie!'}
                </span>
              </MediaPlaceholder>
            )}
          </MediaBox>

          <Description>{data.description}</Description>
          <LongDesc>{data.longDescription}</LongDesc>

          <Divider />

          <ShareRow>
            <ShareLabel><FiShare2 size={14} /> Compartilhar:</ShareLabel>
            <ShareBtn
              href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              id="share-whatsapp"
            >
              WhatsApp
            </ShareBtn>
            <ShareBtn
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              id="share-facebook"
              style={{ background: '#1877f2' }}
            >
              Facebook
            </ShareBtn>
          </ShareRow>

          <ContributeBox>
            <ContributeIcon><FiMessageCircle size={20} /></ContributeIcon>
            <div>
              <h4>Tem fotos ou vídeos deste momento?</h4>
              <p>
                Sua contribuição é preciosa! Envie suas fotos e vídeos para que possamos
                enriquecer esse acervo histórico e preservar essa memória para sempre.
              </p>
              <ShareBtn
                href={`https://wa.me/5537999262829?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contribute-whatsapp"
              >
                <FiMessageCircle size={14} /> Enviar via WhatsApp
              </ShareBtn>
            </div>
          </ContributeBox>
        </PageWrapper>
      </main>
      <Footer />
    </>
  )
}
