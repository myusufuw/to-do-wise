import moment from 'moment'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ChecklistIcon from '@mui/icons-material/Checklist'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

import { MainContext } from 'src/context/MainContext'

const Drawer = () => {
  const { isDrawerExpanded } = useContext(MainContext)
  const location = useLocation()

  const navigationList = [
    {
      label: 'Task List',
      path: '/',
      icon: ChecklistIcon
    },
    {
      label: 'Important',
      path: '/important',
      icon: BookmarkAddedIcon
    },
    {
      label: 'Planned',
      path: '/planned',
      icon: CalendarMonthIcon
    }
  ]

  return (
    <Stack
      width={isDrawerExpanded ? 250 : 0}
      className='shadow-lg bg-blue-600 transition-all duration-500'
    >
      {isDrawerExpanded &&
      <Stack>
        <Stack
          height={72}
          justifyContent='center'
          alignItems='center'
          borderBottom='1px solid'
          className=' border-blue-500'
        >
          <Typography fontSize={18} className=' text-white'>
            {moment(new Date()).format('ddd, DD MMM YYYY')}
          </Typography>
        </Stack>

        <List disablePadding>
          {navigationList.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className=' no-underline active: text-black'
            >
              <ListItem disablePadding  className={`${item.path === location.pathname ? 'bg-blue-500' : 'bg-inherit'}`}>
                <ListItemButton>
                  <ListItemIcon>
                    <item.icon className=' text-white'/>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    className=' text-white'
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Stack>}
    </Stack>
  )
}

export default Drawer