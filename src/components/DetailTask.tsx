import moment from 'moment'
import { useState, Dispatch, useEffect, useContext, SyntheticEvent, SetStateAction } from 'react'

import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import Button  from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import IconClear from '@mui/icons-material/Clear'
import DialogTitle from '@mui/material/DialogTitle'
import IconDelete from '@mui/icons-material/Delete'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import IconCheckCircle from '@mui/icons-material/CheckCircle'
import DialogContentText from '@mui/material/DialogContentText'
import IconCalendarMonth from '@mui/icons-material/CalendarMonth'
import IconBookmarkAdded from '@mui/icons-material/BookmarkAdded'
import IconBookmarkBorder from '@mui/icons-material/BookmarkBorder'
import IconRadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'

import { TypeTaskList } from 'src/constants/types'
import { MainContext } from 'src/context/MainContext'

import DatePicker from './DatePicker'

type TypeProps = {
  taskId: string,
  setIsDrawerExpanded: Dispatch<SetStateAction<boolean>>
}

const DetailTask = (props: TypeProps) => {
  const { taskId, setIsDrawerExpanded } = props
  const { taskList, setTaskList, showSnackbar } = useContext(MainContext)

  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false)
  const [ detailTask, setDetailTask ] = useState<TypeTaskList | null>(null)
  const [ isDialogDeleteOpen, setIsDialogDeleteOpen ] = useState(false)

  const handleCompleteTaskButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    const updatedTaskList = taskList.map((currentTask) => {
      if(currentTask.id === taskId) currentTask.isDone = !currentTask.isDone
      return currentTask
    })
    setTaskList(updatedTaskList)
  }

  const handleMarkAsImportantButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    const updatedTaskList = taskList.map((currentTask) => {
      if(currentTask.id === taskId) currentTask.isImportant = !currentTask.isImportant
      return currentTask
    })
    setTaskList(updatedTaskList)
  }

  const handleAcceptSelectedDate = (value: moment.Moment | null) => {
    if(value) handleFormChange('dueDate', value.toDate())
    setIsDatePickerOpen(false)
  }

  const handleDeleteTask = () => {
    const updatedTaskList = taskList.filter(task => task.id !== taskId)
    setTaskList(updatedTaskList)
    showSnackbar('success', 'Successfully deleted the task')
    setIsDialogDeleteOpen(false)
    setIsDrawerExpanded(false)
  }

  const handleFormChange = (name: string, value: string | Date | null) => {
    const updatedTaskList = taskList.map((task) => {
      if(task.id === taskId) {
        if(name === 'title' && typeof value === 'string') task.title = value
        else if(name === 'dueDate' && value instanceof Date || value === null) task.dueDate = value
        else if(name === 'note' && typeof value === 'string') task.note = value

      }
      return task
    })

    setTaskList(updatedTaskList)
  }

  useEffect(() => {
    let tempDetailTask = null
    taskList.forEach((task) => {
      if(task.id === taskId) tempDetailTask = task
    })

    setDetailTask(tempDetailTask)
  }, [ taskId, taskList ])

  return (
    <Stack
      width={350}
      height='100%'
    >
      {/* HEADER */}
      <Stack
        borderBottom='1px solid'
        borderColor='divider'
        py={8}
        direction='row'
        spacing={6}
        alignItems='center'
        px={24}
      >
        <Typography variant='h6'>
          Detail Task
        </Typography>
      </Stack>

      <Stack
        spacing={24}
        component='form'
        p={24}
        flex={1}
      >
        {/* TITLE */}
        <TextField
          label='Title'
          value={detailTask?.title}
          fullWidth
          size='small'
          type='text'
          placeholder='Add title'
          onChange={e => handleFormChange('title', e.target.value)}
          disabled={detailTask?.isDone}
        />

        {/* DUE DATE */}
        <TextField
          label='Due date'
          value={detailTask?.dueDate ? moment(detailTask?.dueDate).format('DD / MM / YYYY') : ''}
          fullWidth
          size='small'
          type='text'
          placeholder='Add due date'
          disabled={detailTask?.isDone}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton
                  onClick={() => setIsDatePickerOpen(true)}
                  disabled={detailTask?.isDone}
                >
                  <IconCalendarMonth />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => handleFormChange('dueDate', null)}
                  disabled={detailTask?.isDone}
                >
                  <IconClear />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* NOTES */}
        <TextField
          label='Notes'
          value={detailTask?.note}
          fullWidth
          size='small'
          type='text'
          placeholder='Add notes'
          multiline
          rows={10}
          onChange={e => handleFormChange('note', e.target.value)}
          disabled={detailTask?.isDone}
        />

        {/* COMPLETE & IMPORTANT BUTTONS */}
        <Stack
          direction='row'
          alignItems='center'
          spacing={16}
        >
          <Button
            fullWidth
            variant='outlined'
            startIcon={detailTask?.isDone ? <IconCheckCircle/> : <IconRadioButtonUnchecked/>}
            color={detailTask?.isDone ? 'success' : 'primary'}
            onClick={handleCompleteTaskButtonClick}
          >
            Complete
          </Button>

          <Button
            fullWidth
            variant='outlined'
            startIcon={detailTask?.isImportant ? <IconBookmarkAdded/> : <IconBookmarkBorder/>}
            color={detailTask?.isImportant ? 'success' : 'primary'}
            onClick={handleMarkAsImportantButtonClick}
          >
            Important
          </Button>
        </Stack>
      </Stack>

      {/* DELETE BUTTON */}
      <Stack p={24}>
        <Button
          color='error'
          variant='outlined'
          onClick={() => setIsDialogDeleteOpen(true)}
          startIcon={<IconDelete/>}
        >
          Delete
        </Button>
      </Stack>

      {/* DATE PICKER */}
      <DatePicker
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        handleAcceptButton={handleAcceptSelectedDate}
      />

      {/* DIALOG DELETE TASK */}
      <Dialog
        open={isDialogDeleteOpen}
        onClose={() => setIsDialogDeleteOpen(false)}
      >
        <DialogTitle>
          Delete Task
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setIsDialogDeleteOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleDeleteTask}
            autoFocus
            color='error'
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

export default DetailTask