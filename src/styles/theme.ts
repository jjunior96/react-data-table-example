export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
    green_100: '#BDECD6',
    green: '#24A66B',
    blue_300: '#2E7DC2',
    yellow_300: '#f8c503',
    white: '#fff',
    gray_100: '#F5F6F8',
    gray_200: '#DFE1E2',
    gray_300: '#E1E2E4',
    gray_350: '#CED4D9',
    gray_400: '#B1B9C0',
    gray_500: '#71717D',
    red_300: '#E63737',
    darkText: '#293e59',
    lightGray: '#F1F2F0',
    mediumGray: '#4e6177',
    black: '#010039'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
