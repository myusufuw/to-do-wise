import { TypeSnackbarObject } from './types'

const values = {
  // FONT FAMILY
  fontFamily: [ 'Open Sans', 'sans-serif' ].join(',')
}

export const initialSnackbarObject:TypeSnackbarObject = {
  open: false,
  severity: 'success',
  title: '',
  message: ''
}

export default values