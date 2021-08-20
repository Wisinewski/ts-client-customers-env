import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import AddCustomer from './add-customer'
import { mockCustomer } from '@/domain/test/customer/mock-customer'
import { ValidationSpy } from '@/presentation/test/mock-validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
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
    expect(validationSpy.fieldName).toBe('name')
    expect(validationSpy.fieldValue).toBe(customer.name)
  })

  test('should call Validation with correct templateName', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templateNameInput = sut.getByTestId('templateName')
    fireEvent.input(templateNameInput, { target: { value: customer.templates[0].name } })
    expect(validationSpy.fieldName).toBe('templateName')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].name)
  })

  test('should call Validation with correct templateType', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templateTypeInput = sut.getByTestId('templateType')
    fireEvent.input(templateTypeInput, { target: { value: customer.templates[0].type } })
    expect(validationSpy.fieldName).toBe('templateType')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].type)
  })

  test.skip('should call Validation with "on" if templateCi is marked', () => {
    const { sut, validationSpy } = makeSut()
    const templateCiInput = sut.getByTestId('templateCi')
    fireEvent.click(templateCiInput)
    expect(validationSpy.fieldName).toBe('templateCi')
    expect(validationSpy.fieldValue).toBe(true)
  })

  test.skip('should call Validation with "off" templateCi is not marked', () => {
    const { sut, validationSpy } = makeSut()
    sut.getByTestId('templateCi')
    expect(validationSpy.fieldName).toBe('templateCi')
    expect(validationSpy.fieldValue).toBe(false)
  })

  test.skip('should call Validation with "on" if templateCd is marked', () => {
    const { sut, validationSpy } = makeSut()
    const templateCdInput = sut.getByTestId('templateCd')
    fireEvent.click(templateCdInput)
    expect(validationSpy.fieldName).toBe('templateCd')
    expect(validationSpy.fieldValue).toBe(true)
  })

  test.skip('should call Validation with "off" templateCi is not marked', () => {
    const { sut, validationSpy } = makeSut()
    sut.getByTestId('templateCi')
    expect(validationSpy.fieldName).toBe('templateCd')
    expect(validationSpy.fieldValue).toBe(false)
  })

  test('should call Validation with correct templateLang', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templateLangInput = sut.getByTestId('templateLang')
    fireEvent.input(templateLangInput, { target: { value: customer.templates[0].lang } })
    expect(validationSpy.fieldName).toBe('templateLang')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].lang)
  })

  test('should call Validation with correct templateVersion', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templateVersionInput = sut.getByTestId('templateVersion')
    fireEvent.input(templateVersionInput, { target: { value: customer.templates[0].version } })
    expect(validationSpy.fieldName).toBe('templateVersion')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].version)
  })

  test('should call Validation with correct templatePath', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templatePathInput = sut.getByTestId('templatePath')
    fireEvent.input(templatePathInput, { target: { value: customer.templates[0].path } })
    expect(validationSpy.fieldName).toBe('templatePath')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].path)
  })

  test('should call Validation with correct templateTool', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const templateToolInput = sut.getByTestId('templateTool')
    fireEvent.input(templateToolInput, { target: { value: customer.templates[0].tool } })
    expect(validationSpy.fieldName).toBe('templateTool')
    expect(validationSpy.fieldValue).toBe(customer.templates[0].tool)
  })

  test('should call Validation with correct gitUser', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const gitUserInput = sut.getByTestId('gitUser')
    fireEvent.input(gitUserInput, { target: { value: customer.git.user } })
    expect(validationSpy.fieldName).toBe('gitUser')
    expect(validationSpy.fieldValue).toBe(customer.git.user)
  })

  test('should call Validation with correct gitPassword', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const gitPasswordInput = sut.getByTestId('gitPassword')
    fireEvent.input(gitPasswordInput, { target: { value: customer.git.pass } })
    expect(validationSpy.fieldName).toBe('gitPassword')
    expect(validationSpy.fieldValue).toBe(customer.git.pass)
  })

  test('should call Validation with correct sonarHost', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const sonarHostInput = sut.getByTestId('sonarHost')
    fireEvent.input(sonarHostInput, { target: { value: customer.sonar.host } })
    expect(validationSpy.fieldName).toBe('sonarHost')
    expect(validationSpy.fieldValue).toBe(customer.sonar.host)
  })

  test('should call Validation with correct remoteStateName', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateNameInput = sut.getByTestId('remoteStateName')
    fireEvent.input(remoteStateNameInput, { target: { value: customer.remoteState[0].name } })
    expect(validationSpy.fieldName).toBe('remoteStateName')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].name)
  })

  test('should call Validation with correct remoteStateBusinessUnit', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateBusinessUnitInput = sut.getByTestId('remoteStateBusinessUnit')
    fireEvent.input(remoteStateBusinessUnitInput, { target: { value: customer.remoteState[0].businessUnit } })
    expect(validationSpy.fieldName).toBe('remoteStateBusinessUnit')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].businessUnit)
  })

  test('should call Validation with correct remoteStateEnvironment', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateEnvironmentInput = sut.getByTestId('remoteStateEnvironment')
    fireEvent.input(remoteStateEnvironmentInput, { target: { value: customer.remoteState[0].environment } })
    expect(validationSpy.fieldName).toBe('remoteStateEnvironment')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].environment)
  })

  test('should call Validation with correct remoteStateVendor', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateVendorInput = sut.getByTestId('remoteStateVendor')
    fireEvent.input(remoteStateVendorInput, { target: { value: customer.remoteState[0].vendor } })
    expect(validationSpy.fieldName).toBe('remoteStateVendor')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].vendor)
  })

  test('should call Validation with correct remoteStateRegion', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateRegionInput = sut.getByTestId('remoteStateRegion')
    fireEvent.input(remoteStateRegionInput, { target: { value: customer.remoteState[0].region } })
    expect(validationSpy.fieldName).toBe('remoteStateRegion')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].region)
  })

  test('should call Validation with correct remoteStateType', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const remoteStateTypeInput = sut.getByTestId('remoteStateType')
    fireEvent.input(remoteStateTypeInput, { target: { value: customer.remoteState[0].type } })
    expect(validationSpy.fieldName).toBe('remoteStateType')
    expect(validationSpy.fieldValue).toBe(customer.remoteState[0].type)
  })

  test('should call Validation with correct outputName', () => {
    const { sut, validationSpy } = makeSut()
    const customer = mockCustomer()
    const outputNameInput = sut.getByTestId('outputName')
    fireEvent.input(outputNameInput, { target: { value: customer.output.name } })
    expect(validationSpy.fieldName).toBe('outputName')
    expect(validationSpy.fieldValue).toBe(customer.output.name)
  })
})
