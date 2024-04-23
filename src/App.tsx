import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import routes from './routes/routes'
import { MainContext } from './context/MainContext'
import Snackbar from './components/SnackBar/SnackBar'

function App() {
  const { snackbarObject, setSnackbarObject } = useContext(MainContext)

  return (
    <>
      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<item.element/>}
          />
        ))}
      </Routes>

      <Snackbar
        open={snackbarObject.open}
        setToast={setSnackbarObject}
        severity={snackbarObject.severity}
        title={snackbarObject.title}
        message={snackbarObject.message}
      />
    </>
  )
}

export default App
