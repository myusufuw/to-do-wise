import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { MainContext } from 'src/context/MainContext'

import AppBar from 'src/components/AppBar'
import Drawer from 'src/components/Drawer'
import Snackbar from 'src/components/SnackBar'

const MainLayout = () => {
  const { snackbarObject, setSnackbarObject } = useContext(MainContext)

  return (
    <Stack
      direction='row'
      component='main'
      height='100vh'
      width='100%'
    >
      {/* DRAWER */}
      <Drawer/>

      {/* CONTENTS */}
      <Stack flex={1}>
        {/* APP BAR */}
        <AppBar/>

        <Stack>
          <Outlet/>
        </Stack>
      </Stack>

      <Snackbar
        open={snackbarObject.open}
        setToast={setSnackbarObject}
        severity={snackbarObject.severity}
        title={snackbarObject.title}
        message={snackbarObject.message}
      />
    </Stack>
  )
}

export default MainLayout