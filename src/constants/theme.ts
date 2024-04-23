import { createTheme, responsiveFontSizes } from '@mui/material'

import values from './values'

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
    fontFamily: values.fontFamily
  }
})

customTheme = responsiveFontSizes(customTheme)

export default customTheme