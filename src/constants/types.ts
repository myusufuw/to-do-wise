import { Dispatch, SetStateAction } from 'react'


export type TypeSnackbarObject = {
 open: boolean,
 severity: 'success' | 'error',
 title: string,
 message: string
}

export type TypeTaskList = {
 title: string,
 dueDate: null | Date,
 isImportant: boolean,
 isDone: boolean,
 note: string,
 id: number
}

export type TypeMainContext = {
 snackbarObject: TypeSnackbarObject,
 setSnackbarObject: Dispatch<SetStateAction<TypeSnackbarObject>>
 showSnackbar: ShowSnackbarFunction,
 isDrawerExpanded: boolean,
 setIsDrawerExpanded: Dispatch<SetStateAction<boolean>>,
 taskList: TypeTaskList[],
 setTaskList: Dispatch<SetStateAction<TypeTaskList[]>>
}

// eslint-disable-next-line no-unused-vars
export type ShowSnackbarFunction = (severity: 'error' | 'success', message: string) => void