import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Error = () => {
  return (
    <Stack
      width='100%'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={12}
    >
      <Typography variant='h3' color='error'>
        404
      </Typography>
      <Typography variant='h5'>
        Sorry, we couldn't find the page you're looking for 🙈
      </Typography>

      <Link to='/'>
        <Button
          variant='outlined'
          startIcon={<ArrowBackIcon/>}
        >
          Go Back
        </Button>
      </Link>

    </Stack>
  )
}

export default Error