import styled from 'styled-components'
import { theme } from '../../styles/GlobalStyles'

export const TopbarWrapper = styled.div`
  background-color: ${theme.colors.primary};
  padding: 7px 24px;
  position: relative;
  z-index: 10;
`

export const TopbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

export const TopbarItem = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${theme.colors.white};
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${theme.colors.white};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      opacity: 0.8;
    }
  }
`
