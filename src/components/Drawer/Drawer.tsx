import { useContext } from 'react'

import Stack from '@mui/material/Stack'

import { MainContext } from 'src/context/MainContext'

const Drawer = () => {
  const { isDrawerExpanded } = useContext(MainContext)
  return (
    <Stack
      width={isDrawerExpanded ? 250 : 0}
      className='shadow-lg bg-blue-500 transition-all duration-500'
    >
      {isDrawerExpanded &&
      <Stack>
        Drawer
      </Stack>}
    </Stack>
  )
}

export default Drawer