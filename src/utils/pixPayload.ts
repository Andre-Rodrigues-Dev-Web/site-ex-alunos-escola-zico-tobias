/**
 * Gerador de payload PIX (padrão EMV/BACEN)
 * Referência: https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/II_ManualdePadroesparaIniciacaodoPix.pdf
 */

function crc16(str: string): string {
  let crc = 0xffff
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
    }
  }
  return ((crc & 0xffff) >>> 0).toString(16).toUpperCase().padStart(4, '0')
}

function tlv(id: string, value: string): string {
  const len = value.length.toString().padStart(2, '0')
  return `${id}${len}${value}`
}

export interface PixPayloadOptions {
  pixKey: string
  merchantName: string
  merchantCity: string
  amount?: number
  txid?: string
  description?: string
}

export function buildPixPayload(options: PixPayloadOptions): string {
  const {
    pixKey,
    merchantName,
    merchantCity,
    amount,
    txid = '***',
    description = '',
  } = options

  const name = merchantName.substring(0, 25)
  const city = merchantCity.substring(0, 15)

  // ID 26 — Merchant Account Information
  const pixKeyField = tlv('01', pixKey)
  const descField = description ? tlv('02', description.substring(0, 40)) : ''
  const merchantInfo = tlv('26', tlv('00', 'BR.GOV.BCB.PIX') + pixKeyField + descField)

  // ID 54 — valor (opcional)
  const amountField = amount && amount > 0
    ? tlv('54', amount.toFixed(2))
    : ''

  // ID 62 — Additional Data
  const additionalData = tlv('62', tlv('05', txid.substring(0, 25)))

  const payloadWithoutCrc =
    tlv('00', '01') +           // Payload Format Indicator
    tlv('01', '12') +           // Point of Initiation (12 = dinâmico, 11 = estático)
    merchantInfo +
    tlv('52', '0000') +         // MCC (genérico)
    tlv('53', '986') +          // Currency BRL
    amountField +
    tlv('58', 'BR') +           // Country Code
    tlv('59', name) +           // Merchant Name
    tlv('60', city) +           // Merchant City
    additionalData +
    '6304'                      // CRC placeholder

  return payloadWithoutCrc + crc16(payloadWithoutCrc)
}
