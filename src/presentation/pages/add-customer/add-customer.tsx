import AddButton from '@/presentation/components/buttons/add-button/add-button'
import CreateButton from '@/presentation/components/buttons/create-button/create-button'
import FormStatus from '@/presentation/components/form-status/form-status'
import Input from '@/presentation/components/input/input'
import ModalHeader from '@/presentation/components/modal-header/modal-header'
import React, { useEffect, useState } from 'react'
import Styles from './add-customer-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { AddCustomer as AddCustomerUsecase } from '@/domain/usecases/add-customer'

type Props = {
  validation: Validation
  addCustomer: AddCustomerUsecase
}

const AddCustomer: React.FC<Props> = ({ validation, addCustomer }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    templateName: '',
    templateType: '',
    templateCi: false,
    templateCd: false,
    templateVendor: '',
    templateLang: '',
    templateVersion: '',
    templatePath: '',
    templateTool: '',
    gitUser: '',
    gitPassword: '',
    sonarHost: '',
    sonarToken: '',
    remoteStateName: '',
    remoteStateBusinessUnit: '',
    remoteStateEnvironment: '',
    remoteStateVendor: '',
    remoteStateRegion: '',
    remoteStateType: '',
    outputName: '',
    nameError: '',
    templateNameError: '',
    templateTypeError: '',
    templateCiError: '',
    templateCdError: '',
    templateVendorError: '',
    templateLangError: '',
    templateVersionError: '',
    templatePathError: '',
    templateToolError: '',
    gitUserError: '',
    gitPasswordError: '',
    sonarHostError: '',
    sonarTokenError: '',
    remoteStateNameError: '',
    remoteStateBusinessUnitError: '',
    remoteStateEnvironmentError: '',
    remoteStateVendorError: '',
    remoteStateRegionError: '',
    remoteStateTypeError: '',
    outputNameError: '',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      templateNameError: validation.validate('templateName', state.templateName),
      templateTypeError: validation.validate('templateType', state.templateType),
      templateCiError: validation.validate('templateCi', state.templateCi),
      templateCdError: validation.validate('templateCd', state.templateCd),
      templateVendorError: validation.validate('templateVendor', state.templateVendor),
      templateLangError: validation.validate('templateLang', state.templateLang),
      templateVersionError: validation.validate('templateVersion', state.templateVersion),
      templatePathError: validation.validate('templatePath', state.templatePath),
      templateToolError: validation.validate('templateTool', state.templateTool),
      gitUserError: validation.validate('gitUser', state.gitUser),
      gitPasswordError: validation.validate('gitPassword', state.gitPassword),
      sonarHostError: validation.validate('sonarHost', state.sonarHost),
      sonarTokenError: validation.validate('sonarToken', state.sonarToken),
      remoteStateNameError: validation.validate('remoteStateName', state.remoteStateName),
      remoteStateBusinessUnitError: validation.validate('remoteStateBusinessUnit', state.remoteStateBusinessUnit),
      remoteStateEnvironmentError: validation.validate('remoteStateEnvironment', state.remoteStateEnvironment),
      remoteStateVendorError: validation.validate('remoteStateVendor', state.remoteStateVendor),
      remoteStateRegionError: validation.validate('remoteStateRegion', state.remoteStateRegion),
      remoteStateTypeError: validation.validate('remoteStateType', state.remoteStateType),
      outputNameError: validation.validate('outputName', state.outputName)
    })
  }, [state.name,
    state.templateName,
    state.templateType,
    state.templateCi,
    state.templateCd,
    state.templateVendor,
    state.templateLang,
    state.templateVersion,
    state.templatePath,
    state.templateTool,
    state.gitUser,
    state.gitPassword,
    state.sonarHost,
    state.sonarToken,
    state.remoteStateName,
    state.remoteStateBusinessUnit,
    state.remoteStateEnvironment,
    state.remoteStateVendor,
    state.remoteStateRegion,
    state.remoteStateType,
    state.outputName])

  const hasValidationError = (): boolean => {
    return !!state.nameError ||
      !!state.templateNameError ||
      !!state.templateTypeError ||
      !!state.templateCiError ||
      !!state.templateCdError ||
      !!state.templateVendorError ||
      !!state.templateLangError ||
      !!state.templateVersionError ||
      !!state.templatePathError ||
      !!state.templateToolError ||
      !!state.gitUserError ||
      !!state.gitPasswordError ||
      !!state.sonarHostError ||
      !!state.sonarTokenError ||
      !!state.remoteStateNameError ||
      !!state.remoteStateBusinessUnitError ||
      !!state.remoteStateEnvironmentError ||
      !!state.remoteStateVendorError ||
      !!state.remoteStateRegionError ||
      !!state.remoteStateTypeError ||
      !!state.outputNameError
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true
    })
    await addCustomer.add({
      name: state.name,
      templates: [{
        name: state.templateName,
        type: state.templateType,
        ci: state.templateCi,
        cd: state.templateCd,
        vendor: state.templateVendor,
        lang: state.templateLang,
        version: state.templateVersion,
        path: state.templatePath,
        tool: state.templateTool
      }],
      git: {
        user: state.gitUser,
        pass: state.gitPassword
      },
      sonar: {
        host: state.sonarHost,
        token: state.sonarToken
      },
      remoteState: [{
        name: state.remoteStateName,
        businessUnit: state.remoteStateBusinessUnit,
        environment: state.remoteStateEnvironment,
        vendor: state.remoteStateVendor,
        region: state.remoteStateRegion,
        type: state.remoteStateType
      }],
      output: {
        name: state.outputName
      }
    })
  }

  return (
    <div className={Styles.addCustomer}>
      <ModalHeader title="Adicionar cliente" />

      <Context.Provider value={{ state, setState }}>
        <form id="add-customer" className={Styles.form} onSubmit={handleSubmit}>
          <Input type="text" name="name" id="name" title="Nome *" />

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>template</span>
            <Input type="text" name="templateName" id="templateName" title="Nome *" />
            <div className={Styles.grid311}>
              <Input type="text" name="templateType" id="templateType" title="Tipo *" />
              <Input type="checkbox" name="templateCi" id="templateCi" title="CI" />
              <Input type="checkbox" name="templateCd" id="templateCd" title="CD" />
            </div>
            <div className={Styles.grid111}>
              <Input type="text" name="templateVendor" id="templateVendor" title="Fornecedor" />
              <Input type="text" name="templateLang" id="templateLang" title="Linguagem *" />
              <Input type="text" name="templateVersion" id="templateVersion" title="Versão *" />
            </div>
            <div className={Styles.grid11}>
              <Input type="text" name="templatePath" id="templatePath" title="Caminho *" />
              <Input type="text" name="templateTool" id="templateTool" title="Ferramenta *" />
            </div>
          </section>

          <section className={Styles.alignRight}>
            <AddButton />
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>git</span>
            <div className={Styles.grid11}>
              <Input type="text" name="gitUser" id="gitUser" title="Usuário *" />
              <Input type="text" name="gitPassword" id="gitPassword" title="Senha *" />
            </div>
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>sonar</span>
            <div className={Styles.grid11}>
              <Input type="text" name="sonarHost" id="sonarHost" title="Host *" />
              <Input type="text" name="sonarToken" id="sonarToken" title="Token *" />
            </div>
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>remote state</span>
            <Input type="text" name="remoteStateName" id="remoteStateName" title="Nome *" />
            <div className={Styles.grid11}>
              <Input type="text" name="remoteStateBusinessUnit" id="remoteStateBusinessUnit" title="Unidade" />
              <Input type="text" name="remoteStateEnvironment" id="remoteStateEnvironment" title="Ambiente" />
            </div>
            <div className={Styles.grid111}>
              <Input type="text" name="remoteStateVendor" id="remoteStateVendor" title="Fornecedor *" />
              <Input type="text" name="remoteStateRegion" id="remoteStateRegion" title="Região *" />
              <Input type="text" name="remoteStateType" id="remoteStateType" title="Tipo *" />
            </div>
          </section>

          <section className={Styles.alignRight}>
            <AddButton />
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>output</span>
            <Input type="text" name="outputName" id="outputName" title="Nome *" />
          </section>
        </form>

        <footer className={Styles.footer}>
          <FormStatus />
          <CreateButton disabled={hasValidationError()} form="add-customer" />
        </footer>
      </Context.Provider>
    </div>
  )
}

export default AddCustomer
