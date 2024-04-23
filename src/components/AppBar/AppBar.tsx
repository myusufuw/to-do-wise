import { useContext } from 'react'

import Stack from '@mui/material/Stack'
import IconMenu from '@mui/icons-material/Menu'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import IconSearch from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

import { MainContext } from 'src/context/MainContext'

const AppBar = () => {
  const { setIsDrawerExpanded } = useContext(MainContext)

  return (
    <Stack
      p={16}
      direction='row'
      alignItems='center'
      spacing={16}
      className='shadow-md'
    >
      <IconButton onClick={() => setIsDrawerExpanded(state => !state)}>
        <IconMenu/>
      </IconButton>

      <FormControl component='form'>
        <TextField
          name='q'
          type='search'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: <InputAdornment position='start'><IconSearch/></InputAdornment>
          }}
        />
      </FormControl>

      <Typography variant='h6'>
        To Do Wise 📝
      </Typography>
    </Stack>
  )
}

export default AppBar