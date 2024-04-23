import { Dispatch, SetStateAction } from 'react'


export type TypeSnackbarObject = {
 open: boolean,
 severity: 'success' | 'error',
 title: string,
 message: string
}

export type TypeMainContext = {
 snackbarObject: TypeSnackbarObject,
 setSnackbarObject: Dispatch<SetStateAction<TypeSnackbarObject>>
 showSnackbar: ShowSnackbarFunction,
 isDrawerExpanded: boolean,
 setIsDrawerExpanded: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line no-unused-vars
export type ShowSnackbarFunction = (severity: 'error' | 'success', message: string) => void