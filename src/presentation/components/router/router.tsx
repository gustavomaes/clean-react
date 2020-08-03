import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { GlobalStyle } from '@/presentation/styles/global'

const Router: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/login" exact component={Login}/>
    </Switch>
  </BrowserRouter>
)

export default Router
