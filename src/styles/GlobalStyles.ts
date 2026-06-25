import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#1a7a2e',
    primaryDark: '#145e22',
    primaryLight: '#22a33d',
    primaryGlow: 'rgba(26, 122, 46, 0.1)',
    accent: '#1a7a2e',
    accentYellow: '#b45309',
    dark: '#ffffff',
    darkSurface: '#f4f6f8',
    darkElevated: '#e8ecef',
    text: '#111827',
    textMuted: '#6b7280',
    textLight: '#374151',
    border: '#d1d5db',
    white: '#ffffff',
    red: '#dc2626',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    full: '9999px',
  },
  shadows: {
    card: '0 2px 16px rgba(0, 0, 0, 0.08)',
    glow: '0 0 16px rgba(26, 122, 46, 0.25)',
    glowAccent: '0 0 24px rgba(26, 122, 46, 0.2)',
    header: '0 1px 8px rgba(0,0,0,0.08)',
  },
  transitions: {
    fast: '0.15s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
}

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${theme.transitions.fast};
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.darkSurface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryLight};
  }

  ::selection {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`
