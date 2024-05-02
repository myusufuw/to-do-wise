import Stack from '@mui/material/Stack'

import TaskList from 'src/components/TaskList/TaskList'
import CreateTask from 'src/components/CreateTask/CreateTask'

const Task = () => {

  return (
    <Stack p={24}>
      {/* CREATE TASK */}
      <CreateTask/>

      {/* TASK LIST */}
      <TaskList/>
    </Stack>
  )
}

export default Task