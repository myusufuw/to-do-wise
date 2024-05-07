import moment from 'moment'
import { useState, FormEvent, useContext } from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import IconClear from '@mui/icons-material/Clear'
import AddTaskIcon from '@mui/icons-material/AddTask'
import InputAdornment from '@mui/material/InputAdornment'
import IconCalendarMonth from '@mui/icons-material/CalendarMonth'
import IconBookmarkAdded from '@mui/icons-material/BookmarkAdded'
import IconBookmarkBorder from '@mui/icons-material/BookmarkBorder'

import { TypeTaskList } from 'src/constants/types'
import { MainContext } from 'src/context/MainContext'
import { generateRandomId } from 'src/utilities/string'

import DatePicker from './date-picker'

const CraeateTask = () => {
  const { taskList, setTaskList, showSnackbar } = useContext(MainContext)

  const initialNewTaskForms: TypeTaskList = {
    title: '',
    dueDate: null,
    isImportant: false,
    isDone: false,
    note: '',
    id: generateRandomId(5)
  }

  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false)
  const [ newTaskForms, setNewTaskForms ] = useState({ ...initialNewTaskForms })

  const handleNewTaskFormChange = (objectName: string, value: string | boolean | Date | null) => {
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
        <Stack direction='row' spacing={12} alignItems='flex-end'>
          <Stack direction='row'>
            <Tooltip title='Add due date'>
              <IconButton
                size='small'
                disableRipple
                onClick={() => setIsDatePickerOpen(true)}
              >
                <IconCalendarMonth color={newTaskForms.dueDate ? 'primary' : 'inherit'}/>
              </IconButton>
            </Tooltip>

            { newTaskForms.dueDate &&
            <TextField
              disabled
              className=' w-[150px]'
              value={moment(newTaskForms.dueDate).format('DD / MM / YYYY')}
              size='small'
              variant='standard'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      color='error'
                      onClick={() => handleNewTaskFormChange('dueDate', null)}
                    >
                      <IconClear />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />}
          </Stack>

          <Tooltip title='Mark as important'>
            <IconButton
              size='small'
              disableRipple
              onClick={() => handleNewTaskFormChange('isImportant', !newTaskForms.isImportant)}
            >
              { newTaskForms.isImportant ?
                <IconBookmarkAdded color='primary'/> :
                <IconBookmarkBorder/>}
            </IconButton>
          </Tooltip>
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