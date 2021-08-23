import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/components/router/router'
import { makeAddCustomer } from './factories/pages/add-customer/add-customer-factory'

ReactDOM.render(
  <Router
    makeAddCustomer={makeAddCustomer}
  />,
  document.getElementById('main')
)
