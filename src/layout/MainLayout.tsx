import { ReactNode } from 'react'

import Stack from '@mui/material/Stack'

import AppBar from 'src/components/AppBar/AppBar'
import Drawer from 'src/components/Drawer/Drawer'

const MainLayout = (props: {children: ReactNode}) => {
  const { children } = props

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
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MainLayout