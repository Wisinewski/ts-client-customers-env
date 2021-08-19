import React from 'react'
import { render } from '@testing-library/react'
import AddCustomer from './add-customer'

describe('Name of the group', () => {
  test('should not render spinner and error on start', () => {
    const { getByTestId } = render(<AddCustomer />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
