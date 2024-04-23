import { Dispatch, SetStateAction } from 'react'

import Alert from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'
import AlertTitle from '@mui/material/AlertTitle'

import { TypeSnackbarObject } from 'src/constants/types'

type TypeProps = TypeSnackbarObject & { setToast: Dispatch<SetStateAction<TypeSnackbarObject>> }

const Snackbar = (props: TypeProps) => {
  const {
    open,
    setToast,
    severity,
    title,
    message
  } = props

  const handleToastClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setToast((current: TypeSnackbarObject) => {
      return {
        ...current,
        open: false
      }
    })
  }

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleToastClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert
        elevation={6}
        variant='filled'
        onClose={handleToastClose}
        severity={severity}
        sx={{ color: 'white' }}
      >
        {/* TITLE */}
        {title !== '' &&
        <AlertTitle>
          {title}
        </AlertTitle>}

        {/* MESSAGE */}
        {message !== '' && message}
      </Alert>
    </MuiSnackbar>
  )
}

export default Snackbar