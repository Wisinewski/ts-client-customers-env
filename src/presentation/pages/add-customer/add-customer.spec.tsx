import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import { mockCustomer, mockCustomerParams } from '@/domain/test/customer/mock-customer'
import { ValidationStub } from '@/presentation/test/mock-validation'
import faker from 'faker'
import { AddCustomerSpy } from '@/presentation/test/mock-customer'
import AddCustomer from './add-customer'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  addCustomerSpy: AddCustomerSpy
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const addCustomerSpy = new AddCustomerSpy()
  const sut = render(<AddCustomer validation={validationStub} addCustomer={addCustomerSpy} />)
  return {
    sut,
    validationStub,
    addCustomerSpy
  }
}

const populateForm = (sut: RenderResult): void => {
  const customer = mockCustomer()
  fireEvent.input(sut.getByTestId('name'), { target: { value: customer.name } })
  fireEvent.input(sut.getByTestId('templateName'), { target: { value: customer.templates[0].name } })
  fireEvent.input(sut.getByTestId('templateType'), { target: { value: customer.templates[0].type } })
  fireEvent.click(sut.getByTestId('templateCi'))
  fireEvent.click(sut.getByTestId('templateCd'))
  fireEvent.input(sut.getByTestId('templateVendor'), { target: { value: customer.templates[0].vendor } })
  fireEvent.input(sut.getByTestId('templateLang'), { target: { value: customer.templates[0].lang } })
  fireEvent.input(sut.getByTestId('templateVersion'), { target: { value: customer.templates[0].version } })
  fireEvent.input(sut.getByTestId('templatePath'), { target: { value: customer.templates[0].path } })
  fireEvent.input(sut.getByTestId('templateTool'), { target: { value: customer.templates[0].tool } })
  fireEvent.input(sut.getByTestId('gitUser'), { target: { value: customer.git.user } })
  fireEvent.input(sut.getByTestId('gitPassword'), { target: { value: customer.git.pass } })
  fireEvent.input(sut.getByTestId('sonarHost'), { target: { value: customer.sonar.host } })
  fireEvent.input(sut.getByTestId('sonarToken'), { target: { value: customer.sonar.token } })
  fireEvent.input(sut.getByTestId('remoteStateName'), { target: { value: customer.remoteState[0].name } })
  fireEvent.input(sut.getByTestId('remoteStateBusinessUnit'), { target: { value: customer.remoteState[0].businessUnit } })
  fireEvent.input(sut.getByTestId('remoteStateEnvironment'), { target: { value: customer.remoteState[0].environment } })
  fireEvent.input(sut.getByTestId('remoteStateVendor'), { target: { value: customer.remoteState[0].vendor } })
  fireEvent.input(sut.getByTestId('remoteStateRegion'), { target: { value: customer.remoteState[0].region } })
  fireEvent.input(sut.getByTestId('remoteStateType'), { target: { value: customer.remoteState[0].type } })
  fireEvent.input(sut.getByTestId('outputName'), { target: { value: customer.output.name } })
}

