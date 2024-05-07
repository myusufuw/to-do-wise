import Stack from '@mui/material/Stack'

import TaskList from 'src/components/TaskList'
import CreateTask from 'src/components/CreateTask'

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