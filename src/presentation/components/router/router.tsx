import AddCustomer from '@/presentation/pages/add-customer/add-customer'
import Dashboard from '@/presentation/pages/dashboard/dashboard'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../../styles/global.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" exact component={AddCustomer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