describe('Name of the group', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(true)
    const nameStatus = sut.getByTestId('name-status')
    expect(nameStatus.title).toBe(validationStub.errorMessage)
    expect(nameStatus.textContent).toBe('ℹ️')
    const templateNameStatus = sut.getByTestId('templateName-status')
    expect(templateNameStatus.title).toBe(validationStub.errorMessage)
    expect(templateNameStatus.textContent).toBe('ℹ️')
    const templateTypeStatus = sut.getByTestId('templateType-status')
    expect(templateTypeStatus.title).toBe(validationStub.errorMessage)
    expect(templateTypeStatus.textContent).toBe('ℹ️')
    const templateCiStatus = sut.getByTestId('templateCi-status')
    expect(templateCiStatus.title).toBe(validationStub.errorMessage)
    expect(templateCiStatus.textContent).toBe('ℹ️')
    const templateCdStatus = sut.getByTestId('templateCd-status')
    expect(templateCdStatus.title).toBe(validationStub.errorMessage)
    expect(templateCdStatus.textContent).toBe('ℹ️')
    const templateVendorStatus = sut.getByTestId('templateVendor-status')
    expect(templateVendorStatus.title).toBe(validationStub.errorMessage)
    expect(templateVendorStatus.textContent).toBe('ℹ️')
    const templateLangStatus = sut.getByTestId('templateLang-status')
    expect(templateLangStatus.title).toBe(validationStub.errorMessage)
    expect(templateLangStatus.textContent).toBe('ℹ️')
    const templateVersionStatus = sut.getByTestId('templateVersion-status')
    expect(templateVersionStatus.title).toBe(validationStub.errorMessage)
    expect(templateVersionStatus.textContent).toBe('ℹ️')
    const templatePathStatus = sut.getByTestId('templatePath-status')
    expect(templatePathStatus.title).toBe(validationStub.errorMessage)
    expect(templatePathStatus.textContent).toBe('ℹ️')
    const templateToolStatus = sut.getByTestId('templateTool-status')
    expect(templateToolStatus.title).toBe(validationStub.errorMessage)
    expect(templateToolStatus.textContent).toBe('ℹ️')
    const gitUserStatus = sut.getByTestId('gitUser-status')
    expect(gitUserStatus.title).toBe(validationStub.errorMessage)
    expect(gitUserStatus.textContent).toBe('ℹ️')
    const gitPasswordStatus = sut.getByTestId('gitPassword-status')
    expect(gitPasswordStatus.title).toBe(validationStub.errorMessage)
    expect(gitPasswordStatus.textContent).toBe('ℹ️')
    const sonarHostStatus = sut.getByTestId('sonarHost-status')
    expect(sonarHostStatus.title).toBe(validationStub.errorMessage)
    expect(sonarHostStatus.textContent).toBe('ℹ️')
    const sonarTokenStatus = sut.getByTestId('sonarToken-status')
    expect(sonarTokenStatus.title).toBe(validationStub.errorMessage)
    expect(sonarTokenStatus.textContent).toBe('ℹ️')
    const remoteStateNameStatus = sut.getByTestId('remoteStateName-status')
    expect(remoteStateNameStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateNameStatus.textContent).toBe('ℹ️')
    const remoteStateBusinessUnitStatus = sut.getByTestId('remoteStateBusinessUnit-status')
    expect(remoteStateBusinessUnitStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateBusinessUnitStatus.textContent).toBe('ℹ️')
    const remoteStateEnvironmentStatus = sut.getByTestId('remoteStateEnvironment-status')
    expect(remoteStateEnvironmentStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateEnvironmentStatus.textContent).toBe('ℹ️')
    const remoteStateVendorStatus = sut.getByTestId('remoteStateVendor-status')
    expect(remoteStateVendorStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateVendorStatus.textContent).toBe('ℹ️')
    const remoteStateRegionStatus = sut.getByTestId('remoteStateRegion-status')
    expect(remoteStateRegionStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateRegionStatus.textContent).toBe('ℹ️')
    const remoteStateTypeStatus = sut.getByTestId('remoteStateType-status')
    expect(remoteStateTypeStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateTypeStatus.textContent).toBe('ℹ️')
    const outputNameStatus = sut.getByTestId('outputName-status')
    expect(outputNameStatus.title).toBe(validationStub.errorMessage)
    expect(outputNameStatus.textContent).toBe('ℹ️')
  })

  test('should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const nameInput = sut.getByTestId('name')
    fireEvent.input(nameInput, { target: { value: mockCustomer().name } })
    const nameStatus = sut.getByTestId('name-status')
    expect(nameStatus.title).toBe(validationStub.errorMessage)
    expect(nameStatus.textContent).toBe('❌')
  })

  test('should show templateName error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateNameInput = sut.getByTestId('templateName')
    fireEvent.input(templateNameInput, { target: { value: mockCustomer().templates[0].name } })
    const templateNameInputStatus = sut.getByTestId('templateName-status')
    expect(templateNameInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateNameInputStatus.textContent).toBe('❌')
  })

  test('should show templateType error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateTypeInput = sut.getByTestId('templateType')
    fireEvent.input(templateTypeInput, { target: { value: mockCustomer().templates[0].type } })
    const templateTypeInputStatus = sut.getByTestId('templateType-status')
    expect(templateTypeInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateTypeInputStatus.textContent).toBe('❌')
  })

  test('should show templateCi error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateCiInput = sut.getByTestId('templateCi')
    fireEvent.click(templateCiInput)
    const templateCiInputStatus = sut.getByTestId('templateCi-status')
    expect(templateCiInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateCiInputStatus.textContent).toBe('ℹ️')
  })

  test('should show templateCd error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateCdInput = sut.getByTestId('templateCd')
    fireEvent.click(templateCdInput)
    const templateCdInputStatus = sut.getByTestId('templateCd-status')
    expect(templateCdInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateCdInputStatus.textContent).toBe('ℹ️')
  })

  test('should show templateVendor error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateVendorInput = sut.getByTestId('templateVendor')
    fireEvent.input(templateVendorInput, { target: { value: mockCustomer().templates[0].vendor } })
    const templateVendorInputStatus = sut.getByTestId('templateVendor-status')
    expect(templateVendorInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateVendorInputStatus.textContent).toBe('❌')
  })

  test('should show templateLang error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateLangInput = sut.getByTestId('templateLang')
    fireEvent.input(templateLangInput, { target: { value: mockCustomer().templates[0].lang } })
    const templateLangInputStatus = sut.getByTestId('templateLang-status')
    expect(templateLangInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateLangInputStatus.textContent).toBe('❌')
  })

  test('should show templateVersion error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateVersionInput = sut.getByTestId('templateVersion')
    fireEvent.input(templateVersionInput, { target: { value: mockCustomer().templates[0].version } })
    const templateVersionInputStatus = sut.getByTestId('templateVersion-status')
    expect(templateVersionInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateVersionInputStatus.textContent).toBe('❌')
  })

  test('should show templatePath error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templatePathInput = sut.getByTestId('templatePath')
    fireEvent.input(templatePathInput, { target: { value: mockCustomer().templates[0].path } })
    const templatePathInputStatus = sut.getByTestId('templatePath-status')
    expect(templatePathInputStatus.title).toBe(validationStub.errorMessage)
    expect(templatePathInputStatus.textContent).toBe('❌')
  })

  test('should show templateTool error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const templateToolInput = sut.getByTestId('templateTool')
    fireEvent.input(templateToolInput, { target: { value: mockCustomer().templates[0].tool } })
    const templateToolInputStatus = sut.getByTestId('templateTool-status')
    expect(templateToolInputStatus.title).toBe(validationStub.errorMessage)
    expect(templateToolInputStatus.textContent).toBe('❌')
  })

  test('should show gitUser error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const gitUserInput = sut.getByTestId('gitUser')
    fireEvent.input(gitUserInput, { target: { value: mockCustomer().git.user } })
    const gitUserInputStatus = sut.getByTestId('gitUser-status')
    expect(gitUserInputStatus.title).toBe(validationStub.errorMessage)
    expect(gitUserInputStatus.textContent).toBe('❌')
  })

  test('should show gitPassword error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const gitPasswordInput = sut.getByTestId('gitPassword')
    fireEvent.input(gitPasswordInput, { target: { value: mockCustomer().git.pass } })
    const gitPasswordInputStatus = sut.getByTestId('gitPassword-status')
    expect(gitPasswordInputStatus.title).toBe(validationStub.errorMessage)
    expect(gitPasswordInputStatus.textContent).toBe('❌')
  })

  test('should show sonarHost error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const sonarHostInput = sut.getByTestId('sonarHost')
    fireEvent.input(sonarHostInput, { target: { value: mockCustomer().sonar.host } })
    const sonarHostInputStatus = sut.getByTestId('sonarHost-status')
    expect(sonarHostInputStatus.title).toBe(validationStub.errorMessage)
    expect(sonarHostInputStatus.textContent).toBe('❌')
  })

  test('should show sonarToken error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const sonarTokenInput = sut.getByTestId('sonarToken')
    fireEvent.input(sonarTokenInput, { target: { value: mockCustomer().sonar.token } })
    const sonarTokenInputStatus = sut.getByTestId('sonarToken-status')
    expect(sonarTokenInputStatus.title).toBe(validationStub.errorMessage)
    expect(sonarTokenInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateName error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateNameInput = sut.getByTestId('remoteStateName')
    fireEvent.input(remoteStateNameInput, { target: { value: mockCustomer().remoteState[0].name } })
    const remoteStateNameInputStatus = sut.getByTestId('remoteStateName-status')
    expect(remoteStateNameInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateNameInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateBusinessUnit error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateBusinessUnitInput = sut.getByTestId('remoteStateBusinessUnit')
    fireEvent.input(remoteStateBusinessUnitInput, { target: { value: mockCustomer().remoteState[0].businessUnit } })
    const remoteStateBusinessUnitInputStatus = sut.getByTestId('remoteStateBusinessUnit-status')
    expect(remoteStateBusinessUnitInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateBusinessUnitInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateEnvironment error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateEnvironmentInput = sut.getByTestId('remoteStateEnvironment')
    fireEvent.input(remoteStateEnvironmentInput, { target: { value: mockCustomer().remoteState[0].environment } })
    const remoteStateEnvironmentInputStatus = sut.getByTestId('remoteStateEnvironment-status')
    expect(remoteStateEnvironmentInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateEnvironmentInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateVendor error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateVendorInput = sut.getByTestId('remoteStateVendor')
    fireEvent.input(remoteStateVendorInput, { target: { value: mockCustomer().remoteState[0].vendor } })
    const remoteStateVendorInputStatus = sut.getByTestId('remoteStateVendor-status')
    expect(remoteStateVendorInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateVendorInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateRegion error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateRegionInput = sut.getByTestId('remoteStateRegion')
    fireEvent.input(remoteStateRegionInput, { target: { value: mockCustomer().remoteState[0].region } })
    const remoteStateRegionInputStatus = sut.getByTestId('remoteStateRegion-status')
    expect(remoteStateRegionInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateRegionInputStatus.textContent).toBe('❌')
  })

  test('should show remoteStateType error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const remoteStateTypeInput = sut.getByTestId('remoteStateType')
    fireEvent.input(remoteStateTypeInput, { target: { value: mockCustomer().remoteState[0].type } })
    const remoteStateTypeInputStatus = sut.getByTestId('remoteStateType-status')
    expect(remoteStateTypeInputStatus.title).toBe(validationStub.errorMessage)
    expect(remoteStateTypeInputStatus.textContent).toBe('❌')
  })

  test('should show outputName error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut, validationStub } = makeSut({ validationError })
    const outputNameInput = sut.getByTestId('outputName')
    fireEvent.input(outputNameInput, { target: { value: mockCustomer().output.name } })
    const outputNameInputStatus = sut.getByTestId('outputName-status')
    expect(outputNameInputStatus.title).toBe(validationStub.errorMessage)
    expect(outputNameInputStatus.textContent).toBe('❌')
  })

  test('should show valid name state if Validation succeeds', () => {
    const { sut } = makeSut()
    const nameInput = sut.getByTestId('name')
    fireEvent.input(nameInput, { target: { value: mockCustomer().name } })
    const nameInputStatus = sut.getByTestId('name-status')
    expect(nameInputStatus.title).toBe('OK')
    expect(nameInputStatus.textContent).toBe('✔️')
  })

  test('should show templateName error if Validation fails', () => {
    const { sut } = makeSut()
    const templateNameInput = sut.getByTestId('templateName')
    fireEvent.input(templateNameInput, { target: { value: mockCustomer().templates[0].name } })
    const templateNameInputStatus = sut.getByTestId('templateName-status')
    expect(templateNameInputStatus.title).toBe('OK')
    expect(templateNameInputStatus.textContent).toBe('✔️')
  })

  test('should show templateType error if Validation fails', () => {
    const { sut } = makeSut()
    const templateTypeInput = sut.getByTestId('templateType')
    fireEvent.input(templateTypeInput, { target: { value: mockCustomer().templates[0].type } })
    const templateTypeInputStatus = sut.getByTestId('templateType-status')
    expect(templateTypeInputStatus.title).toBe('OK')
    expect(templateTypeInputStatus.textContent).toBe('✔️')
  })

  test('should show templateCi error if Validation fails', () => {
    const { sut } = makeSut()
    const templateCiInput = sut.getByTestId('templateCi')
    fireEvent.click(templateCiInput)
    const templateCiInputStatus = sut.getByTestId('templateCi-status')
    expect(templateCiInputStatus.title).toBe('OK')
    expect(templateCiInputStatus.textContent).toBe('ℹ️')
  })

  test('should show templateCd error if Validation fails', () => {
    const { sut } = makeSut()
    const templateCdInput = sut.getByTestId('templateCd')
    fireEvent.click(templateCdInput)
    const templateCdInputStatus = sut.getByTestId('templateCd-status')
    expect(templateCdInputStatus.title).toBe('OK')
    expect(templateCdInputStatus.textContent).toBe('ℹ️')
  })

  test('should show templateVendor error if Validation fails', () => {
    const { sut } = makeSut()
    const templateVendorInput = sut.getByTestId('templateVendor')
    fireEvent.input(templateVendorInput, { target: { value: mockCustomer().templates[0].vendor } })
    const templateVendorInputStatus = sut.getByTestId('templateVendor-status')
    expect(templateVendorInputStatus.title).toBe('OK')
    expect(templateVendorInputStatus.textContent).toBe('✔️')
  })

  test('should show templateLang error if Validation fails', () => {
    const { sut } = makeSut()
    const templateLangInput = sut.getByTestId('templateLang')
    fireEvent.input(templateLangInput, { target: { value: mockCustomer().templates[0].lang } })
    const templateLangInputStatus = sut.getByTestId('templateLang-status')
    expect(templateLangInputStatus.title).toBe('OK')
    expect(templateLangInputStatus.textContent).toBe('✔️')
  })

  test('should show templateVersion error if Validation fails', () => {
    const { sut } = makeSut()
    const templateVersionInput = sut.getByTestId('templateVersion')
    fireEvent.input(templateVersionInput, { target: { value: mockCustomer().templates[0].version } })
    const templateVersionInputStatus = sut.getByTestId('templateVersion-status')
    expect(templateVersionInputStatus.title).toBe('OK')
    expect(templateVersionInputStatus.textContent).toBe('✔️')
  })

  test('should show templatePath error if Validation fails', () => {
    const { sut } = makeSut()
    const templatePathInput = sut.getByTestId('templatePath')
    fireEvent.input(templatePathInput, { target: { value: mockCustomer().templates[0].path } })
    const templatePathInputStatus = sut.getByTestId('templatePath-status')
    expect(templatePathInputStatus.title).toBe('OK')
    expect(templatePathInputStatus.textContent).toBe('✔️')
  })

  test('should show templateTool error if Validation fails', () => {
    const { sut } = makeSut()
    const templateToolInput = sut.getByTestId('templateTool')
    fireEvent.input(templateToolInput, { target: { value: mockCustomer().templates[0].tool } })
    const templateToolInputStatus = sut.getByTestId('templateTool-status')
    expect(templateToolInputStatus.title).toBe('OK')
    expect(templateToolInputStatus.textContent).toBe('✔️')
  })

  test('should show gitUser error if Validation fails', () => {
    const { sut } = makeSut()
    const gitUserInput = sut.getByTestId('gitUser')
    fireEvent.input(gitUserInput, { target: { value: mockCustomer().git.user } })
    const gitUserInputStatus = sut.getByTestId('gitUser-status')
    expect(gitUserInputStatus.title).toBe('OK')
    expect(gitUserInputStatus.textContent).toBe('✔️')
  })

  test('should show gitPassword error if Validation fails', () => {
    const { sut } = makeSut()
    const gitPasswordInput = sut.getByTestId('gitPassword')
    fireEvent.input(gitPasswordInput, { target: { value: mockCustomer().git.pass } })
    const gitPasswordInputStatus = sut.getByTestId('gitPassword-status')
    expect(gitPasswordInputStatus.title).toBe('OK')
    expect(gitPasswordInputStatus.textContent).toBe('✔️')
  })

  test('should show sonarHost error if Validation fails', () => {
    const { sut } = makeSut()
    const sonarHostInput = sut.getByTestId('sonarHost')
    fireEvent.input(sonarHostInput, { target: { value: mockCustomer().sonar.host } })
    const sonarHostInputStatus = sut.getByTestId('sonarHost-status')
    expect(sonarHostInputStatus.title).toBe('OK')
    expect(sonarHostInputStatus.textContent).toBe('✔️')
  })

  test('should show sonarToken error if Validation fails', () => {
    const { sut } = makeSut()
    const sonarTokenInput = sut.getByTestId('sonarToken')
    fireEvent.input(sonarTokenInput, { target: { value: mockCustomer().sonar.token } })
    const sonarTokenInputStatus = sut.getByTestId('sonarToken-status')
    expect(sonarTokenInputStatus.title).toBe('OK')
    expect(sonarTokenInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateName error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateNameInput = sut.getByTestId('remoteStateName')
    fireEvent.input(remoteStateNameInput, { target: { value: mockCustomer().remoteState[0].name } })
    const remoteStateNameInputStatus = sut.getByTestId('remoteStateName-status')
    expect(remoteStateNameInputStatus.title).toBe('OK')
    expect(remoteStateNameInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateBusinessUnit error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateBusinessUnitInput = sut.getByTestId('remoteStateBusinessUnit')
    fireEvent.input(remoteStateBusinessUnitInput, { target: { value: mockCustomer().remoteState[0].businessUnit } })
    const remoteStateBusinessUnitInputStatus = sut.getByTestId('remoteStateBusinessUnit-status')
    expect(remoteStateBusinessUnitInputStatus.title).toBe('OK')
    expect(remoteStateBusinessUnitInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateEnvironment error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateEnvironmentInput = sut.getByTestId('remoteStateEnvironment')
    fireEvent.input(remoteStateEnvironmentInput, { target: { value: mockCustomer().remoteState[0].environment } })
    const remoteStateEnvironmentInputStatus = sut.getByTestId('remoteStateEnvironment-status')
    expect(remoteStateEnvironmentInputStatus.title).toBe('OK')
    expect(remoteStateEnvironmentInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateVendor error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateVendorInput = sut.getByTestId('remoteStateVendor')
    fireEvent.input(remoteStateVendorInput, { target: { value: mockCustomer().remoteState[0].vendor } })
    const remoteStateVendorInputStatus = sut.getByTestId('remoteStateVendor-status')
    expect(remoteStateVendorInputStatus.title).toBe('OK')
    expect(remoteStateVendorInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateRegion error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateRegionInput = sut.getByTestId('remoteStateRegion')
    fireEvent.input(remoteStateRegionInput, { target: { value: mockCustomer().remoteState[0].region } })
    const remoteStateRegionInputStatus = sut.getByTestId('remoteStateRegion-status')
    expect(remoteStateRegionInputStatus.title).toBe('OK')
    expect(remoteStateRegionInputStatus.textContent).toBe('✔️')
  })

  test('should show remoteStateType error if Validation fails', () => {
    const { sut } = makeSut()
    const remoteStateTypeInput = sut.getByTestId('remoteStateType')
    fireEvent.input(remoteStateTypeInput, { target: { value: mockCustomer().remoteState[0].type } })
    const remoteStateTypeInputStatus = sut.getByTestId('remoteStateType-status')
    expect(remoteStateTypeInputStatus.title).toBe('OK')
    expect(remoteStateTypeInputStatus.textContent).toBe('✔️')
  })

  test('should show outputName error if Validation fails', () => {
    const { sut } = makeSut()
    const outputNameInput = sut.getByTestId('outputName')
    fireEvent.input(outputNameInput, { target: { value: mockCustomer().output.name } })
    const outputNameInputStatus = sut.getByTestId('outputName-status')
    expect(outputNameInputStatus.title).toBe('OK')
    expect(outputNameInputStatus.textContent).toBe('✔️')
  })

  test('should enable create button if form is valid', () => {
    const { sut } = makeSut()
    populateForm(sut)
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(false)
  })

  test('should show spinner on submit', () => {
    const { sut } = makeSut()
    populateForm(sut)
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(false)
    fireEvent.click(createButton)
    const spinner = sut.getByTestId('spinner')
    expect(spinner).toBeTruthy()
  })

  test('should call AddCustomer with correct values', () => {
    const { sut, addCustomerSpy } = makeSut()
    const customer = mockCustomerParams()
    fireEvent.input(sut.getByTestId('name'), { target: { value: customer.name } })
    fireEvent.input(sut.getByTestId('templateName'), { target: { value: customer.templates[0].name } })
    fireEvent.input(sut.getByTestId('templateType'), { target: { value: customer.templates[0].type } })
    fireEvent.click(sut.getByTestId('templateCi'))
    fireEvent.click(sut.getByTestId('templateCd'))
    fireEvent.input(sut.getByTestId('templateVendor'), { target: { value: customer.templates[0].vendor } })
    fireEvent.input(sut.getByTestId('templateLang'), { target: { value: customer.templates[0].lang } })
    fireEvent.input(sut.getByTestId('templateVersion'), { target: { value: customer.templates[0].version } })
    fireEvent.input(sut.getByTestId('templatePath'), { target: { value: customer.templates[0].path } })
    fireEvent.input(sut.getByTestId('templateTool'), { target: { value: customer.templates[0].tool } })
    fireEvent.input(sut.getByTestId('gitUser'), { target: { value: customer.git.user } })
    fireEvent.input(sut.getByTestId('gitPassword'), { target: { value: customer.git.pass } })
    fireEvent.input(sut.getByTestId('sonarHost'), { target: { value: customer.sonar.host } })
    fireEvent.input(sut.getByTestId('sonarToken'), { target: { value: customer.sonar.token } })
    fireEvent.input(sut.getByTestId('remoteStateName'), { target: { value: customer.remoteState[0].name } })
    fireEvent.input(sut.getByTestId('remoteStateBusinessUnit'), { target: { value: customer.remoteState[0].businessUnit } })
    fireEvent.input(sut.getByTestId('remoteStateEnvironment'), { target: { value: customer.remoteState[0].environment } })
    fireEvent.input(sut.getByTestId('remoteStateVendor'), { target: { value: customer.remoteState[0].vendor } })
    fireEvent.input(sut.getByTestId('remoteStateRegion'), { target: { value: customer.remoteState[0].region } })
    fireEvent.input(sut.getByTestId('remoteStateType'), { target: { value: customer.remoteState[0].type } })
    fireEvent.input(sut.getByTestId('outputName'), { target: { value: customer.output.name } })
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(false)
    fireEvent.click(createButton)
    customer.templates[0].ci = true
    customer.templates[0].cd = true
    expect(addCustomerSpy.customerParams).toEqual({
      name: customer.name,
      templates: [customer.templates[0]],
      git: customer.git,
      sonar: customer.sonar,
      remoteState: [customer.remoteState[0]],
      output: customer.output
    })
  })

  test('should call AddCustomer only once', () => {
    const { sut, addCustomerSpy } = makeSut()
    populateForm(sut)
    const createButton = sut.getByTestId('createButton') as HTMLButtonElement
    expect(createButton.disabled).toBe(false)
    fireEvent.click(createButton)
    fireEvent.click(createButton)
    expect(addCustomerSpy.callsCount).toEqual(1)
  })

  test('should not call AddCustomer if form is invalid', () => {
    const validationError = faker.random.words()
    const { sut, addCustomerSpy } = makeSut({ validationError })
    fireEvent.submit(sut.getByTestId('form'))
    expect(addCustomerSpy.callsCount).toEqual(0)
  })
})
