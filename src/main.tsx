import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

import theme from 'src/constants/theme.ts'

import './index.css'
import Task from './pages/Task'
import Error from './pages/Error'
import Search from './pages/Search'
import Planned from './pages/Planned'
import Important from './pages/Important'
import MainLayout from './layout/MainLayout'
import { MainContextProvider } from './context/MainContext'

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Task />
      },
      {
        path: '/important',
        element: <Important />
      },
      {
        path: '/planned',
        element: <Planned />
      },
      {
        path: '/search',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <MainContextProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </MainContextProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
)
