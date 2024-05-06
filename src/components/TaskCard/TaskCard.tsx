import { useState, useContext, SyntheticEvent } from 'react'

import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import IconStar from '@mui/icons-material/Star'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import IconStarBorder from '@mui/icons-material/StarBorder'
import IconCheckCircle from '@mui/icons-material/CheckCircle'
import IconRadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'

import { TypeTaskList } from 'src/constants/types'
import { MainContext } from 'src/context/MainContext'

import DetailTask from '../DetailTask/DetailTask'

type TypeProps = {
  task: TypeTaskList
}

const TaskCard = (props: TypeProps) => {
  const { task } = props
  const { taskList, setTaskList } = useContext(MainContext)

  const [ isDrawerExpanded, setIsDrawerExpanded ] = useState(false)
  const [ taskId, setTaskId ] = useState('')

  const handleCompleteTaskButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    const updatedTaskList = taskList.map((currentTask) => {
      if(currentTask.id === task.id) currentTask.isDone = !currentTask.isDone
      return currentTask
    })
    setTaskList(updatedTaskList)
  }

  const handleMarkAsImportantButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    const updatedTaskList = taskList.map((currentTask) => {
      if(currentTask.id === task.id) currentTask.isImportant = !currentTask.isImportant
      return currentTask
    })
    setTaskList(updatedTaskList)
  }

  const handleTaskCardClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    setIsDrawerExpanded(true)
    setTaskId(task.id)
  }

  return (
    <>
      <Stack
        className='rounded border-gray-200 shadow cursor-pointer'
        px={16}
        py={12}
        mb={12}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        border='1px solid'
        onClick={handleTaskCardClick}
      >
        <Stack
          direction='row'
          alignItems='center'
          spacing={8}
        >
          <IconButton
            size='small'
            onClick={handleCompleteTaskButtonClick}
          >
            { task.isDone ?
              <IconCheckCircle color='primary'/> :
              <IconRadioButtonUnchecked color='primary'/> }
          </IconButton>
          <Typography className={`${task.isDone ? 'line-through' : 'no-underline'}`}>
            {task.title}
          </Typography>
        </Stack>

        <IconButton
          size='small'
          onClick={handleMarkAsImportantButtonClick}
        >
          { task.isImportant ?
            <IconStar color='primary'/> :
            <IconStarBorder color='primary'/> }
        </IconButton>
      </Stack>


      {/* DETAIL TASK */}
      <Drawer
        open={isDrawerExpanded}
        onClose={() => setIsDrawerExpanded(false)}
        anchor='right'
      >
        <DetailTask
          taskId={taskId}
          setIsDrawerExpanded={setIsDrawerExpanded}
        />
      </Drawer>
    </>

  )
}

export default TaskCard