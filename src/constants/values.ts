import { TypeSnackbarObject } from './types'

export const fontFamily = [ 'Open Sans', 'sans-serif' ].join(',')

export const initialSnackbarObject:TypeSnackbarObject = {
  open: false,
  severity: 'success',
  title: '',
  message: ''
}