import moment from 'moment'
import { useState, FormEvent, useContext } from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AddTaskIcon from '@mui/icons-material/AddTask'
import IconBookmarkAdd from '@mui/icons-material/BookmarkAdd'
import IconCalendarMonth from '@mui/icons-material/CalendarMonth'

import { TypeTaskList } from 'src/constants/types'
import { MainContext } from 'src/context/MainContext'
import { generateRandomId } from 'src/utilities/string'

import DatePicker from '../DatePicker/DatePicker'

const CraeateTask = () => {
  const { taskList, setTaskList, showSnackbar } = useContext(MainContext)

  const initialNewTaskForms: TypeTaskList = {
    title: '',
    dueDate: null,
    isImportant: false,
    isDone: false,
    note: '',
    id: generateRandomId(8)
  }

  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false)
  const [ newTaskForms, setNewTaskForms ] = useState({ ...initialNewTaskForms })

  const handleNewTaskFormChange = (objectName: string, value: string | boolean | Date) => {
    setNewTaskForms(current => ({
      ...current,
      [objectName]: value
    }))
  }

  const handleAcceptSelectedDate = (value: moment.Moment | null) => {
    if(value) handleNewTaskFormChange('dueDate', value.toDate())
    setIsDatePickerOpen(false)
  }

  const handleSaveNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTaskList([ ...taskList, newTaskForms ])
    showSnackbar('success', 'Successfully created a new task.')
    setNewTaskForms(initialNewTaskForms)
  }

  return (
    <Stack
      className='bg-neutral-100 rounded shadow-md border-gray-100 mb-8'
      border='solid 1px'
      component='form'
      onSubmit={handleSaveNewTask}
    >
      <Stack
        className='py-4 px-4 bg-white border-gray-200'
        borderBottom='1px solid'
      >
        <Stack className='flex-row items-center space-x-3'>
          <AddTaskIcon color='primary'/>
          <TextField
            placeholder='Add new task . . .'
            variant='standard'
            fullWidth
            value={newTaskForms.title}
            name='title'
            onChange={event => handleNewTaskFormChange(event.target.name, event.target.value)}
          />
        </Stack>
      </Stack>

      <Stack className='py-3 px-4 flex-row justify-between'>
        <Stack direction='row'>
          <IconButton
            size='small'
            disableRipple
            onClick={() => setIsDatePickerOpen(true)}
          >
            <IconCalendarMonth color={newTaskForms.dueDate ? 'primary' : 'inherit'}/>
          </IconButton>

          <IconButton
            size='small'
            disableRipple
            onClick={() => handleNewTaskFormChange('isImportant', !newTaskForms.isImportant)}
          >
            <IconBookmarkAdd color={newTaskForms.isImportant ? 'primary' : 'inherit'}/>
          </IconButton>
        </Stack>

        <Button
          variant='outlined'
          type='submit'
          disabled={!newTaskForms.title}
          size='small'
        >
          Add
        </Button>
      </Stack>

      {/* DATE PICKER */}
      <DatePicker
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        handleAcceptButton={handleAcceptSelectedDate}
      />
    </Stack>
  )
}

export default CraeateTask