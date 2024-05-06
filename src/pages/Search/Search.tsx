import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import IconArrowBack from '@mui/icons-material/ArrowBack'

import { MainContext } from 'src/context/MainContext'

import TaskCard from 'src/components/TaskCard/TaskCard'

const Search = () => {
  const { taskList } = useContext(MainContext)
  const { query } = useParams()
  const navigate = useNavigate()

  let filteredTaskList

  if(query) filteredTaskList = taskList.filter(task => task.title.includes(query))

  return (
    <Stack p={24}>
      {/* HEADER */}
      <Stack
        direction='row'
        alignItems='center'
        spacing={8}
        mb={24}
      >
        <IconButton onClick={() => navigate('/')}>
          <IconArrowBack/>
        </IconButton>

        <Typography color='primary' variant='h6'>
          Searching for "{query}"
        </Typography>
      </Stack>

      {/* TASK LIST */}
      { filteredTaskList && filteredTaskList?.length > 0 &&
        <Stack
          height='calc(100vh - 140px)'
          overflow='auto'
          width='100%'
        >
          {filteredTaskList?.map((task, index) => (
            <TaskCard key={index} task={task}/>
          ))}
        </Stack>}

      { filteredTaskList && filteredTaskList?.length < 1 &&
        <Stack
          height='calc(100vh - 140px)'
          alignItems='center'
          justifyContent='center'
        >
          <Typography variant='h6'>
            Sorry, it seems that nothing was found for your search.
          </Typography>
        </Stack> }
    </Stack>
  )
}

export default Search