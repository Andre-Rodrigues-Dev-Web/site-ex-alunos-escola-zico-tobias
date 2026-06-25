export interface NostalgiaDetail {
  id: number
  title: string
  type: 'video' | 'foto'
  date: string
  tags: string[]
  thumbnail: string
  videoUrl: string
  description: string
  longDescription: string
  gallery: string[]
  relatedIds: number[]
}
