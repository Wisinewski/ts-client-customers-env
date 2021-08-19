import React from 'react'
import { render } from '@testing-library/react'
import AddCustomer from './add-customer'

describe('Name of the group', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(<AddCustomer />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const createButton = getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(true)
  })
})
