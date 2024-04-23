import { useState, ReactNode, createContext } from 'react'

import { initialSnackbarObject } from 'src/constants/values'
import { TypeMainContext, ShowSnackbarFunction } from 'src/constants/types'

const MainContext = createContext<TypeMainContext>({
  snackbarObject: initialSnackbarObject,
  setSnackbarObject: () => {},
  showSnackbar: () => {}
})

const MainContextProvider = (props: {children: ReactNode}) => {
  const [ snackbarObject, setSnackbarObject ] = useState(initialSnackbarObject)

  const showSnackbar: ShowSnackbarFunction = (severity, message) => {
    setSnackbarObject({
      ...snackbarObject,
      open: true,
      severity,
      message
    })
  }

  return (
    <MainContext.Provider
      value={{
        // SNACKBAR
        snackbarObject, setSnackbarObject,
        showSnackbar
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }