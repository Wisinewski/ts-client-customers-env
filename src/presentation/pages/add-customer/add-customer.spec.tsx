import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import AddCustomer from './add-customer'
import { mockCustomer } from '@/domain/test/customer/mock-customer'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  input: object
  errorMessage: string
  validate (input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<AddCustomer validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Name of the group', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(true)
    const nameStatus = sut.getByTestId('name-status')
    expect(nameStatus.title).toBe('Campo obrigatório')
    expect(nameStatus.textContent).toBe('ℹ️')
    const templateNameStatus = sut.getByTestId('templateName-status')
    expect(templateNameStatus.title).toBe('Campo obrigatório')
    expect(templateNameStatus.textContent).toBe('ℹ️')
    const templateTypeStatus = sut.getByTestId('templateType-status')
    expect(templateTypeStatus.title).toBe('Campo obrigatório')
    expect(templateTypeStatus.textContent).toBe('ℹ️')
    const templateCiStatus = sut.getByTestId('templateCi-status')
    expect(templateCiStatus.title).toBe('Campo opcional')
    expect(templateCiStatus.textContent).toBe('ℹ️')
    const templateCdStatus = sut.getByTestId('templateCd-status')
    expect(templateCdStatus.title).toBe('Campo opcional')
    expect(templateCdStatus.textContent).toBe('ℹ️')
    const templateVendorStatus = sut.getByTestId('templateVendor-status')
    expect(templateVendorStatus.title).toBe('Campo opcional')
    expect(templateVendorStatus.textContent).toBe('ℹ️')
    const templateLangStatus = sut.getByTestId('templateLang-status')
    expect(templateLangStatus.title).toBe('Campo obrigatório')
    expect(templateLangStatus.textContent).toBe('ℹ️')
    const templateVersionStatus = sut.getByTestId('templateVersion-status')
    expect(templateVersionStatus.title).toBe('Campo obrigatório')
    expect(templateVersionStatus.textContent).toBe('ℹ️')
    const templatePathStatus = sut.getByTestId('templatePath-status')
    expect(templatePathStatus.title).toBe('Campo obrigatório')
    expect(templatePathStatus.textContent).toBe('ℹ️')
    const templateToolStatus = sut.getByTestId('templateTool-status')
    expect(templateToolStatus.title).toBe('Campo obrigatório')
    expect(templateToolStatus.textContent).toBe('ℹ️')
    const gitUserStatus = sut.getByTestId('gitUser-status')
    expect(gitUserStatus.title).toBe('Campo obrigatório')
    expect(gitUserStatus.textContent).toBe('ℹ️')
    const gitPasswordStatus = sut.getByTestId('gitPassword-status')
    expect(gitPasswordStatus.title).toBe('Campo obrigatório')
    expect(gitPasswordStatus.textContent).toBe('ℹ️')
    const sonarHostStatus = sut.getByTestId('sonarHost-status')
    expect(sonarHostStatus.title).toBe('Campo obrigatório')
    expect(sonarHostStatus.textContent).toBe('ℹ️')
    const sonarTokenStatus = sut.getByTestId('sonarToken-status')
    expect(sonarTokenStatus.title).toBe('Campo obrigatório')
    expect(sonarTokenStatus.textContent).toBe('ℹ️')
    const remoteStateNameStatus = sut.getByTestId('remoteStateName-status')
    expect(remoteStateNameStatus.title).toBe('Campo obrigatório')
    expect(remoteStateNameStatus.textContent).toBe('ℹ️')
    const remoteStateBusinessUnitStatus = sut.getByTestId('remoteStateBusinessUnit-status')
    expect(remoteStateBusinessUnitStatus.title).toBe('Campo opcional')
    expect(remoteStateBusinessUnitStatus.textContent).toBe('ℹ️')
    const remoteStateEnvironmentStatus = sut.getByTestId('remoteStateEnvironment-status')
    expect(remoteStateEnvironmentStatus.title).toBe('Campo opcional')
    expect(remoteStateEnvironmentStatus.textContent).toBe('ℹ️')
    const remoteStateVendorStatus = sut.getByTestId('remoteStateVendor-status')
    expect(remoteStateVendorStatus.title).toBe('Campo obrigatório')
    expect(remoteStateVendorStatus.textContent).toBe('ℹ️')
    const remoteStateRegionStatus = sut.getByTestId('remoteStateRegion-status')
    expect(remoteStateRegionStatus.title).toBe('Campo obrigatório')
    expect(remoteStateRegionStatus.textContent).toBe('ℹ️')
    const remoteStateTypeStatus = sut.getByTestId('remoteStateType-status')
    expect(remoteStateTypeStatus.title).toBe('Campo obrigatório')
    expect(remoteStateTypeStatus.textContent).toBe('ℹ️')
    const outputNameStatus = sut.getByTestId('outputName-status')
    expect(outputNameStatus.title).toBe('Campo obrigatório')
    expect(outputNameStatus.textContent).toBe('ℹ️')
  })

  test('should call Validation with correct name', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const nameInput = sut.getByTestId('name')
    fireEvent.input(nameInput, { target: { value: customer.name } })
    expect(validationSpy.input).toEqual({
      name: customer.name
    })
  })
})
