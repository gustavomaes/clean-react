import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from '@/presentation/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" exact component={makeLogin}/>
      </Switch>
    </ThemeProvider>

  </BrowserRouter>
)

export default Router
