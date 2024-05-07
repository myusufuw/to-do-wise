import { FormEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import IconMenu from '@mui/icons-material/Menu'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import IconSearch from '@mui/icons-material/Search'
import IconMenuOpen from '@mui/icons-material/MenuOpen'
import InputAdornment from '@mui/material/InputAdornment'

import { MainContext } from 'src/context/MainContext'

const AppBar = () => {
  const { isDrawerExpanded, setIsDrawerExpanded } = useContext(MainContext)
  const navigate = useNavigate()

  const handleSearchTaskList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchElement = document.getElementById('searchElement') as HTMLInputElement | null
    if (searchElement) navigate(`/search?q=${searchElement.value}`)
  }

  return (
    <Stack
      p={16}
      direction='row'
      alignItems='center'
      spacing={16}
      className='shadow-md'
    >
      <IconButton onClick={() => setIsDrawerExpanded(state => !state)}>
        { isDrawerExpanded ? <IconMenuOpen/> : <IconMenu/> }
      </IconButton>

      <FormControl
        component='form'
        onSubmit={handleSearchTaskList}
      >
        <TextField
          id='searchElement'
          type='search'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconSearch/>
              </InputAdornment>)
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