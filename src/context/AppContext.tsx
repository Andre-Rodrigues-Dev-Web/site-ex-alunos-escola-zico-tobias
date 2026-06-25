import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { AppContextType } from './AppContext.types'
import { mockNostalgiaCards, mockSponsors } from './AppContext.mocks'

const AppContext = createContext<AppContextType | undefined>(undefined)

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
