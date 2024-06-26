import { useContext } from 'react'

import Stack from '@mui/material/Stack'

import { MainContext } from 'src/context/MainContext'

import TaskCard from 'src/components/task-card'

const Planned = () => {
  const { taskList } = useContext(MainContext)
  const filteredTaskList = taskList.filter(task => task.dueDate)

  return (
    <Stack p={24}>
      {/* TASK LIST */}
      {filteredTaskList.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
        />
      ))}
    </Stack>
  )
}

export default Planned