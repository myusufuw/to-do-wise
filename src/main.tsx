import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

import theme from 'src/constants/theme.ts'

import './index.css'
import App from './App'
import MainLayout from './layout/MainLayout'
import { MainContextProvider } from './context/MainContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <MainContextProvider>
          <BrowserRouter>
            <CssBaseline />
            <MainLayout>
              <App />
            </MainLayout>
          </BrowserRouter>
        </MainContextProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
)
