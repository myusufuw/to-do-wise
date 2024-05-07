import Stack from '@mui/material/Stack'

import TaskList from 'src/components/task-list'
import CreateTask from 'src/components/create-task'

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