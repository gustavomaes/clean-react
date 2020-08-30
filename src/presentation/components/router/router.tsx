import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/presentation/styles/global'
import theme from '@/presentation/styles/theme'
import { Signup } from '@/presentation/pages'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" exact component={makeLogin}/>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </ThemeProvider>

  </BrowserRouter>
)

export default Router
