export default {
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '1.6rem'
  },
  font: {
    family: 'Azo sans, sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    base: '#5f2eff',
    baseDark: '#5400db',
    mainBg: '#fafafa',
    white: '#fff',
    text: '#383743',
    textLight: '#6c6b76',
    success: '#00b856',
    line: '#e7e7e9',
    error: '#ff4b2e'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  shadow: {
    medium: '0px 2px 8px 0px rgba(18,18,23,0.08)'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.5s ease-in-out',
    fast: '0.2s ease-in-out'
  }
} as const
