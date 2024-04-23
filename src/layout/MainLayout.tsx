import { ReactNode } from 'react'

import Stack from '@mui/material/Stack'

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
      <Stack
        width={250}
        className='bg-orange-200'
      >
        Drawer
      </Stack>

      {/* CONTENTS */}
      <Stack flex={1}>
        {/* APP BAR */}
        <Stack height={48} className='bg-green-200'>
          App Bar
        </Stack>

        <Stack>
          {children}
        </Stack>
      </Stack>

    </Stack>
  )
}

export default MainLayout