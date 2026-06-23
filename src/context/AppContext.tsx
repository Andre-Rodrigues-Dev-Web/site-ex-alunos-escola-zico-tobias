import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface NostalgiaCard {
  id: number
  title: string
  thumbnail: string
  type: 'video' | 'foto'
  url?: string
}

interface AppContextType {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  toggleMenu: () => void
  isAudioPlaying: boolean
  toggleAudio: () => void
  nostalgiaCards: NostalgiaCard[]
  sponsors: { id: number; name: string; logo: string }[]
  loading: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const mockNostalgiaCards: NostalgiaCard[] = [
  { id: 1, title: 'Vídeo do Baile do Sinal na Escola Zico Tobias', thumbnail: '', type: 'video' },
  { id: 2, title: 'Vídeo festival de talentos 2011', thumbnail: '', type: 'video' },
  { id: 3, title: 'Festa Junina Escola Zico Tobias', thumbnail: '', type: 'foto' },
  { id: 4, title: 'Professores que deixaram saudades', thumbnail: '', type: 'foto' },
  { id: 5, title: 'Festas da escola que foram destaques', thumbnail: '', type: 'foto' },
  { id: 6, title: 'Festas da escola que foram destaques', thumbnail: '', type: 'foto' },
]

const mockSponsors = [
  { id: 1, name: 'Apoiador 1', logo: '' },
  { id: 2, name: 'Apoiador 2', logo: '' },
  { id: 3, name: 'Apoiador 3', logo: '' },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [loading] = useState(false)

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), [])
  const toggleAudio = useCallback(() => setIsAudioPlaying(prev => !prev), [])

  const value: AppContextType = {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    isAudioPlaying,
    toggleAudio,
    nostalgiaCards: mockNostalgiaCards,
    sponsors: mockSponsors,
    loading,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
