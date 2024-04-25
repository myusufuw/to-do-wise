import { useState, ReactNode, useEffect, createContext } from 'react'

import { initialSnackbarObject } from 'src/constants/values'
import { TypeMainContext, ShowSnackbarFunction } from 'src/constants/types'
import { setTaskListToLocalStorage, readTaskListFromLocalStorage } from 'src/utilities/localStorage'

const MainContext = createContext<TypeMainContext>({
  snackbarObject: initialSnackbarObject,
  setSnackbarObject: () => {},
  showSnackbar: () => {},
  isDrawerExpanded: false,
  setIsDrawerExpanded: () => {},
  taskList: [],
  setTaskList: () => []
})

const MainContextProvider = (props: {children: ReactNode}) => {
  const [ snackbarObject, setSnackbarObject ] = useState(initialSnackbarObject)
  const [ isDrawerExpanded, setIsDrawerExpanded ] = useState(true)
  const [ taskList, setTaskList ] = useState(readTaskListFromLocalStorage)

  const showSnackbar: ShowSnackbarFunction = (severity, message) => {
    setSnackbarObject({
      ...snackbarObject,
      open: true,
      severity,
      message
    })
  }

  useEffect(() => {
    setTaskListToLocalStorage(taskList)
  }, [ taskList ])

  return (
    <MainContext.Provider
      value={{
        // SNACKBAR
        snackbarObject, setSnackbarObject, showSnackbar,
        // DRAWER
        isDrawerExpanded, setIsDrawerExpanded,
        // TASK LIST
        taskList, setTaskList
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }