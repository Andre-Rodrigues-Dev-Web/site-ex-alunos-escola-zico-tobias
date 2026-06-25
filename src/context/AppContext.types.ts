export interface NostalgiaCard {
  id: number
  title: string
  thumbnail: string
  type: 'video' | 'foto'
  url?: string
}

export interface Sponsor {
  id: number
  name: string
  logo: string
}

export interface AppContextType {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  toggleMenu: () => void
  isAudioPlaying: boolean
  toggleAudio: () => void
  nostalgiaCards: NostalgiaCard[]
  sponsors: Sponsor[]
  loading: boolean
}
