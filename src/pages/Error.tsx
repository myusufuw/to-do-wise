import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import ErrorImage from 'src/assets/404.png'

const Error = () => {
  return (
    <Stack
      width='100%'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={12}
    >
      <Stack
        component='img'
        src={ErrorImage}
        alt='404-image'
        width={400}
      />
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