import { FiPlay, FiImage, FiExternalLink } from 'react-icons/fi'
import type { CardProps } from './Card.types'
import {
  CardWrapper,
  CardThumbnail,
  ThumbnailPlaceholder,
  CardOverlay,
  PlayIcon,
  TypeBadge,
  CardBody,
  CardTitle,
  CardButton,
} from './Card.styles'

export function Card({ id, title, type, thumbnail }: CardProps) {
  return (
    <CardWrapper to={`/nostalgia/${id}`} id={`card-${id}`}>
      <CardThumbnail className="card-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={title} />
        ) : (
          <ThumbnailPlaceholder>
            {type === 'video' ? <FiPlay size={32} /> : <FiImage size={32} />}
          </ThumbnailPlaceholder>
        )}
        <CardOverlay className="overlay">
          <PlayIcon className="card-play-icon">
            {type === 'video' ? <FiPlay size={18} /> : <FiExternalLink size={18} />}
          </PlayIcon>
        </CardOverlay>
        <TypeBadge>{type}</TypeBadge>
      </CardThumbnail>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardButton id={`card-btn-${id}`}>Confira</CardButton>
      </CardBody>
    </CardWrapper>
  )
}
