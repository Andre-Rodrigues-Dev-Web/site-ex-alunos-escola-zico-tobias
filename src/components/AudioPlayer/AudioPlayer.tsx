import { useState, useRef } from 'react'
import { theme } from '../../styles/GlobalStyles'
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMusic } from 'react-icons/fi'
import {
  PlayerWrapper,
  PlayButton,
  VisualBars,
  TrackInfo,
  MuteButton,
} from './AudioPlayer.styles'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(prev => !prev)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(prev => !prev)
  }

  return (
    <PlayerWrapper>
      <FiMusic size={14} color={theme.colors.accent} />
      <TrackInfo>
        <span>Ouça as músicas</span>
        <span>que estiveram na hora do recreio</span>
      </TrackInfo>
      <VisualBars $playing={isPlaying}>
        <span /><span /><span /><span />
      </VisualBars>
      <PlayButton onClick={togglePlay} id="audio-play-btn" aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}>
        {isPlaying ? <FiPause size={12} /> : <FiPlay size={12} />}
      </PlayButton>
      <MuteButton onClick={toggleMute} id="audio-mute-btn" aria-label={isMuted ? 'Ativar som' : 'Silenciar'}>
        {isMuted ? <FiVolumeX size={14} /> : <FiVolume2 size={14} />}
      </MuteButton>
      <audio ref={audioRef} loop>
        <source src="/nostalgia.mp3" type="audio/mpeg" />
      </audio>
    </PlayerWrapper>
  )
}
