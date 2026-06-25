export interface DonorForm {
  nome: string
  telefone: string
  email: string
  aparecerParceiros: 'sim' | 'nao'
}

export type Status = 'idle' | 'loading' | 'success' | 'error'
