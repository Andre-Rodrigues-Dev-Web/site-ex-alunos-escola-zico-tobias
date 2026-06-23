import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#1a7a2e',
    primaryDark: '#145e22',
    primaryLight: '#22a33d',
    primaryGlow: 'rgba(26, 122, 46, 0.15)',
    accent: '#4cde72',
    accentYellow: '#f5c842',
    dark: '#0d1117',
    darkSurface: '#161b22',
    darkElevated: '#21262d',
    text: '#e6edf3',
    textMuted: '#8b949e',
    textLight: '#c9d1d9',
    border: '#30363d',
    white: '#ffffff',
    red: '#da3633',
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
    card: '0 4px 24px rgba(0, 0, 0, 0.4)',
    glow: '0 0 20px rgba(26, 122, 46, 0.4)',
    glowAccent: '0 0 30px rgba(76, 222, 114, 0.3)',
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
    background: ${theme.colors.dark};
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
