import { useState, useContext } from 'react'

import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import IconKeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { MainContext } from 'src/context/MainContext'

import TaskCard from '../TaskCard/TaskCard'

const TaskList = () => {
  const { taskList } = useContext(MainContext)

  const [ isCompletedTaskListExpanded, setIsCompletedTaskListExpanded ] = useState(false)

  const uncompletedTaskList = taskList?.filter(task => !task.isDone)
  const completedTaskList = taskList?.filter(task => task.isDone)

  return (
    <Stack
      height='calc(100vh - 280px)'
      overflow='auto'
    >
      {/* UNCOMPLETED TASK LIST */}
      <>
        {uncompletedTaskList?.map((task, index) => (
          <TaskCard key={index} task={task}/>
        ))}
      </>

      {/* COMPLETED TASK LIST */}
      { completedTaskList.length > 0 &&
      <Stack
        direction='row'
        spacing={8}
        alignItems='center'
        borderBottom={isCompletedTaskListExpanded ? 'none' : '1px solid'}
        pb={8}
        borderColor='divider'
        mt={24}
      >
        <IconButton
          size='small'
          onClick={() => setIsCompletedTaskListExpanded(current => !current)}
        >
          <IconKeyboardArrowRight className={`${isCompletedTaskListExpanded ? 'rotate-90' : 'rotate-0'} transition-all`}/>
        </IconButton>

        <Typography>
          Completed ({completedTaskList.length})
        </Typography>

      </Stack> }

      <Collapse in={isCompletedTaskListExpanded}>
        <>
          {completedTaskList?.map((task, index) => (
            <TaskCard key={index} task={task}/>
          ))}
        </>
      </Collapse>
    </Stack>
  )
}

export default TaskList