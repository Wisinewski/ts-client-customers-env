import Dashboard from '@/presentation/pages/dashboard/dashboard'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../../styles/global.scss'

type Props = {
  makeAddCustomer: React.FC
}

const Router: React.FC<Props> = ({ makeAddCustomer }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" exact component={makeAddCustomer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
