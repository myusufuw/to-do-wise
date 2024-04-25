import moment from 'moment'
import { Dispatch } from 'react'

import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

type TypeProps = {
 isDatePickerOpen: boolean,
 setIsDatePickerOpen: Dispatch<boolean>
 // eslint-disable-next-line no-unused-vars
 handleAcceptButton: (value: moment.Moment | null) => void
}

const DatePicker = (props: TypeProps) => {
  const { isDatePickerOpen, setIsDatePickerOpen, handleAcceptButton } = props
  return (
    <Dialog open={isDatePickerOpen} onClose={() => setIsDatePickerOpen(false)}>
      <Stack p={16} borderRadius={1}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <StaticDatePicker onAccept={value => handleAcceptButton(value)}/>
        </LocalizationProvider>
      </Stack>
    </Dialog>
  )
}

export default DatePicker