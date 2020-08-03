import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { GlobalStyle } from '@/presentation/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

const Router: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </ThemeProvider>

  </BrowserRouter>
)

export default Router
