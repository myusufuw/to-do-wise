import { createTheme, responsiveFontSizes } from '@mui/material'

import { fontFamily } from './values'

let customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  },
  spacing: 1,
  typography: {
    fontFamily: fontFamily
  }
})

customTheme = responsiveFontSizes(customTheme)

export default customTheme